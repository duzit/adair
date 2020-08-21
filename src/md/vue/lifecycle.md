## 生命周期

### beforeCreate()
* 不能获取DOM元素
* 未实例化，el 和 data 无法获取，为undefined

### created()
* 不能获取DOM元素
* 已经实例化，el 不可见， data methods 已经初始化
* 可以在此调用ajax请求，改变data数据

### beforeMount() 
* 不能获取真实的DOM元素，创建虚拟的DOM元素
* 编译模板 生成html 没有将html挂载到页面上

### mounted()
* 获取到真实的DOM元素
* html挂载到页面上
* 只执行一次

### beforeUpdate()
* 数据已更新，DOM未更新

### updated()
* 数据已更新，DOM已更新

### beforeDestroy()
* 在实例销毁之前调用，实例依然可用，可用this，methods
* 可做一些重置的工作，清除定时器等

### destroyed()
* 实例解绑，事件监听移除，可用this，methods
