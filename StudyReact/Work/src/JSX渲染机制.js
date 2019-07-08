/**
 * Created by Administrator on 2018/10/12.
 */
import React from 'react';
import ReactDOM, {render} from 'react-dom';//=>从React-DOM中导入一个ReactDOM，逗号后面的内容是把ReactDOM这个对象进行解构 <=> import {render} from 'react-dom';

/*
 * JSX渲染机制
 * 1、基于Babel中的语法解析模块（babel-preset-react）把JSX语法编译为React.createElement(...)结构
 *
 * 2、执行React.createElement(type,props,chidren)
 *
 * 3、ReactDOM.render（JSX语法最后生成的对象，容器），基于render方法把生成的对象动态创建为DOM圆度，插入到指定的容器中
 * */
let styleObj={color:'red'};
render(<h1/>, root);