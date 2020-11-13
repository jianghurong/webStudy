<!--
 * @Author: Richard Chiang
 * @Date: 2020-11-13 16:04:15
 * @LastEditor: Richard Chiang
 * @LastEditTime: 2020-11-13 16:46:52
 * @Email: 19875991227@163.com
 * @Description: 
-->
1. 使用Flutter国内镜像
```bash
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```
tips: 此镜像为临时镜像，最新镜像地址-[Using Flutter in China](https://github.com/flutter/flutter/wiki)。  
2. 需要安装Git(如果已安装跳过)  
3. 获取FlutterSDK  
    [Flutter download](https://github.com/flutter/flutter/releases)
    将文件解压至非高权限文件夹
    用户变量中追加flutter\bin的全路径，然后以;为分隔符
    flutter文件夹中执行git init命令
    flutter doctor