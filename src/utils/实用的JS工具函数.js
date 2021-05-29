// https://mp.weixin.qq.com/s/FF_-Mi2ntESUCWsEo4BB1Q

console.log('实用的JS工具函数');
// 1. 生成一周时间
function getWeekTime() {
  return [...new Array(7)].map((i, index) =>
    new Date(Date.now() + index * 8.64e7).toLocaleDateString());
}
console.log(getWeekTime()); // ["2020/7/22", "2020/7/23", "2020/7/24", "2020/7/25", "2020/7/26", "2020/7/27", "2020/7/28"]

// 2. 类型判断
// Object.prototype.toString.call(null); // [object Null]
// Object.prototype.toString.call(undefined) // "[object Undefined]"
function isType(target, type) {
  const targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  return targetType === type.toLowerCase();
}

console.log(isType([], 'Array')); // true
console.log(isType({}, 'Object')); // true
console.log(isType(() => {}, 'Function')); // true

// 3. 对象属性剔除
function delProperty(object, props = []) {
  const res = {};
  Object.keys(object).forEach((key) => {
    if (props.includes(key) === false) {
      res[key] =
        typeof object[key] === 'object' && object[key] !== 'null'
          ? JSON.parse(JSON.stringify(object[key]))
          : object[key];
    }
  });
  return res;
}

const objO = {
  name: 'xiaom',
  age: 12,
  Null: null,
  other: {
    sex: 'male',
  },
};
Object.keys(objO).map((key) => {
  console.log(objO[key]);
});

console.log(delProperty(objO, 'age'));
// {
//   name: 'xiaom',
//   Null: null,
//   other: {
//     sex: 'male'
//   }
// }

// 4. 日期格式化
/**
 * @param {string} format
 * @param {number} timestamp - 时间戳
 * @return {string}
 */
function formatDate(format = 'Y-M-D h:m', timestamp = Date.now()) {
  const date = new Date(timestamp);
  const dateInfo = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };
  const formatNumber = (n) => (n >= 10 ? n : `0${ n}`);
  const res = format
    .replace('Y', dateInfo.Y)
    .replace('M', dateInfo.M)
    .replace('D', dateInfo.D)
    .replace('h', formatNumber(dateInfo.h))
    .replace('m', formatNumber(dateInfo.m))
    .replace('s', formatNumber(dateInfo.s));
  return res;
}

console.log(formatDate()); // 2020-7-22 19:10
console.log(formatDate('h:m Y/M/D')); // 19:10 2020/7/22

// 5. 防抖 连续多次点击只触发一次
// 性能优化方案，防抖用于减少函数请求次数，对于频繁的请求，只执行这些请求的最后一次
function debounce(fn, time = 300) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, time);
  };
}

const debounceHandler = debounce(() => {
  console.log('debounce');
}, 400);

// 6. 节流
// 性能优化方案，节流用于减少函数请求次数，与防抖不同，节流是在一段时间执行一次。
function throttle(fn, time = 300) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this);
        timer = null;
      }, time);
    }
  };
}

const throttleHandler = throttle(() => {
  console.log('throttle');
}, 400);

// 6. base64数据导出文件下载
/**
 * @param {string} filename - 下载时的文件名
 * @param {string} data - base64字符串
 */
function downloadFile(filename, data) {
  const downloadLink = document.createElement('a');
  if (downloadLink) {
    document.body.appendChild(downloadLink);
    downloadLink.style = 'display: none';
    downloadLink.download = filename;
    downloadLink.href = data;
    if (document.createEvent) {
      const downloadEvt = document.createEvent('MouseEvents');
      downloadEvt.initEvent('click', true, false);
      downloadLink.dispatchEvent(downloadEvt);
    } else if (document.createEventObject) {
      downloadLink.fireEvent('onclick');
    } else if (typeof downloadLink.onclick === 'function') {
      downloadLink.onclick();
    }
    document.body.removeChild(downloadLink);
  }
}

// 7. 检测是否为PC端浏览器

function isPCBroswer() {
  const e = window.navigator.userAgent.toLowerCase();
  const t = e.match(/ipad/i) == 'ipad';
  const i = e.match(/iphone/i) == 'iphone';
  const r = e.match(/midp/i) == 'midp';
  const n = e.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  const a = e.match(/ucweb/i) == 'ucweb';
  const o = e.match(/android/i) == 'android';
  const s = e.match(/windows ce/i) == 'windows ce';
  const l = e.match(/windows mobile/i) == 'windows mobile';
  return !(t || i || r || n || a || o || s || l);
}

console.log(isPCBroswer(), 'isPCBroswer');

// 获取当前页面滚动位置
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});
// Example
// getScrollPosition(); // {x: 0, y: 200}

// 平滑的滚动到顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    // requestAnimationFrame IE10 开始支持
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
// Example
// scrollToTop();

// 判断元素是否在窗口可见
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
// Examples
// elementIsVisibleInViewport(el); // (不完全可见)
// elementIsVisibleInViewport(el, true); // (部分可见)

// 判断当前设备类型 移动 or PC
const detectDeviceType = () =>
  (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop');
// Example
// detectDeviceType(); // "Mobile" or "Desktop"

// 获取两个日期之间的天数
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
// Example
// getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
