import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" >
                            路由系统
                        </a>
                    </div>
                    <div className="navbar-nav nav">
                        <li><NavLink to="/" exact={true}>首页</NavLink></li>
                        <li><NavLink to="/user">用户</NavLink></li>
                        <li><NavLink to="/profile">个人中心</NavLink></li>
                    </div>
                </div>
            </nav>
        )
    }
}