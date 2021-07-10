// 常用方法

// https://mp.weixin.qq.com/s/BPhaavjnUmx7y2Lln0eYgA 

// 求和 最大值 最小值
// 数组求和
export const sum = (array) => {
  return array.reduce((a, b) => a + b);
}

// 最大值
export const max = (array) => {
  return array.reduce((a, b) => a > b ? a : b);
}

// 最小值
export const min = (array) => {
  return array.reduce((a, b) => a < b ? a : b);
}
