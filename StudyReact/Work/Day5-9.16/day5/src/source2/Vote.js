/**
 * Created by Administrator on 2018/9/16.
 */
import React from 'react';
import PorpTypes from 'prop-types';
import VoteHeader from './VoteHeader';
import VoteBody from './VoteBody';
import VoteFooter from './VoteFooter';
import {createStore} from 'redux';

let store = createStore(function reducer(state = {
    n: 0, m: 0
                                         }, action) {
    state = JSON.parse(JSON.stringify(state));
    if (action.type === 'A') {
        state.n++;
    }
    if (action.type === 'B') {
        state.m++;
    }
    return state;
});

export default
class Vote extends React.Component {
    static defaultProps = {
        title: "珠峰"
    };
    static propTypes={
        title:propTypes.string
    };
    static childContextTypes={
        store:PropTypes.object
    };
    getChildContext(){
        return{
            store
        };
    };

    constructor(props,context){
        super(props,context);
        this.n=0;
        this.m=0;
    }

    render(){
        let styleOBJ={
            width:'60%',
            height:'20px auto'
        };
        return <section style={styleOBJ} className="panel panel-default">
            <VoteHeader/>
            <VoteBody/>
            <VoteFooter/>
        </section>
    }

}