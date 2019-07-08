/*
  JSX: React JSX, 这是React独有的方法

  把JS和HTML融合在一起，还有数据，样式都放在这个组件下；最终webpack会把这类型语法编译JavaScript；就相当于可以在JS中写HTML

  在react，常常把HTML结果写在JSX中；就相当于之前在JS中拼接的字符串；

  在JSx下，像之前在HTML编辑HTML结构的元素就是react元素；是一个虚拟的DOM元素
*/

import React from "react";  //导入 react模块

import ReactDOM from "react-dom";  //导入 react-dom  模块

//1.  JSX元素放到 render中,根元素必须只能是一个

//2.  在行间需要写样式的话,需要 使用 style={{属性:"属性值"}} 或者把样式对象写在外面

let style1={color:"green"};

//3. 在 React中,可以通过 {对象.属性}  来取对象的值;  
// {}中如果存放了 null ,undefined,boolean中,react解析不出来 //{null} 解析不出来
// [] 默认以字符串形式展示
let data={name:"张三",age:18};


//4. 在 React 元素的行间中,class要写成 className;采用驼峰式的写法

//  label 标签中的 for 要写成 htmlFor
let h=<div>
		<h1 style={{color:"red"}}>{data.name}</h1>
		<h1 style={style1}>{data.age}</h1>
		<div>String类型和基本数据等类型可以直接写</div>
	    
		<div>{null}</div> 
		<div>[null,undefined,1,"ddjd"]</div>
	</div>;



	// 将虚拟的DOM,插入到真实的DOM元素,并且进行渲染
	// param1: 存放一个react元素

	// param2: 要插入的容器
 

ReactDOM.render(h,document.querySelector("#root"));