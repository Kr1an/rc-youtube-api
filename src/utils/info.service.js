class InfoService {
  constructor() {
    this.data = [];
    this.rowData = {};
    this.query = '';
    this.current = 0;
    this.lastAction = -1;
  }
  next(count = 1) {
    if (this.current >= this.data.length) {
      this.lastAction = -1;
      return;
    }
    this.current += count;
    if (this.current >= this.data.length / 2) {
      this.mineData()
        .then(
          () => {
            this.data = [...this.data, ...this.rowData.items];
          },
        );
    }
    this.lastAction = 0;
  }
  prev(count = 1) {
    this.current -= count;
    if (this.current < 0) {
      this.current = 0;
      this.lastAction = -1;
      return;
    }
    this.lastAction = 1;
  }
  updateQuery(query) {
    if (this.query !== query) {
      this.query = query;
      this.current = 0;
      this.data = [];
      this.rowData = {};
    }
  }
  getData(count) {
    return new Promise((resolve, reject) => {
      const needMoreDataCount = count - (this.data.length - this.current);
      if (needMoreDataCount > 0) {
        this.mineData()
          .then(
            (query) => {
              this.data = [...this.data, ...this.rowData.items];
              resolve({ content: this.data.slice(this.current, this.current + count), query });
            },
            (error) => {
              reject(error);
            },
          );
      } else {
        resolve({ content: this.data.slice(this.current, this.current + count) });
      }
    });
  }
  mineData() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const pageToken = this.rowData && this.rowData.nextPageToken;
      const transformedQuery = this.query.split('')
        .filter(x => !!x.match(/[ a-zA-Z0-9а-яА-Я]/i))
        .map(x => x === ' ' ? '+' : x)
        .join('');
      const query = this.query;
      xhr.open('GET', `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&pageToken=${pageToken || ''}&order=relevance&q=${transformedQuery}&key=AIzaSyBbe529_VK-hz-KW40wmM7QJ_JrEwCh0UM`, true);
      xhr.send();
      xhr.onload = () => {
        const rowData = JSON.parse(xhr.responseText);
        const xhrStat = new XMLHttpRequest();
        const ids = rowData.items.map(x => x.id.videoId).join(',');
        xhrStat.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${ids}&key=AIzaSyBbe529_VK-hz-KW40wmM7QJ_JrEwCh0UM`, true);
        xhrStat.send();

        xhrStat.onload = () => {
          const statistics = JSON.parse(xhrStat.responseText);
          this.rowData = [];
          for (let i = 0; i < rowData.items.length; i += 1) {
            rowData.items[i].statistics = statistics.items[i].statistics;
          }
          this.rowData = rowData;
          resolve(query);
        };
        xhrStat.onerror = (err) => {
          reject(err);
        };
      };
      xhr.onerror = (err) => {
        reject(err);
      };
    });
  }
}

module.exports = InfoService;
