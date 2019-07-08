import React from "react";
import { render } from "react-dom";
//路由模块 需要一个路由容器 容器标识着使用了什么路由 hash brower
// 容器里面放的就是路由
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile';
import User from "./pages/User";
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
// Router路由盒子 只能有一个根节点
// 默认 路由从上到下匹配 如果匹配到就会渲染对应的组件 中间件
// 解决404的问题 在后端处理 可以找不到的话就返回首页 首页会根据当前的路径再次渲染路由
render(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/user" component={User} />
                <Route path="/profile" component={Profile} />
                <Redirect to="/" />
            </Switch>
        </App>
    </Router>,window.root
);

// as Router
// Route
// Redirect
// Link
// NavLink