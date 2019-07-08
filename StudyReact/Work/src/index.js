import React from 'react';
import ReactDOM from 'react-dom';

function Sum() {
    console.log(this);
    return <div>
        函数式声明
    </div>
}

class Dialog extends React.Component{
    constructor(){
        super();//=>ES6中的extends继承，一旦使用了constructor，第一行位置必须设置super执行；相当于React.component.call(this),也就是call继承，把父类私有的属性继承过来
        /*
        * this.props：属性集合
        * this.refs:REF集合（非受控组件中用到）
        * this.context:上下文
        *
        * */
        console.log(this);
    }

    render(){
        return <section>
            <h3>系统提示</h3>
            <div></div>
        </section>
    }
}

ReactDOM.render(<div>
    珠峰培训
    <Sum/>
    <Dialog/>
</div>,window.root);
let obj={
    type:'div',
    props:{
        children:[
            '珠峰培训',
            {
                type:Dialog,
                props:{
                    lx:2
                }
            }
        ]
    }
};