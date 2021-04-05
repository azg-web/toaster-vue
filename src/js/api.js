import Component from './Component.vue'
import eventBus from './bus.js';

const Api = (Vue, globalOptions = {}) => {
  return {
    open(options) {
      let message;
      if (typeof options === 'string') message = options;

      const defaultOptions = {
        message
      };

      const propsData = Object.assign({}, defaultOptions, globalOptions, options);

      return new (Vue.extend(Component))({
        el: document.createElement('div'),
        propsData
      })
    },
    clear() {
      eventBus.emit('toast-clear')
    },
    success(message, title, options = {}) {
      return this.open(Object.assign({}, {
        message,
        title,
        type: 'success'
      }, options))
    },
    error(message, title, options = {}) {
      return this.open(Object.assign({}, {
        message,
        title,
        type: 'error'
      }, options))
    },
    warning(message, title, options = {}) {
      return this.open(Object.assign({}, {
        message,
        title,
        type: 'warning'
      }, options))
    },
    default(message, title, options = {}) {
      return this.open(Object.assign({}, {
        message,
        title,
        type: 'default'
      }, options))
    }
  }
};

export default Api;
