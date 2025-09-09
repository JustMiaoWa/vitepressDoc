# 类式组件Props

## props概念

在 React 中，**props** 是用于在组件之间传递数据的机制。父组件可以通过 props 向子组件传递信息，从而实现组件之间的通信。Props 可以是任何 JavaScript 值，包括对象、数组和函数。

```jsx
import React,{Component} from 'react'

class Student extends Component {
  render(){
    return (
      <div>
        <h2>姓名:{this.props.name}</h2>
        <h2>年龄:{this.props.age}</h2>
        <button onClick={e => this.props.change(6)}>更新</button>
      </div>
    )
  }
}


class App extends Component {
  state = {
    name: 'wazi',
    age: 18,
    change: (data)=> {
      this.setState({
        age: this.state.age + data //age:24
      })
    }
  }
  render(){
    return (
      <div>
        <Student {...this.state}></Student>
        {/* // 下面方式等同于上面方式 */}
        <Student name={this.state.name} age={this.state.age}></Student>
      </div>
    )
  }
}

export default App;
```

在上述案例中，实现**props传递对象**，从而实现父组件向子组件传递数据，**props传递函数**，也能实现子组件向父组件传递数据。

## 限制props类型和默认值

需要先引入prop-types检查库，在组件中声明`static propTypes`和`static defaultProps`即可实现限制props类型和默认值，注意要引入相对应的库`prop-types`

```jsx
static propTypes = {
    name:  PropTypes.string.isRequired,
    age: PropTypes.string,
    change: PropTypes.func
}
static defaultProps = {
    name:'waziiii'
}
```

```jsx
import React,{Component} from 'react'
import PropTypes from 'prop-types';

class Student extends Component {
  static propTypes = {
    name:  PropTypes.string.isRequired,
    age: PropTypes.string,
    change: PropTypes.func
  }
  static defaultProps = {
    name:'waziiii'
  } 
  render(){
    return (
      <div>
        <h2>姓名:{this.props.name}</h2>
        <h2>年龄:{this.props.age}</h2>
        <button onClick={e => this.props.change(6)}>更新</button>
      </div>
    )
  }
}


class App extends Component {
  state = {
    name: 'wazi',
    age: 18,
    change: (data)=> {
      this.setState({
        age: this.state.age + data //age:24
      })
    }
  }
  render(){
    return (
      <div>
        <Student {...this.state}></Student>
        {/* // 下面方式等同于上面方式 */}
        <Student  age={this.state.age}></Student>
      </div>
    )
  }
}

export default App;
```

