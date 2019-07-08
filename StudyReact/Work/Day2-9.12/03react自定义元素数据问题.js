import React from 'react'
import ReactDOM from 'react-dom'

let ele;
function tick(){

	// Uncaught Error: Objects are not valid as a React child ，对象不能作为React的子元素
	// If you meant to render a collection of children, use an array instead. 如果想使用，请用数组代替
	
	// ele=<h1> {new Date()} </h1>

	ele=<h1>{ new Date().toString()}</h1>

	// react元素数据发生变化，不会自动触发 render
	ReactDOM.render(ele,window.root);
	
}
tick();
// setInterval(tick,1000);

