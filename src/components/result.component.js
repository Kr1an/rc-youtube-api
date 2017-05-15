import Component from './component';
import ListComponent from './list.compontent';
import NavigatorComponent from './navigator.component';
import {} from './result.component.scss';


class ResultComponent extends Component {
  addContent() {
    super.addContent();
    this.content.list = new ListComponent(this.options);
    this.content.navigator = new NavigatorComponent(this.options);
  }
  render() {
    const lastAction = this.storage.data.infoService.lastAction;
    const swipeClass = lastAction === 0 ? 'swipe-left' : lastAction === 1 ? 'swipe-rigth' : '';
    console.log(swipeClass);
    return `
      <div class="result-container">
        <div class="list-keeper ${swipeClass}">
          ${this.content.list}
        </div>
        ${this.content.navigator}
      </div>
    `;
  }
}

module.exports = ResultComponent;
