import React from 'react'
import ReactDOM from 'react-dom'

// 属性影响视图  添加定时器，定时执行 render渲染


let school={
	name:"张三",
	age:9,
}

function Weklcom(props){

	return <div>
		<div>{props.time.toLocaleString()}</div>
		<div>{props.name}</div>
		</div>
}



setInterval(function(){
	ReactDOM.render(<Weklcom {...school}  time={new Date()}/>,window.root)
},1000);