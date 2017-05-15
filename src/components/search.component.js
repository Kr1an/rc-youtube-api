import Component from './component';
import {} from './search.component.scss';

class SearchComponent extends Component {
  constructor(options) {
    super(options);
    this.dispatch({ searchValue: '' });
  }
  setHandlers() {
    document.getElementById('input').oninput = this.onInputChange.bind(this);
    document.getElementById('input').onfocus = this.onInputChange.bind(this);
    if (this.storage.data.isFocused) {
      document.getElementById('input').focus();
    }
    document.getElementById('input').value = document.getElementById('input').value;
  }
  onInputChange(e) {
    this.storage.data.searchValue = e.target.value;
    this.storage.data.infoService.updateQuery(this.storage.data.searchValue);
    this.storage.data.infoService.getData(this.storage.data.itemsPerPage)
      .then(
        (obj) => {
          if (this.storage.data.searchValue === obj.query) {
            this.storage.data.isFocused = document.getElementById('input') === document.activeElement;
            this.storage.dispatch({ videoItems: obj.content });
          }
        },
        (err) => { console.log(err); },
      );
  }
  render() {
    return `
      <div class="search-container">
        <input type="text" tabindex="1" placeholder="find videos" autocomple="on" correction="off" type="text" id="input" value="${this.storage.data.searchValue}">
      </div>
    `;
  }
}

module.exports = SearchComponent;
