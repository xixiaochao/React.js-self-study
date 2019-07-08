/**
 * Created by Administrator on 2018/9/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class VoteHeader extends React.Component{
    static contextTypes={
        tt:PropTypes.string
    };

    constructor(props,context){
        super(props,context);
    }

    render(){
        return <header className="panel-heading">
            <h2 className="panel-title">
                {this.context.tt}
            </h2>
        </header>
    }
}