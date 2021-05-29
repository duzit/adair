<template>
  <div id="editor">
    <ckeditor
      ref="refCKEditor"
      v-model="editorData"
      :config="editorConfig"
      @namespaceloaded="onNamespaceLoaded" />
      <!-- editor-url="/node_modules/ckeditor4-vue/ckeditor.js" -->

    <div class="markdown-body">
      <VueMarkdown :source="mdData" v-highlight></VueMarkdown>
    </div>
  </div>
</template>

<script>
// import wordcount from '@/components/ckeditorPlugins/wordcount/plugin.js';
import VueMarkdown from 'vue-markdown';
import markdownData from '../../../md/vue/ckeditor4-vue.md';

export default {
  name: 'CKEditor',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      mdData: markdownData,
      editorData: '<h1><span style="color:#e74c3c">ckeditor</span></h1>',
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
            items: ['Source', 'Print'], // Source 源码输入
          },
          // 撤销 重新编辑
          {
            name: 'clipboard',
            items: ['Undo', 'Redo'],
          },
          {
            name: 'styles',
            items: ['Format', 'Font', 'FontSize'], // 格式 字体 大小
          },
          // 文本颜色 文本背景颜色
          {
            name: 'colors',
            items: ['TextColor', 'BGColor'],
          },
          // 对齐方式
          {
            name: 'align',
            items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
          },
          // 操作栏 是否换行
          // '/',
          // 文本样式操作 加粗等功能
          {
            name: 'basicstyles',
            items: ['Bold', 'Italic'],
            // items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting']
          },
          // 超链接
          {
            name: 'links',
            items: ['Link', 'Unlink'],
          },
          // 编号列表 项目列表等功能
          {
            name: 'paragraph',
            items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'],
          },
          // 插入 图片 表格
          {
            name: 'insert',
            // items: ['Table']
            items: ['Image', 'Table', 'Timestamp'],
          },
          // 工具 全屏等功能
          {
            name: 'tools',
            items: ['Maximize'],
          },
          // 即时拼写检查
          {
            name: 'editing',
            items: ['Scayt'],
          },
        ],
        // toolbar 中的一些配置功能 需要在这里添加一下才可以用 例如 print colorbutton
        extraPlugins: 'print,format,font,colorbutton,justify,uploadimage,wordcount,notification,timestamp',
        // plugins: 'wordcount',
        format_tags: 'p;h1;h2;h3;h4;h5;h6;pre;address;div', // 格式 标题1 2 3 4 段落等 自定义
        // colorButton_colors: 'CF5D4E,454545,FFF,DDD,CCEAEE,66AB16', // 自定义 文本 背景颜色列表
      },
    };
  },
  watch: {
    editorData(val) {
      console.log(val, 22);
    },
  },
  mounted() {
  },
  methods: {
    onNamespaceLoaded(CKEDITOR) {
      console.log(this.$refs.refCKEditor, 23);
      // 将插件放入 public 目录下 可行
      CKEDITOR.plugins.addExternal('wordcount', '/ckeditor/plugins/wordcount/', 'plugin.js');
      // 时间戳插件 测试
      // 使用相对路径 引入plugin 会报错 如下，
      // 原因是 editor-url 默认是 https://cdn.ckeditor.com/4.16.0/standard-all 并不是取相对路径下的资源
      // Uncaught Error: [CKEDITOR.resourceManager.load] Resource name "timestamp" was not found at "https://cdn.ckeditor.com/4.16.0/standard-all/./plugin.js?t=L0QD".
      // CKEDITOR.plugins.addExternal('timestamp', './plugin.js', '');
      CKEDITOR.plugins.addExternal(
        'timestamp',
        'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/plugins/timestamp/',
        'plugin.js',
      );

      // 插件不放 public 方法
      // https://ckeditor.com/cke4/addon/wordcount 下载 wordcount plugin
      // 初始化 需修改部分源码
      // wordcount.init();
      // CKEDITOR.plugins.setLang('wordcount', 'zh-cn', {
      //   WordCount: '词数:',
      //   WordCountRemaining: 'Words remaining',
      //   CharCount: '字符:',
      //   CharCountRemaining: '个剩余字符',
      //   CharCountWithHTML: '字符 (含HTML)',
      //   CharCountWithHTMLRemaining: 'Characters (with HTML) remaining',
      //   Paragraphs: '段落:',
      //   ParagraphsRemaining: 'Paragraphs remaining',
      //   pasteWarning: '由于上限允许,内容不能粘贴',
      //   Selected: '已选择: ',
      //   title: '统计'
      // });
    },
  },
};
</script>
