
const debounce = {
  inserted: function(el, { value, arg = 1000}) {
    let timer = null;

    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        value();
      }, arg)
    })
  },
  unbind: function(el) {
    el.removeEventListener('click');
  } 
}

export default debounce;