/* eslint-disable no-undef */
// moment.js
console.log(moment(), 'moment()'); // 等价于 moment(new Date())
console.log(moment().format('YYYY-MM-DD'), '--YYYY-MM-DD');
console.log(moment().format('YYYY'), '--YYYY');
console.log(moment().format('L'), '--L');

//  获取 年月日
const val0 = moment('2022-10-22'); // new Date(string)
console.log(val0, 'moment(\'2020-10-22\')');
console.log(val0.get('year'), 'get year');
console.log(val0.get('month') + 1, 'get month + 1');
console.log(val0.get('date'), 'get date');

// 通过将原始的 moment 设置为时间单位的开头来对其进行更改 start of time
const localMoment = moment();
console.log(localMoment.startOf('day')); // 设置为今天上午 12:00
console.log(localMoment.startOf('year')); // 设置为今年一月1日上午 12:00
console.log(localMoment.startOf('month')); // 设置为本月1日上午 12:00

console.log(localMoment.year(), 'moment.year');
// or
console.log(localMoment.get('year'), 'moment.get("year")'); // 2020

console.log(localMoment.month() + 1, 'moment.month'); // 1
console.log(localMoment.date(), 'moment.date'); // 1
console.log(localMoment.format('YYYY-MM-DD'), 'localMoment format'); // 2020-01-01
