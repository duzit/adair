const draggable = {
  inserted: (el) => {
    el.style.cursor = 'move';
    el.onmousedown = (e) => {
      const disx = e.pageX - el.offsetLeft;
      const disy = e.pageY - el.offsetTop;
      document.onmousemove = (e) => {
        let x = e.pageX - disx;
        let y = e.pageY - disy;

        const maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width);
        const maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height);
        // x = x < 0 ? 0 : maxX;
        // y = y < 0 ? 0 : maxY;

        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        el.style.left = `${x }px`;
        el.style.top = `${y }px`;
      };

      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null;
      };
    };
  },
};

export default draggable;
