# 创建第一个React项目

## React项目

创建React项目的方式多种多样，大致分为3种。

- ### **Script标签引入**

在 HTML 页面中，将以下三个文件通过 `<script>` 标签添加到 `</body>` 标签前：

[**react.development.js**](https://unpkg.com/react@17/umd/react.development.js) 和 [**react-dom.development.js**](https://unpkg.com/react-dom@17/umd/react-dom.development.js)和[**babel.min.js**](https://unpkg.com/babel-standalone@6/babel.min.js)

```html
<!-- end of the page -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```


- ### **React工具链**

如果你是刚刚开始接触 React，我们建议你使用 [Create React App](https://create-react-app.dev/)，这是尝试 React 功能的最流行的方式，也是构建新的单页客户端应用的最好方法。Create React App 是一个专为 React 配置的功能齐备的工具链。工具链有助于：

- 创建大量的文件和组件
- 使用来自 npm 的第三方工具库
- 及早检测到常见错误
- 开发时能实时编辑 CSS 和 JS
- 针对生产环境优化输出的文件

你仅需一条命令就可以在终端（命令行）中利用 Create React App 创建一个新项目！（**前提是确保安装了 [Node.js](https://nodejs.org/)！**）

```shell
npx create-react-app my-app
```

现在就可以通过以下命令运行你的应用程序了：

```shell
cd my-app
npm start
```

- ### 同时使用 React 和框架

如果你希望创建一个更大的、可用于生产环境的项目的话，[Next.js](https://nextjs.org/) 是一个非常好的起点。Next.js 是一个流行的、基于 React 构建的轻量级框架，用于构建静态和服务器端渲染的应用程序。该框架自带了路由（routing）、样式表（ styling）和服务器端渲染（server-side rendering）等功能，可以让你的项目快速开始并运行起来。

## 开始

我们这里使用Create React App方式创建项目，虽然说这种方式已被弃用，但这并不影响我们继续使用 React 进行开发，而且这是学习react最好的方式。

```html
npx create-react-app my-app
```

npx create-react-app 为固定的，my-app为项目名称，可以随意更改。

运行项目：

```shell
cd my-app
npm start
```

浏览器打开，输入http://localhost:3000，不出意外的话，能看到以下页面

<img src="https://docsimg.wazicode.top/react1.png" style="zoom:25%;" />

## 项目文件分析

打开项目，总共两个文件夹public和src，public为静态资源文件夹，src为源码文件夹

> public------静态资源文件夹
>
> ​		favicon.icon------网站页签图标
>
> ​		**index.html------主页面**
>
> ​		logo192.png------logo图
>
> ​		logo512.png------logo图
>
> ​		mainfest.json------应用加壳配置文件
>
> ​		robots.txt------爬虫协议文件
>
> src------源码文件夹
>
> ​		App.css------App组件样式
>
> ​		**App.js------App组件**
>
> ​		App.test.js------用于App组件测试
>
> ​		index.css------样式
>
> ​		**index.js------入口文件**
>
> ​		logo.svg------logo图
>
> ​		reportWebVitals.js------页面性能分析文件（需要web-vitals库支持）
>
> ​		setupTests.js------组件单元测试文件（需要jest-dom库支持）

其中标黑标重文件最为重要

## HelloWorld

将以上标黑标重文件保留，其余文件全部删除，并修改相应文件，写出HelloWorld

```js
// index.js文件
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

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

重新启动项目，网页显示HelloWorld，成功

