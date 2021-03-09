示例
```css
.box {
  width: 300px;
  height: 300px;
  background: lightblue;
  animation: ani 1s ease-in-out 1s none;
}
@keyframes ani {
  from {
    background: red;
    transform: translateX(0);
  }
  to {
    background: yellow;
    transform: translateX(300px);
  }
}
```
我们可以将 <code>animation</code> 中的 <code>none</code> 替换成 forwards / backwards / both  
1. none 不该变默认行为
2. forWards 当动画完成后，保持最后一个属性值。（保持最后一帧状态，不会消失）
3. backwards 在 animation-deplay 所指定的一段时间内，在动画显示之前，应用开始属性值（初始使用第一帧的状态，会消失）。
4. both 向前后向后填充模式都被应用。（初始使用第一帧的状态，不会消失）