## Element
main.js
```js
// 全局引入
import element from 'element-ui';

Vue.use(element, { size: 'small' };

// 按需引入
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size：'small' };
Vue.use(Button);
```
