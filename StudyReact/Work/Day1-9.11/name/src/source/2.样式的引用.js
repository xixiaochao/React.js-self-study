/**
 * Created by Administrator on 2018/9/11.
 */
import React from "react";
import ReactDOM from "react-dom";

//import 如果导入的是自定义的文件模块，必须加上./
//style-loader css-loader；
import "./2.index.css"

ReactDOM.render(<div className="content" style={{border:"1px solid blue"}}>你很帅</div>,document.querySelector("#root"));
//ReactDOM.render(div1,document.getElementById("root"));
//ReactDOM.render(div1,window.root);