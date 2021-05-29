import copy from './copy.js';
import focus from './focus.js';
import debounce from './debounce.js';
import permission from './permission.js';
import draggable from './draggable';

const directives = {
  copy,
  focus,
  debounce,
  permission,
  draggable,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
