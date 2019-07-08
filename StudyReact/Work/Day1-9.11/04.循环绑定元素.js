//循环绑定元素

import React from "react"

import ReactDOM from "react-dom"


let arr=[{name:"张三",age:18},{name:"李四",age:25}];

// let div1=<div>
// 			<span>{arr[0].name}</span>
// 			<span>{arr[1].name}</span>

// 		</div>;


// 在 react中,如果需要循环绑定元素,需要用map方法,映射

// {} 大括号里面可以放js代码,也可以放表达式

let div1=<ul>
			{arr.map((item,index)=>{
				//循环需要对每个元素加上key属性
				// return <li key={index}> {item.name} </li>

				// 使用 解构赋值

				let {name,age}=item;

				return <li key={index}> {name} </li>
			})}
		  </ul>

ReactDOM.render(div1,window.root);