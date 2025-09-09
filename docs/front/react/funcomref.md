# 函数式组件Ref

在 React 程序中，我们经常需要在组件之间共享一些状态或引用。灵活使用 `useRef` 可以帮我们实现之一目的。通常来说，`useRef` 可用于在组件之间共享数据，还可以存储 DOM 节点的引用。

在 React 中，`useRef` 是一个非常强大且多功能的 Hook，它主要用于：

1. **保存可变值**：在组件生命周期内保持引用不变

2. **访问 DOM 元素**：替代传统的 `ref` 属性

3. **缓存复杂对象**：避免重复计算或渲染

## **访问 DOM 元素**

一个简单的示例：

```jsx
import { useRef } from 'react';

function Component() {
  // 创建一个 ref 对象
  const inputRef = useRef(null);

  // 当按钮被点击时，调用这个函数将 input 元素聚焦
  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* 将 inputRef 对象传递给 input 元素的 ref 属性 */}
      <input type="text" ref={inputRef} />
      {/* 当按钮被点击时调用 handleButtonClick 函数 */}
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

## **存储定时器或异步操作**

保存定时器 ID 或其他需要清理的资源，避免内存泄漏

**示例：使用 ref 保存定时器**

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current); // 安全清除定时器
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current); // 组件卸载时清理
  }, []);

  return (
    <div>
      <p>计数: {count}</p>
      <button onClick={startTimer}>开始</button>
      <button onClick={stopTimer}>停止</button>
    </div>
  );
}
```

## **缓存复杂对象**

避免在每次渲染时重新创建相同的对象，尤其是大型数据结构或函数。

**示例：缓存大型数组**

```jsx
function HeavyComponent() {
  const largeArrayRef = useRef(null);

  // 只在首次渲染时创建大型数组
  if (!largeArrayRef.current) {
    largeArrayRef.current = new Array(1000).fill(0).map((_, i) => i);
  }

  return (
    <div>
      {/* 使用 largeArrayRef.current */}
    </div>
  );
}
```

## **存储上一次的值**

在状态更新时保留之前的值，用于比较或计算差值。

**示例：比较当前值与上一次的值**

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // 保存当前值到 ref
  }, [count]);

  const prevCount = prevCountRef.current; // 获取上一次的值

  return (
    <div>
      <p>现在: {count}, 之前: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}
```

## **跨组件通信**

在某些场景下，可以通过父组件传递 ref 实现跨层级通信。

**示例：父组件调用子组件方法**

```jsx
// 子组件
function ChildComponent() {
  const doSomething = () => {
    console.log('子组件执行操作');
  };

  // 将方法挂载到 ref 上
  const ref = useRef({ doSomething });

  return <div ref={ref}>子组件</div>;
}

// 父组件
function ParentComponent() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current?.doSomething(); // 调用子组件方法
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>调用子组件方法</button>
    </div>
  );
}
```

## **与 forwardRef 结合使用**

*forwardRef* 是一个高阶函数，用于将父组件的 *ref* 转发到子组件的 DOM 元素或实例。这在需要跨组件访问 DOM 时非常有用。

```jsx
import React, { useRef, useEffect, forwardRef } from 'react';

const ChildInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function ParentComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // 聚焦子组件的输入框
  }, []);

  return <ChildInput ref={inputRef} />;
}

export default ParentComponent;
```

在这个例子中，*ChildInput* 使用 *forwardRef* 将 *ref* 转发到其内部的输入框。父组件通过 *inputRef* 可以直接操作子组件的 DOM 元素。
