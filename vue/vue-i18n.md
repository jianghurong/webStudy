
### 语言国际化方案 vue-i18n

#### 安装
```shell
yarn add vue-i18n
```

### 使用
文件结构

```
src
├── i18n
│   └── index.js
│   └── language-zh.json
│   └── language-en.json
├── app.vue
├── main.js
```

index.js
```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 在页面中可通过this.$i18n.locale的值实现语言切换
  messages: {
    'zh': require('./language-zh.json'),
    'en': require('./language-en.json')
  }
})

export default i18n
```

language-zh.json
```json
{
  "home": {
    "hello": "欢迎! 我的朋友"
  }
}
```

language-en.json
```json
{
  "home": {
    "hello": "hello! my friend"
  }
}
```

main.js
```js
import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import i18n from '@/i18n'


Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
```

app.vue
```html
<h1>
  {{ $t('home.hello') }}
</h1>
```

更改locale
```js
const lang = 'zh'
this.$i18n.locale = lang
```