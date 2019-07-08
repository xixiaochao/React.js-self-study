import React from 'react';
import PropTypes from 'prop-types';
import VoteHeader from "./VoteHeader";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

/*
* 1、创建一个redux容器（附带了一个事件池）：create-store
*   store：{
*       dispatch：派发任务给reducer
*       subscribe：向事件池中追加方法
*       get-state：获取redux状态池中的状态信息
*   }
*   执行create-store必须指定一个管理员reducer（函数），在reducer中完成状态信息的更新和管理
* */
//=>开始创建容器的时候，容器没有状态信息，那么第一次执行REDUCER（只有DISPATCH才会通知REDUCER执行），此时STATE是没有信息的，为了防止报错，我们给其一个初始状态信息值即可
function reducer(state = {
                     n: 0,
                     m: 0
                 }, action) {
    //=>REDUCER默认就会有一个STATE参数：存储的是当前REDUX容器中的状态信息
    //=>第二个参数ACTION是派发任务（DISPATCH）时候传递的行为对象：store.dispatch({ type:'XXX' }) TYPE行为标识是ACTION中必须具备的属性，这个是语法规范，只有这样REDUCER才能根据不同标识做不同的事情
    state = JSON.parse(JSON.stringify(state));//=>进来后先进行原始状态的深度拷贝，防止STATE的操作直接修改原始状态信息，我们需要最后RETURN的时候才修改
    return state;//=>RETURN的是什么，相当于把原有的状态信息修改成为什么
}

let store = createStore(reducer);
export default class Vote extends React.Component {
    static defaultProps = {
        title: '珠峰培训教学很棒！'
    };
    static propTypes = {
        title: PropTypes.string
    };

    /*祖先元素设置上下文信息*/
    static childContextTypes = {
        //=>设置后代元素中需要的上下文信息的类型：在CONSTRUCTOR执行前执行
        tt: PropTypes.string,
        n: PropTypes.number,
        m: PropTypes.number,
        change: PropTypes.func
    };

    getChildContext() {
        //=>生命周期函数：设置后代需要使用上下文的具体值，并且此生命周期函数会在每一次RENDER执行之前执行（第一次加载或者组件重新渲染，它都会执行）；并且它RETURN的是什么，后代能用的上下文信息就是什么
        return {
            tt: this.props.title,
            n: this.n,
            m: this.m,
            change: flag => {
                flag ? this.n++ : this.m++;
                this.forceUpdate();
            }
        };
    }

    constructor(props, context) {
        super(props, context);
        this.n = 0;
        this.m = 0;
    }

    render() {
        let styleOBJ = {
            width: '60%',
            margin: '20px auto'
        };

        return <section style={styleOBJ} className='panel panel-default'>
            <VoteHeader/>
            <VoteBody/>
            <VoteFooter/>
        </section>;
    }
}