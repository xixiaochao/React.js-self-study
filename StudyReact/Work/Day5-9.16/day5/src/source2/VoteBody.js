/**
 * Created by Administrator on 2018/9/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component{
static contextTypes={
    store:PropTypes.object
};
constructor(props,context){
    super(props,context);
}
componentDidMount(){
    this.context.store.subscribe(()=>{
        this.forceUpdate();
    });
}
render(){

}

}