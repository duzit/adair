import {
  Message,
} from 'element-ui';

export default {
  bind(el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) return;

      const textarea = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      // 赋值
      textarea.value = el.$value;

      document.body.appendChild(textarea);

      textarea.select();
      const result = document.execCommand('Copy');
      if (result) {
        Message.success('复制成功');
      }

      document.body.removeChild(textarea);
    };

    el.addEventListener('click', el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  unbind(el) {
    el.removeEventListener('click');
  },
};
