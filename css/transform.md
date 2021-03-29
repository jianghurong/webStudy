<!--
 * @Author: Richard Chiang
 * @Date: 2021-03-29 09:22:22
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2021-03-29 10:51:36
 * @Email: 19875991227@163.com
 * @Description: css 变形
-->
## what's transform  
通过改变**坐标空间**，<code>css transform</code> **可以在不影响正常文档流的情况下改变作用内容的位置（不触发回流，只触发重绘）**。  
可以进行的操作包括：
* 旋转
* 倾斜
* 缩放
* 位移


## how to transform  
有两个主要属性用来被定义 <code>css transform</code>  
* <code>transform</code>  
指定作用在元素上的变形
* <code>transform-origin</code>  
指定原点的位置，**默认为元素中心**

## transform  
|值|描述|
|:---:|:---:|
|none|定义不进行转换|
|translate(x, y)|定义 2D 转换，x 代表横轴偏移，y 代表纵轴偏移（单位: px、rem、em）|
|translateX(x)|定义转换，只是用 x 轴的值|
|translateY(y)|定义转换，只是用 y 轴的值|
|translateZ(z)|定义 3D 转换，只是用 z 轴的值|
|scale(x,[y]?)|定义 2D 缩放转换|
|scale3d(x,y,z)|定义 3D 缩放转换|
|scaleX(x)|通过设置 x 轴的值来定义缩放转换|
|scaleY(y)|...|
|scaleZ(z)|...|
|rotate(angle)|定义 2D 旋转，在参数中规定角度|
|rotate3d(x, y, z, angle)|定义 3D 旋转|
|rotateX(angle)|...|
|rotateY(angle)|...|
|rotateZ(angle)|...|
|matrix(n,n,n,n,n,n)|定义 2D 转换，使用六个值的矩阵|
|matrix3d(n,...,n)|定义 3D 转换，使用16个值的4*4矩阵|
|skew(x-angle, y-angle)|定义沿着 X 和 Y 轴的 2D 倾斜转换|
|skewX(angle)|...|
|skewY(angle)|...|
|perspective(n)|...|为 3D 转换元素定义透视视图|
