import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

export default class VoteBody extends Component{
    constructor(){
        super();
    }

    render(){
        return <main className='panel-body'>
            支持人数：{n}人 <br/>
            反对人数：{m}人 <br/>
            支持比率：{rate}
        </main>
    }
}

