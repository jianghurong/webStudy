
---
## chrome设置12px以下的字体时以12px显示
1.google27.0版本以下可以使用```-webkit-text-size-adjust: none```设置  
只对英文版本有效  
2.
```css
/*The container will also be smaller*/
transform: scale(0.5);
```

---
## 浏览器默认的margin和padding不同
```css
* {
    margin: 0;
    padding: 0;
}
```