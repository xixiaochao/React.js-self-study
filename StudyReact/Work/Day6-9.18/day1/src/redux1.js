/**
 * Created by Administrator on 2018/9/18.
 */
//创建容器
    //存储状态

let createStore=(reducer)=>{
    let state;
    let getState=()=>{
        return JSON.parse(JSON.stringify(state));
    };
    let listener=[];
    let subscribe=(fn)=>{
        listener.push(fn);
        return ()=>{
            listener=listener.filter(item=>item!==fn);
        }
    };
    let dispatch=(action)=>{
        state=reducer(state,action);
        listener.forEach(item=>item());
    };
    dispatch({});
    return{getState,dispatch,subscribe}
};
let combineReducers=(reducers)=>{
    return(state={},action)=>{
        let obj={};
        for (let key in reducers) {
            obj[key]=reducers[key](state[key],action)
        }
        return obj;
    }
};
export {createStore,combineReducers}