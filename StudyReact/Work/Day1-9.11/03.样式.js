import React from "react";  //导入 react模块

import ReactDOM from "react-dom";  //导入 react-dom  模块

// style-loader  css-loader
// import "./引入的css.css"

ReactDOM.render(<div className="content" style={{border:"1px solid green"}}>你很帅</div>,document.querySelector("#root"));

// ReactDOM.render(div1,document.getElementById("root"));  

// ReactDOM.render(div1,window.root);