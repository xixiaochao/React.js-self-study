import React from 'react'
import ReactDOM from 'react-dom'


// react组件有两种定义方式

// react 元素 是 react组件 的最基本组成单位。

//1) react 元素

let ele=<h1></h1>;

let ele1=React.createElement("h1",null,"");


// 2) react组件

// 方式一： 函数定义组件

/*
	① 组件的名字首字母必须大写
	
	② 组件定义的时候，要return 一个顶级的 JSX元素，最多一个，没有rueturn null
 */

let data={name:"张三"}


 function Welcome(props){

 	return  <div>
 			<p>测试</p>
 			<p>{data.name}</p>
 			<p>{props.data1.age}</p> 
 			<p>{props.school}</p>
 			<p>{props.data1.time.toString()}</p>
 			</div>
}

/**
 *  render执行时，会判断第一个参数，如果是组件，则执行下面步骤
 *  首先会把第一个元素组件进行打包封装，把其封装一个对象，并且把这个对象传递给对象的函数
 *  这个组件对应的函数执行，函数会返一个虚拟的 react组件。
 *  render接收到 函数返回的 react组件，将虚拟react组件转为真实的 DOM 
 *  render把 react组件转的真实的DOM，插入到 window.root 中
 *
 *
 *  如果判断第一个参数不是组件，则直接转为 真实DOM，插入 window,root中
 */


 // setInterval( ReactDOM.render(<Welcome data1={{age:18,time:new Date()}}  school="北京第一幼稚园"></Welcome>,window.root),1000);


 // 方式二： class定义组件

 /*
   ①  类名要大写

   ②  必须继承 React.Component,构造函数一定要加 super()

   ③  必须定义 render方法，且 必须返回一个 顶级的 JSX 虚拟DOM


  */

  class Head extends React.Component{
    render(){
        return <div>
            {this.props.content}
        </div>
    }
}

  // class定义一个组件，具有 this  状态  生命周期
  // 通过 行间传递的 属性，和状态 改变，试图就会改变
  class Hello extends React.Component{

  		// 先执行 constructor 函数，再执行render函数


  		constructor(){
  			super();
  			// 构造器中的 this.props 为 undefined
  		}

  		// 这个 函数，是 创建虚拟dom 的函数，和 ReactDOM.render()不一样
  		render(){
  			
  			return <div>
  					<p>123</p>
  					<p>456</p>
  					  // this.props  拿到设置的行间属性
  					<p>{this.props.data.name}</p>
  					<p>{this.props.time.toString()}</p>
  					<Head content="content测试数据"></Head>
  					</div>

  		}
  }


  /**
   *  首先判断是组件
   *  找到对应的类，创建出虚拟组件DOM
   *  接收到类返回的 虚拟组件的实例，转为 真实DOM
   *  将 真实DOM 插入到 window.root
   */

  ReactDOM.render(<Hello data={{name:"张三"}} time={new Date()}></Hello>,window.root);