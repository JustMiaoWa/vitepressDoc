# 函数式组件Props

使用 React 开发应用, 最常见的问题或者说大多数奇怪的代码都来自组件通信需求。

## 利用 Props 实现组件通信

```jsx
import React, { Component, useState } from 'react'

function Child(props){
  return (
    <div>
      父组件传递数据：{props.count} 
      <button onClick={()=>props.add(4)}>传递函数数据</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  function add(num) {
    if(typeof num==="number"){
      setCount(count + num)
    }else{
      setCount(count + 1)
    } 
  }
  return (
    <div>
      <h2>count：{count}</h2>
      <button onClick={add}>+1</button>
      <Child count={count} add={add}></Child>
    </div>
  )
}

export default App;
```

如果你的组件结构都是标准的父子结构, 即父组件包裹一层子组件, 那么 Props 是一个轻量的合适的解决方案，不仅适合父传子，子也可以传父。

## Context实现跨层组件通信

步骤：

- 利用React.createContext();创建context对象
- context组件包裹全部组件，利用Context.Provider提供数据
- 在消费组件中，使用useContext（context）获取数据

```jsx
const Context = React.createContext();
function Child(props) {
  const { state, setState } = useContext(Context);
  const onButtonClick = () => {
    setState("后代知道了");
  };
  return (
    <>
      <div>{state}</div>
      <button onClick={onButtonClick}>后代知道了</button>
    </>
  );
}
function Child1() {
  return (
    <div>
      <Child />
    </div>
  );
}
function Ancestor() {
  const [state, setState] = useState("state");
  return (
    <Context.Provider value={{ state, setState }}>
      <div>
        <Child1 />
      </div>
    </Context.Provider>
  );
}
```

