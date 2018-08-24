---
腾讯云短信SDK教程  
[腾讯云短信 Node.js SDK](https://cloud.tencent.com/document/product/382/3772)  
[腾讯云短信 Github](https://github.com/qcloudsms/qcloudsms_js)  

---
开发准备：
- 申请SDK AppID 以及 App Key [腾讯云](https://console.cloud.tencent.com)  
1.登录腾讯云，有账号登录，无账号注册登录  
2.主页=>云产品=>移动与通信=>短信=>添加应用
- 申请签名
- 申请模板
- npm配置
install SDK
```shell
npm i qcloudsms_js --save-dev
```

---
Demo
```js
let QcloudSms = require("qcloudsms_js");
//短信SDK AppID
let appid = "*****";
//短信应用SDK Appkey
let appkey = ""*****";";
//需要发送短信的手机号码
let phoneNumbers = [""*****";"];
//短信模板ID
let templateId = *****;

//签名
let smsSign = "腾讯云";

//实例化QcloudSms
let qcloudsms = QcloudSms(appid, appkey);

//设置请求回调处理 
function callback(err, res, resData) {
    if (err) {
        console.log("err: ", err);
    }
    else {
        console.log("request data: ", res.req);
        console.log("response data: ", resData);
    }
}

//单发短信通知
var ssender = qcloudsms.SmsSingleSender();
var params = [];//数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:****对应一个变量，参数数组中元素个数也必须是一个
ssender.sendWithParam(86, phoneNumbers[0], templateId,
params, smsSign, "", "", callback);  // 签名参数未提供或者为空时，会使用默认签名发送短信
var beginTime = 1535119282;  // 开始时间(unix timestamp)
var endTime = 1535123422;    // 结束时间(unix timestamp)
var maxNum = 10;             // 单次拉取最大量
var mspuller = qcloudsms.SmsMobileStatusPuller();
// 拉取短信回执
// mspuller.pullCallback("86", phoneNumbers[0], beginTime, endTime, maxNum, callback);
// 拉取回复
mspuller.pullReply("86", phoneNumbers[0], beginTime, endTime, maxNum, callback);
```

---
notice：**个人不支持语音短信**，**默认不支持拉取短信回执及回复状态**（需寻客服助手开通：QQ:3012203387），要获取短信回执及回复状态需设置事件回调配置。
