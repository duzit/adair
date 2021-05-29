## window

---

### URL, windowName, [windowFeatures])

* URL 新窗口url
* windowName 新窗口名称
* 新窗口拓展特性
* 调用window.open()方法后，远程URL不会被立即载入，过程是异步的。实际加载这个URL的时间推迟到当前脚本执行结束以后，
  窗口的创建和相关资源的加载时异步的。  如果已经存在以strWindowName命名的窗口，则不会再加载新窗口，
  而是将strUrl加载到这个窗口。如果要每次调用window.open()时都打开一个新窗口，则要把strWindowName设置为_blank。
