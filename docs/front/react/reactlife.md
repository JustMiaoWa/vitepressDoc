# react生命周期

什么是react生命周期呢？当我们使用各种框架开发程序时，当这个框架启动、程序刚运行时、各个页面之间的交互、数据渲染到页面上面、程序运行结束，应当会有个闭环的操作，而在这个环的起点和终点之间的各个节点，框架给给定一些特定函数供我们自行调用，方便我们执行一些操作，这便是生命周期。react也是如此。

## 周期阶段

React 的生命周期是指组件从创建到销毁的整个过程，分为 **挂载阶段**、**更新阶段** 和 **卸载阶段**。在每个阶段，React 提供了特定的生命周期方法，允许开发者在适当的时机执行代码。

## ReactV17之前（旧）

![](http://docsimg.wazicode.top/reactlife1.png)

主要分为三个阶段 **初始化阶段**、**更新阶段**、**卸载组件**。

### 初始化阶段

- **初始化阶段:** 也称为组件挂载时的阶段，这个阶段会执行我们在**初次加载组件到组件第一次渲染在界面上面期间**的一系列钩子函数。

执行的流程为：**constructor->componentWillMount->render->componentDidMount**

```jsx
import React,{Component} from 'react'


class App extends Component {
  constructor(props){
    super(props)
    console.log("constructor")
  }
  componentWillMount = ()=> {
    console.log("componentWillMount")
  }
  componentDidMount = ()=> {
    console.log("componentDidMount")
  }
  render(){
    console.log("render")
    return (
      <div>
        <h2>HelloWorld</h2>
      </div>
    )
  }
}

export default App;
```

#### **创建阶段 constructor**

`constructor` 这是一个构造器，这里面可以接收一个父组件传来的props然后初始化state值。

一个类必须要有一个 constructor 方法，如果这个方法没有被显式定义，那么，一个默认的 constructor 函数会被添加。

　　一般，constructor 方法会返回一个实例对象，返回了实例对象之后我们可以在类函数中使用 this 关键字，在 constructor 中需要使用 super 方法调用基类的构造方法，也将父组件的 props 注入给子组件。

　　在 constructor 中可以做组件的初始化工作，比如说可以初始化 state，在 constructor 中可以直接修改 state，使用 this.state 进行赋值，不能使用 this.setState 方法。

#### **创建阶段 componentWillMount**

　　在组件挂载到 DOM 前（UI渲染完成前），componentWillMount 会被调用而且只会被调用一次。此时，如果使用 this.setState 是不会引起重新渲染的。

　　更多时候，会把组件元素里的内容提前到 constructor 中，所以在项目中很少使用到 componentWillMount 这个生命周期函数。

#### **创建阶段 render**

 　render 方法是一个类组件必须有的方法，render 方法会返回一个顶级的 react 元素。render 方法返回的并不是一个真正的 DOM 元素，它渲染的是 Dom Tree 的一个 React 对象，React 之所以效率高，是因为使用了虚拟的 Dom Tree。需要注意的是，不能在 render 方法里去执行 this.setState。

#### **创建阶段 componentDidMount**

　　在第一次渲染后调用，当 React 应用执行 componentDidMount 时就证明 UI 渲染完成了，这个生命周期函数只执行一次，它被调用时已经渲染出真实 DOM 了，这个生命周期函数比较适合使用的场景向服务端获取异步的数据，也就是获取一些外部数据资源。需要注意的是，当父组件执行 render 的时候，只有当所有的子组件都完成了创建，父组件才会完成渲染，然后执行 componentDidMount。

### **更新阶段**

- **更新阶段：** 什么时候会执行更新阶段这一系列的钩子函数呢，那自然是我们在更新了state值的时候或者是接收到父组件props值的时候，就是`this.setState({})`这个。 

1、这个阶段常规流程是：**componentWillReceiveProps->shouldComponentUpdate->componentWillUpdate->render->componentDidUpdate**

其实从图中能看出更新阶段一共有3段流程，

2、当setState时，流程：**setState->shouldComponentUpdate->componentWillUpdate->render->componentDidUpdate**

3、当forceUpdate时，流程：**forceUpdate->componentWillUpdate->render->componentDidUpdate**



#### **更新阶段 componentWillReceiveProps**

　　组件接收到**新 props** 的时候调用 componentWillReceiveProps，**注意是新props，当首次渲染props时，不会调用此方法。**可以在此对比新 props 和原来的 props，如果 props 发生变化，我们可以进行一些业务逻辑的操作。不过，现在不推荐使用这个方法了，因为有新的生命周期函数可以取代它。

```jsx
class Student extends Component{
  componentWillReceiveProps(nv){
    console.log(nv)
    console.log(this.props)
    if(nv !== this.props){
      console.log("props被改变了")
    }
    console.log("componentWillReceiveProps")
    // 控制台输出：
    // {name: 'waziiii', age: 18}
    // {name: 'wazi', age: 18}
    // props被改变了
    // componentWillReceiveProps
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.props.name}</h2>
        <h2>年龄:{this.props.age}</h2>
      </div>
    )
  }
}
```

#### **更新阶段 shouldComponentUpdate**

这个方法可以用于判断是否要继续执行 render 方法。它比较新传入的 nextProps 、 nextState 跟当前的 props、state ，如果返回 true，组件将继续执行更新，如果返回 false，会阻止组件更新，从而减少不必要的渲染，以达到性能优化的目的。

shouldComponentUpdate 同时接受 props 跟 state，componentWillReceiveProps 只接受 props。

*shouldComponentUpdate*接收两个参数：***nextProps*和*nextState***，分别代表**组件接收到的新的props和state**。通过比较这些值和当前的props和state，可以决定是否需要更新组件。如果返回*true*，则组件会继续渲染流程；如果返回*false*，则组件不会更新。

```jsx
class MyComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
    	// 比较props和state，决定是否需要更新
        return nextProps.someValue !== this.props.someValue ||
        nextState.someState !== this.state.someState;
    }
}
```

#### **更新阶段 render**

不用说了，跟初始化一样，会重新渲染dom

#### **更新阶段 componentDidUpdate**

componentDidUpdate 在每次 UI 更新时调用。这个方法接收 2 个参数：*prevProps*、*prevState*，分别表示组件更新前的属性、状态

### **卸载阶段**

**卸载阶段 componentWillUnmount**

　　组件从 DOM 中移除之前立刻被调用 (比如说删除购物车中的某个商品时) componentWillUnmount，这个生命周期函数可以用来做资源的释放，比如说可以清理绑定的 timer。

## ReactV17之后（新）

![](http://docsimg.wazicode.top/reactlife2.png)

### 初始化阶段

执行的流程为：**constructor->getDerivedStateFromProps->render->componentDidMount**

### 创建阶段getDerivedStateFromProps

**getDerivedStateFromProps** 是 React 组件生命周期中的一个静态方法，用于在组件接收到新的 props 时更新其内部的 state。它在组件的挂载和更新阶段都会被调用，且在调用 *render* 方法之前执行。该方法接收两个参数：***nextProps* 和 *prevState***，分别表示更新后的 props 和当前的 state。

以下是一个简单的示例：

```jsx
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
            	<Child name="sachin" />
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	name: "kapil"
        };
    }

	static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.name !== prevState.name) {
                return {
                    name: nextProps.name
                };
        }
        	return null;
    }

    render() {
        return (
        	<div>My name is {this.state.name}</div>
        );
   }
}

export default App;
```

在上述示例中，*Child* 组件的 *getDerivedStateFromProps* 方法会在 *props* 发生变化时更新 *state*。如果 *props* 中的 *name* 属性与 *state* 中的 *name* 属性不同，则更新 *state*，否则返回 *null* 表示 *state* 不变。

注意事项



1. **返回值**：*getDerivedStateFromProps* 方法必须返回一个对象来更新 *state*，或者返回 *null* 表示不更新 *state*。返回 *undefined* 会导致控制台警告[3](https://juejin.cn/post/7221154297706594365)。
2. **静态方法**：由于 *getDerivedStateFromProps* 是静态方法，不能直接访问 *this*。如果需要访问实例方法或属性，可以通过实例化类来实现[3](https://juejin.cn/post/7221154297706594365)。
3. **性能**：频繁使用 *getDerivedStateFromProps* 可能会导致性能问题，因为它在每次渲染前都会被调用。建议仅在必要时使用，并考虑其他替代方案，如 *componentDidUpdate*[2](https://legacy.reactjs.org/docs/react-component.html)。

### 更新阶段

这个阶段常规流程是：**getDerivedStateFromProps->shouldComponentUpdate->render->getSnapshotBeforeUpdate->componentDidUpdate**

### 更新阶段getSnapshotBeforeUpdate

**getSnapshotBeforeUpdate**是React生命周期方法之一，它在组件更新过程中的“渲染”阶段和“提交”阶段之间被调用。这个方法允许你在DOM更新之前捕获一些信息（例如滚动位置），然后你可以在**componentDidUpdate**中利用这些信息来执行一些额外的操作。

**使用场景和代码示例**

一个常见的使用场景是处理列表的滚动位置。当列表更新时，你可能希望用户看到的滚动位置保持不变，即使列表的内容已经改变。以下是一个示例代码，展示了如何在列表添加新项时使用**getSnapshotBeforeUpdate**来捕获滚动位置，并在**componentDidUpdate**中使用这个值来调整滚动位置，以防新项将旧项推出视图。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 我们是否正在向列表中添加新项？
    // 捕获滚动位置，以便稍后调整滚动。
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们有snapshot值，我们刚刚添加了新项。
    // 调整滚动，以便这些新项不会将旧项推出视图。
    // （snapshot在这里是从getSnapshotBeforeUpdate返回的值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>
        {/* 列表内容 */}
      </div>
    );
  }
}
```

**getSnapshotBeforeUpdate**方法应该与**componentDidUpdate**一起使用，否则会出现错误。这是因为**getSnapshotBeforeUpdate**返回的任何值都将作为第三个参数传递给**componentDidUpdate**。如果你不需要从**getSnapshotBeforeUpdate**传递任何值到**componentDidUpdate**，那么应该返回null。

此外，**getSnapshotBeforeUpdate**不应该用于触发更新，这可能会导致循环调用和潜在的性能问题。它仅用于捕获更新前的信息，如滚动位置、光标位置等，这些信息可能会因为DOM的变化而丢失。