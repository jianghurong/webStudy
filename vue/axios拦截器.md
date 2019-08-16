## axios拦截器

添加全局加载与错误处理

code:
```ts
/*
 * @Author: Richard Chiang
 * @Date: 2019-08-16 10:26:33
 * @LastEditrors: Richard Chiang
 * @LastEditTime: 2019-08-16 10:53:20
 * @Description: file content
 */
"use strict";

import Vue from 'vue';
import axios from "axios";

import { Message } from 'element-ui';
import { Loading } from 'element-ui';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// start loading
const loading = Loading.service();

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    
    // Do something with response data
    // stop loading
    loading.close();
    return response;
  },
  function(error) {

    // Do something with response error
    Message({
        showClose: 'true',
        type: 'error',
        message: `Response ${error}`,
        duration: 3000
    })

    // stop loading
    loading.close();
    return Promise.reject(error);
  }
);

// defalut timeout
axios.defaults.timeout = 30000; // 设置请求响应时间30s

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

```