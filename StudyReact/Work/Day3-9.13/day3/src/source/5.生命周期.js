/**
 * Created by Administrator on 2018/9/13.
 */
//组件

//生命周期：对应的钩子函数：
import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
    //constructor render 都是react生命周期中的钩子函数
    constructor() {
        super();
        this.state = {num: 0};
        console.log("1.constructor");
    }
    componentWillMount() {
        //组件第一次初始化，将要挂载；执行一次
        console.log("2.componentWillMount");
    }
    componentDidMount(){
        //debugger;
        //当组件真正挂载到DOm上，执行一次
        console.log("4.componentDidMount");
    }
    shouldComponentUpdate(nextProps,nextState){
        //当初始化组件时，不会习性，只有当属性或者state发生改变时，才会执行这个函数

        //nextProps：代表是改变props之后的值
        //nextState：代表的是改变之后的state的值
        console.log(nextProps);
        console.log(nextState);
        console.log("shouldComponentUpdate");
        //如果这个函数返回一个false，不会再次调用render方法，如果返回一个true，那么会继续调用render，改变视图
        return nextState.num%3;
    }
    componentWillUpdate(){
        //可以获取到下一次的数据
        //当sholdComponent
    }

    componentWillUnMount(){
        //当组件销毁时，触发该函数
        //移出定时器，移出事件监听
        console.log("5.componentWillUnMount");
    }

    handleClick = () => {

        /*this.setState({num: this.state.num + 1})
        this.state = {num: 2};*/
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"))
    };
    //当state发生改变时，会再次出发render函数
    render() {
        console.log("3.render");
        return (<div>
            {this.state.num}
            <button onClick={this.handleClick}>+</button>
        </div>)
    }
}
ReactDOM.render(<Parent/>, document.querySelector("#root"));