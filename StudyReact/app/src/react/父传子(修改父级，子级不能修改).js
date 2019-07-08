import React,{Component} from "react";
import ReactDOM from "react-dom";

class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:0
        }
    }
    //定义了一个改变数据的方法
    add = () => {
        let {num} = this.state;
        num++;
        this.setState({num});
    }
    render () {
        let {num} = this.state;
        return(<div>
            <div>父级：{num}</div>
            <br/>
            <Btn num={num} add={this.add}></Btn>
        </div>)
    }
}
class Btn extends Component{
    render(){
        let {num,add} = this.props;
        //接受父级传递的数据和方法
        return(<button 
                onClick={add()}
            >{num}</button>)
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));