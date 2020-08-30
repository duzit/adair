## filter

### 全局注册
```js
// 全局注册过滤器
Vue.filter('toUpString', function(value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})
```

### 多个过滤器全局注册
```js
// 多个过滤器全局注册
// /src/common/filters.js
let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
export { dateServer }
// /src/main.js
import * as custom from './common/filters/custom'
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))
```

### 局部注册
```js
filters: {
  // 局部过滤器
  // 首字母大写
  capitalize: function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  bindFilter: function(value) {
    if (!value) return ''
    return value + '-bind'
  }
}
```

### 使用
```html
<div>{{ person.fName | toUpString }}</div>
<div :id="widthBind | bindFilter"></div>
```