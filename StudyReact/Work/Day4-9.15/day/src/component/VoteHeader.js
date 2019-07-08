import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import PropTypes from 'prop-types';

export default class VoteHeader extends Component{
    constructor(){
        super();
    }

    render(){
        return <header className='panel-heading'>
            <h2 className='panel-title'>
                {this.props.title}
            </h2>
        </header>

    }
}
