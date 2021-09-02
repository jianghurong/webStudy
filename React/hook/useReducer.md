## 简介
useReducer 是 [useState](./useState.md) 的替代方案。
它接收一个形如 ```(state, action) => newState``` 的reducer(减速器?),并返回当前的 state 以及与其配套的 ```dispatch``` 方法。  
在某些场景下，useReducer 比 useState 更好用（例如 state 逻辑复杂并且包含多个子值，或者下一个 state 依赖于之前的 state 等。）

## 语法
```js
const [state, dispatch] = useReducer(reducer, initialArg, init)
```
reducer- 减速器
initialArg- 初始值
init- 对初始值进行初始化

```js
import React, { useReducer } from 'react'

function init(init) {
    return {
        name: 'name:' + init.name,
        lastName: 'lastName:' + init.lastName
    }
}

const userInfoReducer = (state, action) => {
    switch(action.type) {
        case 'setUserName':
            return {
                ...state,
                name: action.payload
            }
        case 'setLastUserName':
            return {
                ...state,
                lastName: action.payload
            }
        default:
            return state
    }
}

function Test() {

    const [ reducer, dispatch ] = useReducer(userInfoReducer, {
        name: 'John',
        lastName: 'James'
    }, init)

    function onNameChange(e) {
        dispatch({
            type: 'setUserName',
            payload: e.target.value
        })
    }

    function onLastNameChange(e) {
        dispatch({
            type: 'setLastUserName',
            payload: e.target.value
        })
    }

    return (
        <div>
            <h1>{reducer.name} {reducer.lastName}</h1>
            <div>
                <span>name: </span>
                <input type="text" value={reducer.name} onChange={onNameChange} />
            </div>
            <div>
                <span>lastName: </span>
                <input type="text" value={reducer.lastName} onChange={onLastNameChange} />
            </div>
        </div>
    )
}

export default Test
```