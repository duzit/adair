// new Date API 处理日期溢出特性（进位）
function getMonthCountDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

console.log(`2020-2: ${getMonthCountDay(2020, 2)}天`);
console.log(`2021-2: ${getMonthCountDay(2021, 2)}天`);

// new Date API 处理日期溢出特性（退位）
function getMonthCountDay2(year, month) {
  return new Date(year, month, 0).getDate();
}

console.log(`2014-2: ${getMonthCountDay2(2020, 2)}天`);
console.log(`2015-2: ${getMonthCountDay2(2021, 2)}天`);


// 获取月初是周几
function getMonthStartWeekDay(year, month) {
  return new Date(year, month - 1, 1).getDay();
}

// 获取月初是周几
function getMonthEndWeekDay(year, month) {
  return new Date(year, month, 0).getDay();
}

console.log(`2021-1 月初是周 ${getMonthStartWeekDay(2021, 1)} .`);
console.log(`2021-1 月末是周 ${getMonthEndWeekDay(2021, 1)} .`);