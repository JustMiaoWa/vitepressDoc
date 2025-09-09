# JSX语法

## 示范

```jsx
// App.js文件
import React,{Component} from 'react'

class App extends Component {
  render(){
    return (
      <div>HelloWorld</div>
    )
  }
}

export default App;
```

像上篇文章中，在js中写html的语法就叫jsx。语法比较简单，掌握以下规则就可以了。

## 语法

jsx语法需要遵循一定的规则。

> 1.定义虚拟DOM，不能使用“”
> 2.标签中混入JS表达式的时候使用{}，并且只能使用js表达式
> 3.样式的类名指定不要使用class，使用className
> 4.内敛样式要使用style={{样式:"值"}}
> 5.不能有多个根标签，只能有一个跟标签
> 6.标签必须闭合
> 7.如果小写字母开头，就将标签转化为html同名元素，如果html中无该标签对应的元素，就报错
>     如果是大写字母开头，react就去渲染对应的组件，如果没有就报错

就像下面这样，暂时不需要看懂，只要理解语法规则就可以了。

```jsx
// App.js文件
import React,{Component} from 'react'
import './App.css'

class App extends Component {
  state = {name:'哇子',age:18}
  render(){
    return (
      <div style={{backgroundColor: '#080979'}}>
        <h2 >姓名:{this.state.name}</h2>
        <h2 className='color-white'>年龄:{this.state.age}</h2>
      </div>
    )
  }
}

export default App;
```

