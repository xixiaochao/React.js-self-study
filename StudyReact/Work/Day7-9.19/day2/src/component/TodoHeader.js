import React from "react";
import {connect} from "react-redux";
import action from "../store/action"
class TodoHeader extends React.Component{
    getUnfinish=()=>{
        // 获取数据中isSelected 是false的个数；
        // console.log(this.props.todo);
        return this.props.todo.todos.filter((item)=>!item.isSelected).length;
    }
    render(){
        return <React.Fragment>
            <h3>亲 你还有{this.getUnfinish()}件事情未完成</h3>
            <input type="text" className="form-control" onKeyUp={(e)=>{
                if(e.keyCode==13){
                    this.props.add({id:Math.random(),isSelected:false,title:e.target.value});
                    e.target.value = "";
                }
            }
            }/>
        </React.Fragment>
    }
}
export default  connect((state)=>({...state}),action)(TodoHeader)
