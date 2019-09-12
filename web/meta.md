<!--
 * @Author: Richard Chiang
 * @Date: 2019-09-12 14:27:51
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-09-12 15:44:05
 * @Description:  
 * @Email: 19875991227@163.com
 -->
## meta
meta用来表示元数据信息。

### charset
声明当前文档所使用的的**编码格式**，该声明可以被任意一个元素的**lang**特性覆盖
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>charset</title>
  </head>
  <body>
  
    <!-- Chinese -->
    <p lang="zh">paragraphe 中文</p>

    <!-- Japanese -->
    <p lang="ja">paragraphe Japanese</p>
  </body>
</html>
```

## name
该属性定义文档元数据的名称，此元数据名称与content属性包含的值相关联。  
|name|content|
|:---:|:---:|
|application-name|定义正在网页上的网络应用名称 (x)|
|author|作者名称|
|keywords|与页面内容相关的单词，搜索引擎可搜索，多个关键词用 , 分隔|
|description|页面内容的简短、精确描述(一些浏览器，如Firefox和Opera，将其用作书签页面的默认描述),搜索引擎可搜索|
|generator|包含生成页面的软件的标识符|
|referrer|控制所有从该文档发出的http请求中http**Referer**首部的内容<br />可能的值<br />no-referrer---不发送HTTP**Referer**首部<br />origin---发送当前文档的origin<br />no-referrer-when-downgrade---当目的地是安全的(https)，则发送referrer，不安全的(http)则不发送referrer<br />origin-when-crossorigin---在同源请求下，发送完整的URL，其它情况下则仅发送当前文档的origin<br />unsafe-URL---在同源请求下，发送完整的URL<br />tips:动态的插入如**document.write()、appendChild()**是不起作用的，如果有多个彼此冲突的策略，则no-referrer策略会被激活|
|creator|创建者|
|googlebot|仅适用于google的robots|
|publisher|发布者|
|robots|可选值：all`|`none`|`index`|`noindex`|`follow`|`nofollow，默认值是all|
|slurp|作用于robots类似|
|viewport|它提供有关视口初始大小的提示，**仅供移动设备使用**|
|copyright|版权所有|

### viewport 视口/窗
|name|value|description|
|:---:|:---:|:---:|
|width|一个正整数或**device-width**|以pixels为单位，定义viewport的宽度|
|height|一个正整数或**device-height**|以pixels为单位，定义viewport的高度|
|initial-scale|一个0.0到10.0的整数|定义设备宽度与视口大小之间的缩放比率|
|maximum-scale|一个0.0到10.0的整数|定义缩放的最大值|
|minimum-scale|一个0.0到10.0的整数|定义缩放的最小值|
|user-scalable|yes or no|用户是否能放大或缩放网页|

## content
***
## http-equiv
***
