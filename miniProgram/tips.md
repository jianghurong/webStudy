## 路由
界面跳转  
tabbar 界面跳转使用```wx.switchTab```。  
非tabbar界面使用```wx.navigateTo```或```wx.redirectTo```或```wx.reLaunch```跳转，```wx.navigateTo```保留当前界面，```wx.redirectTo```者关闭当前界面,```wx.reLaunch```关闭所有界面。

## 小程序跳转
```wx.navigateToMiniProgram```打开另一个小程序。(1.3.0开始支持)

## 独立分包
优点：从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内界面时，主包才会下载。  
开发者可以将部分对启动性能很高的界面放到独立分包中。
[独立分包](https://developers.weixin.qq.com/community/develop/doc/000e44abb2c7e89c2287f84b956c09)
[独立分包文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html)

## 分包预加载
优点：通过配置，由框架自动下载需要的分包
[分包预加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)

## 设置基础库(后台)

## 振动
wx.vibrateLong()  
根据场景使手机发生震动(400ms)

## app端能力
taro 基于 react-native
uni-app 基于 weex（已停止维护）