## Computed

### 不在 computed 使用 this 方法 
```js
computed: {
  name({ $attrs, $route, $data, $store, $props, $listeners }) {
    console.log($attrs, '$attrs');
    console.log($route, '$route');
    console.log($data, '$data');
    console.log($store, '$store');
    console.log($props, '$props');
    console.log($listeners, '$listeners');
    return 'Computed';
  }
}
```