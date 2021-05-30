
function checkPermission(key) {
  const arr = [1, 2, 3, 4];
  return arr.includes(key);
}

// 判断元素是否有权限 有则显示 无则隐藏
const permission = {
  inserted: (el, { value }) => {
    if (!value) return;

    const hasPermission = checkPermission(value);
    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
};

export default permission;
