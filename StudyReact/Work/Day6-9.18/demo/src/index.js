import React from "react";
import ReactDOM from "react-dom";
import Counter  from  "./component/Counter";
import Todo from "./component/Todo"
import store from "./store";
import {connect} from "react-redux"

ReactDOM.render(
        <div>
            <Counter/>
            <Todo/>
        </div>
        ,
        document.querySelector("#root"));

