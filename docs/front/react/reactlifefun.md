# 函数式组件useEffect

在 React 中，useEffect 是一个非常重要的 Hook，用于在函数组件中处理副作用。它强大而灵活，是函数组件中替代类组件生命周期方法的核心工具。通过 useEffect，你可以轻松实现以下操作：

- 数据获取（例如调用 API）
- DOM 操作（如操作文档标题或动画效果）
- 事件监听（例如窗口大小调整）
- 清理任务（例如清理定时器或取消订阅）

## **什么是 useEffect？**

`useEffect` 是 React 提供的一个 Hook，用于处理函数组件中的**副作用**。副作用的概念简单来说就是那些与渲染无关的逻辑，比如访问浏览器 API、订阅数据流、定时器等。

```jsx
import React, { useState, useEffect } from 'react';
 
function Example() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log(`当前计数值: ${count}`);
  });
 
  return (
    <div>
      <p>计数值：{count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

**执行时机**：

- 每次组件渲染后（包括初次渲染和状态更新后）都会执行 `useEffect`。
- 类似于类组件中的 `componentDidMount` 和 `componentDidUpdate`。

## **如何控制 useEffect 的执行时机？**

`useEffect` 的第二个参数是一个**依赖数组**，用于控制它的执行时机。根据是否传递依赖数组以及传递哪些依赖，可以实现不同的行为。

#### **1. 不传依赖数组**

```jsx
useEffect(() => {
  console.log('每次组件渲染后都会执行');
});
```

- 组件每次渲染后（包括状态或属性变化时）都会执行该 `useEffect`。

#### **2. 传入空依赖数组**

```jsx
useEffect(() => {
  console.log('仅在组件挂载时执行一次');
}, []);
```

- 只在组件挂载和和卸载时执行一次，类似于类组件中的 `componentDidMount`。

#### **3. 传入特定依赖**

```jsx
useEffect(() => {
  console.log(`计数值更新为: ${count}`);
}, [count]);
```

- 只有当 `count` 的值发生变化时，`useEffect` 才会执行。

#### **如何清理副作用？**

当组件卸载时，或在依赖变化时，我们可能需要清理一些副作用（如事件监听、定时器等）。可以通过 `useEffect` 返回一个清理函数来完成。

#### **1. 清理事件监听**

```jsx

useEffect(() => {
  const handleResize = () => console.log('窗口大小变化');
  window.addEventListener('resize', handleResize);
 
  // 返回清理函数
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // 空数组表示只在挂载和卸载时运行
```

#### **2. 清理定时器**

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('计时器运行中');
  }, 1000);
 
  // 返回清理函数
  return () => {
    clearInterval(timer);
  };
}, []); // 确保在组件卸载时清理定时器
```

生命周期方法与 useEffect 的对照表
useEffect 能够模拟类组件中的生命周期方法，通过合理设计依赖数组可以实现对应的逻辑。

类组件生命周期	                             函数组件实现（useEffect）
componentDidMount	                 useEffect(() => { ... }, [])
componentDidUpdate	                useEffect(() => { ... }, [依赖])
componentWillUnmount	            useEffect(() => { return () => { ... }; }, [])

#### **高级用法**

#### **1. 依赖多个状态**

如果需要监听多个状态的变化，可以将它们都放入依赖数组：

```jsx
useEffect(() => {
  console.log(`count 或 otherState 发生了变化`);
}, [count, otherState]);
```

#### **2. 数据获取**

用 `useEffect` 实现组件挂载时的数据请求：

```jsx
useEffect(() => {
  async function fetchData() {
    const response = await fetch('<https://api.example.com/data>');
    const data = await response.json();
    console.log(data);
  }
  fetchData();
}, []); // 空数组表示仅在挂载时执行
```

#### **3. 动态依赖**

依赖数组可以动态变化，当依赖发生变化时会触发 `useEffect` 执行：

```jsx
useEffect(() => {
  console.log(`依赖 id 发生变化: ${id}`);
}, [id]); // id 变化时，重新执行
```

