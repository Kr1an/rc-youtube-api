import Component from './component';
import {} from './item.component.scss';

class ItemComponent extends Component {
  constructor(options, index) {
    super(options);
    this.index = index;
    this.placeHolder = `|item ${this.index}`;
  }
  render() {
    let content = '';
    if (this.storage.data.videoItems.length > this.index) {
      content = this.storage.data.videoItems[this.index];
    } else {
      return '';
    }
    const imagePath = content.snippet.thumbnails.medium.url;
    return `
      <div class="item">
        <div id="item${this.index}" class="img-container"><div class="img" style="background-image: url(${imagePath}); background-color: white;tran">

        </div><h2 class="views">${content.statistics.viewCount} views</h2><h2 class="author">by: <a href="https://www.youtube.com/channel/${content.snippet.channelId}">${content.snippet.channelTitle}</a></h2></div>
        <div><a href="https://www.youtube.com/watch?v=${content.id.videoId}"><h1>${content.snippet.title}</h1></a>
        <p>${content.snippet.description}</p></div>
        <div class="other"><h2 class="published">${content.snippet.publishedAt.split('').slice(0,10).join('')}</h2></div>
      </div>
    `;
  }
}

module.exports = ItemComponent;
