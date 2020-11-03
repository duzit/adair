/**
 * new Date();
 * new Date(value); value 毫秒数
 * new Date(dateString); 表示日期的字符串值
 * new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
 */

// 实例方法 
// getter setter
let date = new Date();

// 月份中的第几天 （1-31）
date.getDate();
date.setDate();

// 星期中的第几天 （0-6）
date.getDay();

// 年份 四位数年份返回四位数字
date.getFullYear();
date.setFullYear();

// 小时 （0-23）
date.getHours();
date.setHours();

// 毫秒 （0-999）
date.getMilliseconds();
date.setMilliseconds();

// 分钟 (0-59)
date.getMinutes();
date.setMinutes();

// 月份 （0-11）
date.getMonth();
date.setMonth();

// 秒数 （0-59）
date.getSeconds();
date.setSeconds();

// 从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数
date.getTime();
date.setTime();
