# 类式组件State

通过前面文章，我们已经可以写出一个最简单的类式组件，接下来我们了解State。

## State概念

State属性用于维护组件的内部状态。可以理解为state为组件中定义的响应式数据，就像vue中的data。

## 在构造函数中初始化State

初始化state，就是在组件内部声明一个state变量，注意：**state变量必须是一个对象**。通过在`constructor`方法中定义`this.state`，可以初始化组件的State。在类组件中，可以通过`this.state`访问State属性。

```jsx
import React,{Component} from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '哇子',
      age: 18
    }
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.state.name}</h2>
        <h2>年龄:{this.state.age}</h2>
      </div>
    )
  }
}

export default App;
```

## 在构造函数外部定义State

```jsx
import React,{Component} from 'react'

class App extends Component {
  state = {
    name: '哇子',
    age: 18
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.state.name}</h2>
        <h2>年龄:{this.state.age}</h2>
      </div>
    )
  }
}

export default App;
```

## 事件处理与State更新

学会了定义State，接下来学习学习如何改变State。

必须使用**setState**方法更新state。在React中事件处理都在原生事件前加上on，比如onClick。因为this指向问题，**类式组件中的方法必须使用箭头函数**

### 1、传入一个对象

setState()方法传入一个对象，传入的是修改后的值

```jsx
import React,{Component} from 'react'

class App extends Component {
  state = {
    name: '哇子',
    age: 18
  }
  change = ()=> {
    this.setState({
      age: 26
    })
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.state.name}</h2>
        <h2>年龄:{this.state.age}</h2>
        <button onClick={this.change}>更新</button>
      </div>
    )
  }
}

export default App;
```

### 2、传入一个回调函数

1. 可以在回调函数中编写新的 `state` 的逻辑。
2. 当前的回调函数会将之前的 `state` 和 `props` 传递进来。

```jsx
import React,{Component} from 'react'

class App extends Component {
  state = {
    name: '哇子',
    age: 18
  }
  change = ()=> {
    this.setState((state,props)=> {
      console.log(state,props)
      return {
        age: state.age + 1
      }
    })
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.state.name}</h2>
        <h2>年龄:{this.state.age}</h2>
        <button onClick={this.change}>更新</button>
      </div>
    )
  }
}
```

### 3、传入两个参数

两个参数，**前面是更新的对象，后面是回调函数**，因为setState方法是异步的，我们往往不能立即拿到更新后的值，但传入两个参数，在第二个参数，也就是回调函数中，能拿到最新的值

```jsx
import React,{Component} from 'react'

class App extends Component {
  state = {
    name: '哇子',
    age: 18
  }
  change = ()=> {
    this.setState({age:26},()=> {
      console.log(this.state) // {name: '哇子', age: 26}
    })
    console.log(this.state) // {name: '哇子', age: 18}
  }
  render(){
    return (
      <div>
        <h2>姓名:{this.state.name}</h2>
        <h2>年龄:{this.state.age}</h2>
        <button onClick={this.change}>更新</button>
      </div>
    )
  }
}

export default App;
```

