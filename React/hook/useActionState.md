## 简介
``useActionState``是一个可以根据某个表单动作的结果更新``state``的``Hook``

```js
const [ state, formAction, isPending ] = useActionState(fn, initalState, permalink?)
```

示例:
```js
import { useActionState } from 'react';

function App() {
  const [state, formAction] = useActionState(increment, 0);

  async function increment(previousState, formData) {
    return previousState + 1;
  }
  

  return (
    <div className="App">
      <form>
        {state}
        <button formAction={formAction}>+1</button>
      </form>
    </div>
  );
}

export default App
```