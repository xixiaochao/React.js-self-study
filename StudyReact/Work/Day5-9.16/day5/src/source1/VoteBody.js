import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component {
    static contextTypes = {
        store:PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }
    componentDidMount(){
        //=>第一次渲染完成后，我们向REDUX事件池中追加一个方法（方法用来重新渲染当前组件），当REDUX状态改变，组件就会重新渲染
        this.context.store.subscribe(()=>{
            this.forceUpdate();
        })
    }

    render() {
        let {store} = this.context,
            {n,m} = store.getState(),
            rate = n + m === 0 ? '100%' : (n / (n + m) * 100).toFixed(2) + '%';
        console.log(n, m);
        return <main className='panel-body'>
            支持人数：{n}人 <br/>
            反对人数：{m}人 <br/>
            支持比率：{rate}
        </main>;
    }
}