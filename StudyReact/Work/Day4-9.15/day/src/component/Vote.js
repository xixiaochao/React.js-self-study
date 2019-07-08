/**
 * Created by Administrator on 2018/9/15.
 */

/*
 *创建组件的两种常用方式
 * 1、函数式创建组件（静态组件）
 *   function [component](props){
 *       //=>props:调取组件传递进来的属性
 *       return <div>
 *           JSX元素
 *       </div>
 *   }
 *       此种方式只能有传递的属性，没有状态和生命周期函数，组件一旦创建调用，组件呈现的内容将不能发生改变，所以称为静态的组件（操作简单性能高）
 * 2、继承类创建组件（动态组件）
 *       class [Component] extends React.Component{
 *           constructor(){
 *               super();
 *           }
 *           render(){
 *               return [JSX];
 *           }
 *       }
 *
 *       最常用的创建组件方式，可以有属性、状态、生命周期等，组件呈现的内容可全面灵活的操作（可以基于Redux/React-Redux进行信息管理等）
 */

/*
 * 组件的属性
 * 1、一般情况下，当前组件可能会被多次调用，我们想区分不同的效果，则可以在调取组件的时候基于属性传递不同的值进来，从而达到呈现不同的效果和内容
 * 2、在复合组件中，父组件想把信息传递给子组件，也可能会用到属性
 * 3、属性时调取的时候传递进来的信息，组件内部无法修改其值，也就是“只读”的，但是我们你可以给传递进来的属性设置默认值和默认规则等；
 *
 * 组件的状态
 * 1、状态是组件内部自己设定的，不是调取时候传递进来的
 * 2、基于SET-STATE修改组件的状态，组件会重新的渲染（如果jsx结构中用到了状态信息作为呈现，页面内容也会跟着改变），基于状态实现 m=>v;凡是组件中的内容根据某些操作或者条件，需要后期改变的，一般都是基于状态的更新来通知视图的改变，一般都是基于状态的更新来通知视图的改变
 * */
import React from "react";
import PropTypes from "prop-types";
import VoteBody from "votebody";
import VoteFooter from "voteFooter";
import VoteHeader from "voteheader";

export default class Vote extends React.Component {
    constructor中的props
    static defaultProps = {
        title: '珠峰'
    };
    static propTypes = {
        title: PropTypes.string
    };
    constructor(props, context) {
        super(props, context);

    }

    render() {
        let styleOBJ = {
            width: '60%',
            margin: '20px auto'
        };
        return <section style={styleOBJ} className="panel panel-default">
            <VoteHeader/>
            <VoteBody/>
            <VoteFooter/>
        </section>
    }
}

