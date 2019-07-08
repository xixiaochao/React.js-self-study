import {React,ReactDOM}  from "./01self-jsx"


let h= React.createElement("h1",{name:"张三"},React.createElement("div",null,"测试内容"));
ReactDOM.render(h,window.root);