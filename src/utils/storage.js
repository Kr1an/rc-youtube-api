class Storage {
  constructor(data = {}) {
    this.handlers = [];
    this.data = data;
  }
  addListeners(handlers) {
    this.handlers = [...this.handlers, ...handlers];
  }
  dispatch(action = {}) {
    this.data = Object.assign(
      {},
      this.data,
      action,
    );
    this.handlers.forEach((handler) => {
      handler(this.data);
    });
  }
}

module.exports = Storage;
