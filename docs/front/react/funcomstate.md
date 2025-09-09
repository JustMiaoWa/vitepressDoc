# 函数式组件State

`useState`是 React提供的核心 Hook之一，专门为函数组件注入状态管理能力。它就像一把 “状态钥匙”，让函数组件摆脱了类组件this.state`的繁琐，用更简洁的方式实现数据驱动视图。

用法非常直观：接收一个初始值，返回一个包含两个元素的数组。第一个元素是当前状态值，第二个是用于更新状态的函数。比如：

```text
 const [count, setCount] = useState(0); // 初始化计数器状态为0
```

一个示例：

```jsx
import React, { Component, useState } from 'react'

function App() {
  const [count,setCount] = useState(0)
  function add(){
    setCount(count+1)
  }
  return (
    <div>
      <h2>count：{count}</h2>
      <button onClick={add}>+1</button>
    </div>
  )
}

export default App;
```

## 更新状态

### 直接更新

**直接更新值**：将状态直接更新为新的值。

```jsx
const [count, setCount] = useState(0);
 
setCount(count + 1); // 基于当前状态更新
```

### 函数式更新

当新状态依赖于旧状态时（比如连续递增），直接使用旧状态可能会因为异步更新导致闭包陷阱。这时需要用函数式更新：

```jsx
setCount(pre => pre + 1); // pre是最新的状态值
```

**setState 是同步还是异步？**


这是一个经典问题，答案取决于调用场景：

- **合成事件（如 onClick）和生命周期中**：`setState`是异步的。React 为了性能优化，会将多次更新合并成一次处理，减少浏览器重绘重排（就像攒够一堆快递再统一签收～）。
- **原生事件（如 addEventListener）、定时器、Promise 中**：`setState`是同步的，会立即触发更新。

如果要保证**state数据立即更新**，我们推荐使用**函数式更新**

## 更新数组或对象

在更新对象或数组时，React 要求创建新的引用，而不是直接修改原状态。

```jsx
setForm({
    ...form,
    name: 'New Name'
});

setTodos([
    ...todos,
    { id: nextId++, title: 'New Todo', done: false }
]);
```

