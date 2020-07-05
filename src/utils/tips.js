// a 链接
export const class_a = 
  'a链接 active hover link focus 有默认的样式，可以通过 a:hover a:active 修改。本例修改 active 样式'
export const class_checked = 
  'input 选中 checked 使能 disabled, input[type=radio]:checked input[type=text]:disabled, 设置相应的样式'

export const firstOfType = 
  `li:first-child 适用于ul下第一个元素是li的情况，如果第一个元素不是li，则无效。
  li:first-of-type 对ul下第一个li有效，不管ul下第一个元素是不是li`

export const nthChildOfType = 
  `nth-child(2n) nth-child(2n-1) 奇偶性，如果ul下包含其他非li元素，nth-child也会把非li元素包含在奇偶性中;
   nth-of-type 不会将非li元素包含在奇偶性中，只对li元素有效。li:nth-child(n) 如果n指定的index不是li而是span，则无效。
   li:nth-of-type(n),不将非li元素排序。li:only-child如果包含非li元素，无效；
   li:only-of-child,li元素有且只能包含一个，可包含非li元素`