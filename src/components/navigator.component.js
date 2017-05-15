import Component from './component';
import {} from './navigator.component.scss';

class NavigatorComponent extends Component {
  constructor(options) {
    super(options);
    this.placeHolder = '\tnavigator component placeholder\t';
    this.scrollerPath = 0;
    this.lastEvent = null;
  }
  setHandlers() {
    document.getElementById('left-arrow').onclick = this.next.bind(this);
    document.getElementById('right-arrow').onclick = this.prev.bind(this);
    document.getElementById('separator-line').ondrag = this.onScroller.bind(this);
    document.getElementById("separator-line").addEventListener("dragstart", function(e) {
      var crt = this.cloneNode(true);
      crt.style.backgroundColor = "red";
      crt.style.display = "none"; /* or visibility: hidden, or any of the above */
      document.body.appendChild(crt);
      e.dataTransfer.setDragImage(crt, 0, 0);
    }, false);
  }
  onScroller(event) {
    console.log(event.pageX);
    if (event.pageX === 0) {
      return;
    }
    if (!this.lastEvent) {
      this.lastEvent = event;
    } else if (this.lastEvent.pageX !== event.pageX) {
      this.scrollerPath += event.pageX - this.lastEvent.pageX;
      this.lastEvent = event;
    }

    if (this.scrollerPath >= 30) {
      this.next();
      this.scrollerPath = 0;
    } else if (this.scrollerPath <= -30) {
      this.prev();
      this.scrollerPath = 0;
    }
  }
  next() {
    this.storage.data.infoService.next();
    this.storage.data.infoService.getData(this.storage.data.itemsPerPage)
      .then(
        (obj) => {
          this.storage.dispatch({ videoItems: obj.content });
        },
        (err) => { console.log(err); },
      );
  }
  prev() {
    this.storage.data.infoService.prev();
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
      <div draggable="true" id="separator-line" style="position:relative;left:${window.innerWidth > 400 ? (( 500 * this.storage.data.infoService.current * 1.0 / this.storage.data.infoService.data.length) | 1) : 0}px" class="separator"></div>
      <div class="result-navigation">
        <input id="right-arrow" type="button" value="">
        <input id="left-arrow" type="button" value="">
      </div>
    `;
  }
}

module.exports = NavigatorComponent;
