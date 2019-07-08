import React from 'react'
import ReactDOM from 'react-dom'

let data={
	news:"新闻",
	min:"时间"
}

class Header extends React.Component{

	render(){
		return (<div>

					{this.props.min}
				</div>


			);
	}
}

// 把 数据设置到 子组件上
class Panel extends React.Component{

	render(){

		return (<div>

				{this.props.news}
				
				<Header {...this.props}></Header>
				</div>);
	}
}


ReactDOM.render(<Panel {...data}></Panel>,window.root);