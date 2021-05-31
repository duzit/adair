import copy from './copy.js';
import focus from './focus.js';
import debounce from './debounce.js';
import permission from './permission.js';
import draggable from './draggable';
import screenfull from './screenfull';
import tooltip from './tooltip';
import backtop from './backtop';

// https://mp.weixin.qq.com/s/XIaJM8GHNYHReg91uRlCCg

const directives = {
  copy,
  focus,
  debounce,
  permission,
  draggable,
  screenfull,
  tooltip,
  backtop
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
