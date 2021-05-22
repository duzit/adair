<template>
  <textarea :id="id" />
</template>

<script>
// CKEDITOR 在 index.html 引入
export default {
  name: 'CKEditor',
  props: {
    value: String,
    data: String,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: `CKEditor${Math.floor(Math.random() * 10000000000)}`,
      ckInstance: null,
      ckInput: ''
    }
  },
  mounted() {
    this.ckInstance = window.CKEDITOR.replace(this.id, {
      width: '50%', // 宽 支持百分比
      height: 300, // 高 支持 '25em'
      // uiColor: '#66AB16', // 编辑器 背景颜色
      // defaultLanguage: '', // 语言 
      editorplaceholder: 'hello', // 输入框提示
      // resize_enabled: false, // 是否可伸缩 高度 或 config.removePlugins = 'resize';
      // wordCount: true,
      readOnly: this.readonly,
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
          items: ['Image', 'Table', 'Timestamp']
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
      // extraPlugins: 'print,format,font,colorbutton,justify,uploadimage',
    });

    this.ckInstance && this.ckInstance.setData(this.value);
    this.ckInstance.on('change', (evt) => {
      console.log(evt, 22);
      console.log( this.ckInstance.getData(), 33);
      this.ckInput = this.ckInstance.getData();
      this.$emit('update:data', this.ckInput);
    })
  },
}
</script>