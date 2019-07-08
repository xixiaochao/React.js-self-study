import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

export default class VoteFooter extends Component{
    constructor(){
        super();
    }

    render(){
        return <footer className='panel-footer' onClick={this.handleClick}>
            <button className='btn-success'>支持</button>
            &nbsp;&nbsp;
            <button className='btn-danger'>反对</button>
        </footer>
    }
}
render(
    <App/>,
    document.querySelector('#root')
);

