## $data $props

```js
export default {
  data() {
    return {
      name: 'zhangsan',
      age: 12,
      _home: 'home', // 特殊命名方式 使用this._home不生效  this.$data._home 可以获取
      $water: 'water', // 特殊命名方式 使用this.$water不生效  this.$data.$water 可以获取
    }
  },
  props: {
    book: String,
    car: {
      type: String,
      default: 'BBA'
    }
  },
  created () {
    console.log(this.$data, '$data') // data Object
    console.log(this.$data.name === this.name, 'this.$data.num === this.num') // true
    console.log(this._home, '_home') // undefined 
    console.log(this.$water, '$water') // undefined 
    console.log(this.$data._home, '$data._home') // hz
    console.log(this.$data.$water, '$data.$water') // liu
    console.log(this.$props, '$props') // props Object
  },
}
```
