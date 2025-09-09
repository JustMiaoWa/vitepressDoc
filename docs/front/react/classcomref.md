# 类式组件Ref

在 React 类组件中，ref 用于访问由 React 管理的 DOM 元素。它有三种主要的创建方式：字符串方式、回调函数方式和 *createRef* 方式。

## **字符串方式**

这种方式较为简单，但官方不推荐使用，未来可能会被弃用。示例如下：

```jsx
import React,{Component} from 'react'


class App extends Component {
  componentDidMount = ()=> {
    this.refs.textInput.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref="textInput"></input>
      </div>
    )
  }
}

export default App;
```

## **回调函数方式**

这种方式推荐使用，但在组件重新渲染时，回调函数会被调用两次，第一次获取到的 DOM 元素为 *null*，第二次才是实际的 DOM 元素。示例如下：

```jsx
import React,{Component} from 'react'


class App extends Component {
  componentDidMount = ()=> {
    this.textInput.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref={el => this.textInput = el}></input>
      </div>
    )
  }
}

export default App;
```

## **createRef 方式**

这是最推荐的方式，使用 *React.createRef* 创建一个 ref 对象，并通过 *current* 属性访问 DOM 元素。示例如下：

```jsx
import React,{Component} from 'react'


class App extends Component {
  constructor(props){
    super(props)
    this.textInput = React.createRef()
  }
  componentDidMount = ()=> {
    this.textInput.current.focus();
  }
  render(){
    return (
      <div>
        <input type="text" ref={this.textInput}></input>
      </div>
    )
  }
}

export default App;
```

