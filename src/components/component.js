class Component {
  constructor(options) {
    this.storage = options.storage;
    this.container = options.container;
    this.options = options;

    this.addListeners = this.addListeners.bind(this.storage);
    this.dispatch = this.dispatch.bind(this.storage);

    this.toString = this.render;
    this.placeHolder = 'Component Placeholder';
    this.addContent();
  }
  addListeners(handlers) {
    this.addListeners(handlers);
  }
  addContent() {
    this.content = {};
  }
  dispatch(action) {
    this.dispatch(action);
  }
  render() {
    return this.placeHolder;
  }
  setHandlers() {
    Object.keys(this.content).forEach((key) => { this.content[key].setHandlers(); });
  }
}

module.exports = Component;
