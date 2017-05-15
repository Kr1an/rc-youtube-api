import Component from './component';
import ItemComponent from './item.component';
import {} from './list.component.scss';

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

class ListComponent extends Component {
  constructor(options) {
    super(options);
    this.dispatch({ itemCount: 10 });
  }
  setHandlers() {
    const gesuredZone = document.getElementById('list');
    gesuredZone.addEventListener('touchstart', (event) => {
        touchstartX = event.changedTouches[0].screenX;
    }, false);
    gesuredZone.addEventListener('touchend', (event) => {
        touchendX = event.changedTouches[0].screenX;
        this.handleGesure();
    }, false);
    gesuredZone.addEventListener('mousedown', (event) => {
      touchstartX = event.pageX;
    }, false);
    gesuredZone.addEventListener('mouseup', (event) => {
        touchendX = event.pageX;
        this.handleGesure();
    }, false);
  }
  handleGesure() {
    var swiped = 'swiped: ';
    if (touchstartX - touchendX > 30) {
      this.next();
    }
    if (touchendX - touchstartX > 30) {
      this.prev();
    }
  }
  next() {
  this.storage.data.infoService.next(this.storage.data.itemsPerPage);
    this.storage.data.infoService.getData(this.storage.data.itemsPerPage)
      .then(
        (obj) => {
          this.storage.dispatch({ videoItems: obj.content });
        },
        (err) => { console.log(err); },
      );
  }
  prev() {
    this.storage.data.infoService.prev(this.storage.data.itemsPerPage);
    this.storage.data.infoService.getData(this.storage.data.itemsPerPage)
      .then(
        (obj) => {
           this.storage.dispatch({ videoItems: obj.content });
        },
        (err) => { console.log(err); },
      );
  }
  render() {
    return `
      <div id="list" class="result-list">
        ${
          this.content
            .join('')
        }
      </div>
    `;
  }
  addContent() {
    super.addContent();
    if (this.storage.data.videoItems) {
      this.content = new Array(this.storage.data.itemsPerPage)
        .fill({})
        .map((i, idx) => new ItemComponent(this.options, idx));
    } else {
      this.content = [];
    }
  }
}

module.exports = ListComponent;
