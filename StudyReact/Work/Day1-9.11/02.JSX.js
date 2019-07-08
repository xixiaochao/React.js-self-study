import React from "react";  //导入 react模块

import ReactDOM from "react-dom";  //导入 react-dom  模块

//1. 如果挂载两个,第二个会覆盖第一个

let h1=<h1>12345456</h1>

ReactDOM.render(h1,document.querySelector("#root"));

let h2=<h1>addgggggg</h1>

ReactDOM.render(h2,document.querySelector("#root"));


//2. ReactDOM是一个虚拟的DOM


//3. ReactDOM.render(虚拟的DOM对象,要插入真实DOM位置,回调函数)方法

/*
  1) 将虚拟的DOM转为真实的DOM

  2) 把真实的DOM 插入第二个参数的DOM下

  3)  渲染完成后,回调第三个参数,即回调函数,可以在这个回调函数中操作DOM

*/