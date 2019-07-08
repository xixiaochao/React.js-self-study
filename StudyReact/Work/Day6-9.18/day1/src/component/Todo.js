/**
 * Created by Administrator on 2018/9/18.
 */
import React from "react";
import store from "../store";
export default class Todo extends React.Component{
    render(){
        return (<div>
            <input type="text" onKeyUp={(e)=>{
                if(e.keyCode==13){
                    store.dispatch({type:"add_todo",content:e})
                }
                console.log(e.target);
            }}/>
        </div>)
    }
}