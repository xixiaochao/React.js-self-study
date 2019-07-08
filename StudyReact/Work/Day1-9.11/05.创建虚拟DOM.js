// React.createEleemnt 创建一个虚拟的DOM

import React from "react";

import ReactDOM from "react-dom";

/**
 *  第一个参数 ,标签类型
 *  第二个参数, 行间属性,对象类型
 *  第三个参数开始,内容区
 */
let h=<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>  

let y=React.createElement("h1",{name:"123"},"hello");

/**
 * 带子孙元素
 */

 let yy=React.createElement(
 	"div",
 	null,
 	React.createElement("li",null,"1"),
 	React.createElement("li",null,"2"),
 	React.createElement("li",null,"3")
 	
 	);

ReactDOM.render(yy,document.getElementById("root"));