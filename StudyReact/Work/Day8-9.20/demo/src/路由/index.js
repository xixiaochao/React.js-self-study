/**
 * Created by Administrator on 2018/9/20.
 */
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom";
let Home = () => {
    return <div>HOME</div>
};
let Personal = () => {
    return <div>PERSINAL</div>
};
let User = () => {
    return <div>USER</div>
};
ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/home" component={Home}/>
            <Route path="/personal" component={Personal}/>
            <Route path="/user" component={User}/>
        </div>
    </HashRouter>,document.querySelector("#root"));