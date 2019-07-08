import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router,Route} from "react-router-dom";
import Home from "./container/Home"
import Profile from "./container/Profile"
import User from "./container/User"
import App from "./container/App"
import "bootstrap/dist/css/bootstrap.css"
// 一般情况路由配置路由都在index中进行配置；
ReactDOM.render(
    <Router>
        <App>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/user" component={User}/>
        </App>
    </Router>,
    document.querySelector("#root"));
