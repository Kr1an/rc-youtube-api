import Component from './component';
import SearchComponent from './search.component';
import ResultComponent from './result.component';
import {} from './app.component.scss';
import InfoService from '../utils/info.service';


class AppComponent extends Component {
  constructor(options) {
    super(options);
    this.addListeners([this.onStorageChange.bind(this)]);
    this.storage.data.videoItems = [];
    this.dispatch({
      infoService: new InfoService(),
      maxItemCount: 100,
      maxSearchValueLength: 20,
      itemsPerPage: this.calculateItemsPerPage(),
      videoItems: [],
    });
    window.onresize = this.onWindowResize.bind(this);
    this.addContent();
  }
  calculateItemsPerPage() {
    return Math.ceil(window.innerWidth / 500);
  }
  onWindowResize() {
    const newItemsPerPage = this.calculateItemsPerPage();
    if (this.storage.data.itemsPerPage !== newItemsPerPage) {
      console.log("resized")
      this.storage.data.infoService.getData(newItemsPerPage)
       .then(
          (obj) => {
            this.storage.dispatch({
              videoItems: obj.content,
              itemsPerPage: newItemsPerPage,
            });
            setTimeout(() => {
              this.storage.dispatch({});
            }, 20);
          },
          (err) => { console.log(err); },
        );
    }
  }
  render() {
    return `
      <div class="appContainer">
        ${this.content.search}
        ${this.content.result}
      </div>
    `;
  }
  addContent() {
    super.addContent();
    this.content.search = new SearchComponent(this.options);
    this.content.result = new ResultComponent(this.options);
  }
  appRender() {
    console.log("App Render");
    this.container.innerHTML = this.render();
    this.setHandlers();
  }
  onStorageChange() {
    this.storage.data.infoService.updateQuery(this.storage.data.searchValue);
    this.appRender();
  }
}

module.exports = AppComponent;
