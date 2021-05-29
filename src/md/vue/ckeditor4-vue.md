## CKEditor4-Vue 使用小结

### 安装 及 引用

[官网参考](https://ckeditor.com/docs/ckeditor4/latest/guide/dev_vue.html)

```js
// install
npm install ckeditor4-vue

// use  main.js
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';

Vue.use( CKEditor );

// editor.vue
<template>
  <div id="app">
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
          // The configuration of the editor.
        }
      };
    }
  }
</script>
```

### 配置

[官网参考](https://ckeditor.com/docs/ckeditor4/latest/features/index.html)

```js
editorConfig: {
  width: '50%', // 宽 支持百分比
  height: 300, // 高 支持 '25em'
  // uiColor: '#66AB16', // 编辑器 背景颜色
  // defaultLanguage: '', // 语言 
  editorplaceholder: 'hello', // 输入框提示
  resize_enabled: false, // 是否可伸缩 高度 或 config.removePlugins = 'resize';
  // wordCount: true,
  // 操作栏配置
  toolbar: [
    // 打印
    {
      name: 'document',
      items: ['Source', 'Print'] // Source 源码输入
    },
    // 撤销 重新编辑
    {
      name: 'clipboard',
      items: ['Undo', 'Redo']
    },
    {
      name: 'styles',
      items: ['Format', 'Font', 'FontSize'] // 格式 字体 大小
    },
    // 文本颜色 文本背景颜色
    {
      name: 'colors',
      items: ['TextColor', 'BGColor']
    },
    // 对齐方式
    {
      name: 'align',
      items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
    },
    // 操作栏 是否换行
    // '/', 
    // 文本样式操作 加粗等功能
    {
      name: 'basicstyles',
      items: ['Bold', 'Italic']
      // items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
    },
    // 超链接
    {
      name: 'links',
      items: ['Link', 'Unlink']
    },
    // 编号列表 项目列表等功能
    {
      name: 'paragraph',
      items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
    },
    // 插入 图片 表格
    {
      name: 'insert',
      // items: ['Table']
      items: ['Image', 'Table']
    },
    // 工具 全屏等功能
    {
      name: 'tools',
      items: ['Maximize']
    },
    // 即时拼写检查
    {
      name: 'editing',
      items: ['Scayt']
    }
  ],
  // toolbar 中的一些配置功能 需要在这里添加一下才可以用 例如 print colorbutton
  extraPlugins: 'print,format,font,colorbutton,justify,uploadimage,wordcount,notification',
  // plugins: 'wordcount',
  format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div', // 格式 标题1 2 3 4 段落等 自定义
  // colorButton_colors: 'CF5D4E,454545,FFF,DDD,CCEAEE,66AB16', // 自定义 文本 背景颜色列表
}
```

### 添加插件

#### 注入插件时机

* onNamespaceLoaded 中注入
[参考](https://ckeditor.com/docs/ckeditor4/latest/guide/dev_vue.html#namespaceloaded)

```js
<ckeditor
  ref="refCKEditor"
  v-model="editorData"
  :config="editorConfig"
  @namespaceloaded="onNamespaceLoaded" />

// 事件 onNamespaceLoaded
onNamespaceLoaded(CKEDITOR) {
  CKEDITOR.plugins.addExternal(
    'timestamp', 
    'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/plugins/timestamp/', 
    'plugin.js'
  );
}
```

#### 添加 wordcount 插件遇到的问题

* 下载 [wordcount](https://ckeditor.com/cke4/addon/wordcount) 插件

1. 将插件放到 src 下某一目录 比如 /src/assets/ckeditor/wordcount
  使用 [CKEDITOR.plugins.addExternal](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_plugins.html#method-addExternal) 注入 如下
  但是这种注入是无效的，有报错，使用相对路径也不行
  路径如果使用cdn ，例如 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/plugins/timestamp/' 是可行的

```js
CKEDITOR.plugins.addExternal(
  'wordcount', 
  '/src/assets/ckeditor/wordcount/', // 或者相对路径 ../../...
  'plugin.js'
);
```

2. 将插件放到 public 路径下 /public/ckeditor/plugins/wordcount/plugin.js 可行
  引用时使用 /ckeditor/plugins/wordcount/plugin.js

```js
CKEDITOR.plugins.addExternal('wordcount', '/ckeditor/plugins/wordcount/', 'plugin.js');
```

3. 插件不放 public 方法
  下载的插件放到 @/components/ckeditorPlugins/wordcount/plugin.js
  需修改部分源码 [参考](https://github.com/duzit/adair/blob/main/src/components/ckeditorPlugins/wordcount/plugin.js)

```js
// 引入
import wordcount from '@/components/ckeditorPlugins/wordcount/plugin.js';

// 初始化
onNamespaceLoaded(CKEDITOR) {
  wordcount.init();
}
```

### 参考

* [GitHub](https://github.com/duzit/adair/blob/main/src/views/modules/js/ckeditor.vue)
* [csdn](https://blog.csdn.net/gao_grace/article/details/113739734)
