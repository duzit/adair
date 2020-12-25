import copy from './copy.js';
import focus from './focus.js';

const directives = {
  copy,
  focus
};

export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key]);
    })
  }
}