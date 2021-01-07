# LOCATION对象

测试URL  
https://devuc.lconrise.cn/web-uclass/index.html#/personal/center?userId=2167330&role=teacher

所有属性  

|属性名|例子|说明|
|:---:|:---:|:---:|
|hash|#/personal/center?userId=2167330&role=teacher|返回URL中的hash(#号后跟零或多个字符)，如果URL中不包含散列，则返回空字符串
|host|devuc.lconrise.cn|服务器名称和端口号
|protocol|https|协议
|hostname|devuc.lconrise.cn|服务器名称
|href|https://devuc.lconrise.cn/web-uclass/index.html#/personal/center?userId=2167330&role=teacher|当前页面完整URL
|port|''|端口号|
|search|''|返回URL的查询字符串，这个字符串以问号开头，如果URL存在'#'，则截取'#'之前的字符
|pathname|web-uclass/index.html|服务器路径和文件名

获取浏览器查询参数函数
```js
// 例 :https://www.baidu.com/?userId=2167547&role=teacher
function getQueryStringArgs(search) {
    let qs = search.length ? search.substring(1) : '';
    let queryString = {}
    let args = qs.length ? qs.split('&') : []
    for(let i = 0; i < args.length; i++) {
        let arg = args[i].split('=')
        let name = arg[0]
        let value = arg[1]
        queryString[name] = value
    }
    return queryString
}
getQueryStringArgs(location.search)
```
