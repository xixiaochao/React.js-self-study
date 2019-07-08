/**
 * Created by Administrator on 2018/10/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Dialog from './component/Dialog'

ReactDOM.render(<main>
    <Dialog content="席小超"/>
    <Dialog type={2} content="席超"/>
    <Dialog type="请登录" content={
        (<div>
            <input type="text" className="form-control" placeholder="请输入用户名"/>
            <br/>
            <input type="password" className="form-control" placeholder="请输入密码"/>
        </div>)
    }>
        <button className="btn btn-success">登录</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger">取消</button>
    </Dialog>
</main>,window.root);