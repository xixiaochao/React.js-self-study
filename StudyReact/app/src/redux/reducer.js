import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

if(module.hot)module.hot.accept();
function reducer(state={num:1,name:'se'},action){
    //发起了action一定是要新给一个对象，如果你发现你修改了state，但是页面没有更新
    //问题基本上就是没有更新最新的状态
    console.log(action);
    switch(action.type){
        case 'ADD_NUM':
            return {...state,num:state.num+1}
        case 'CHANGW_NUM':
            return {...state,name:'席小超'}
        default:
            return state;
    }
}

const store = createStore(reducer); // 第一个参数放reducer的，第二个参数使用扩展

console.log(store.getState());
store.dispatch({type:'ADD_NUM'}); //通过dispatch去发起action
store.dispatch({type:'CHANGW_NUM'}); 
console.log(store.getState());

function App(){
    return <div>
        135
    </div>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);