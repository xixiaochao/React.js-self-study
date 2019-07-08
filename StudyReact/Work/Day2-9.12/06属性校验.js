import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ProTypes from 'prop-types'




class School extends Component{


	// 行间属性传递给 构造器第一个形参
	constructor(props){
		super();
		console.log(props);  //所有的行间属性

		// props.data={};  //不能改变整个空间地址

		props.data.name="李四";  //可以改变内容

		console.log(this.props); //this对象上的porps现在还是 undefined
	}

	render(){
		
		return (<div><p>{this.props.data.name}</p></div>)
	}
}


let obj={name:"张三",age:12}


ReactDOM.render(<School data={obj}/>,document.getElementById("root"));


// 属性校验

class Head extends Component{

	// defaultProps  在类上定义的默认属性，如果没有传行间属性，则线上默认的属性

	/*
	optionalArray: PropTypes.array,
  	optionalBool: PropTypes.bool,
  	optionalFunc: PropTypes.func,
  	optionalNumber: PropTypes.number,
  	optionalObject: PropTypes.object,
  	optionalString: PropTypes.string,
  	optionalSymbol: PropTypes.symbol,
  	*/
  	static propTypes={
  		// 属性校验
  		age:PropTypes.number.isRequired  //在行间必填此属性，并且是 number类型
  	}


	static defaultProps={
		name:"京东",
		age:16
	};

	render(){
		return (<div>
					<p>{this.props.name}</p>
				</div>
			);
	}
}


let person={name:"回龙观"}
ReactDOM.render(<Head />,document.getElementById("root"));