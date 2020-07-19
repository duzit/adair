## transform(origin)
---
### 属性值
* translate(x, y) 单位不是角度，而是像素类似的值，如px。2D转换
* translate(x, y, z) 3D
* translatX() translateY() translateZ()
* scale(x,[y]?) 缩放 x y轴 单位是倍数 scaleX() scaleY() scaleZ()
* rotate(angle) 单位是角度 例如45deg 2D旋转 rotateX() rotateY()
* rotate3d(x, y, z, angle) 3D，rotateZ()
* skew(x-angle, y-angle) 倾斜 单位角度 例如skew(45deg, 45deg) skewX(angle) skew(angle)
* perspective(n) 为3D转换元素定义透视视图

### 实例
* [参考](https://github.com/duzit/du-css/blob/master/src/transform-2.html)