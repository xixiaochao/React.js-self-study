import React from 'react'
import ReactDOM from 'react-dom'

//  属性和状态state

//  属性是父组件传过来的值

//  state 是自控制的状态，这个state可以自己进行修改
class Count extends React.Component{

	constructor(){
		super();
		//实例上有个state属性，我们可以修改state的值，会实时渲染
		this.state={num:1}
	}

	// 使用箭头函数确保回调函数执行的时候，不会丢失this
	add=()=>{

		/*
		   setState方法执行时，
		   首先改变了state的值，
		   其次改变了第二个参数回调函数的this，
		   使this指向当前实例
		   最后调用了render方法，渲染

		   浏览器会根据 DOM-diff  算法，进行计算，把修改的那部分重新渲染

		*/


		// 直接多次改变值，只以最后为准
		this.setState({num:this.state.num+1});
		this.setState({num:this.state.num+1});

		// 在回调函数里 可以执行两次，这里也会覆盖上面那两个，导致上边那两个不执行
		this.setState({num:this.state.num+1},function(){
			// 这个回调方法，默认使用call改变了this为当前实例对象
			this.setState({num:this.state.num+1});
		});


		// 接收一个函数，函数的第一个参数，接收了 state的值，然后一个新的 state对象
		//方法可以执行多次，共加 3
		this.setState((prevState)=>{ return {num:prevState.num+1}});
		this.setState((prevState)=>{ return {num:prevState.num+2}});
		console.log("添加");
	}


	// 在 react中，给元素绑定一个事件行为，那么这个行为遵循驼峰命名

	// 事件行为的回调函数，一般都在原型上，通过this，找到这个函数
	render(){
		return (<div>{this.state.num}
					<button onClick={this.add}>+</button>

				</div>);
	}
}

ReactDOM.render(<Count />,window.root);