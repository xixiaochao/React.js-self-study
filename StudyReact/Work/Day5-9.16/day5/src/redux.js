/**
 * Created by Administrator on 2018/9/16.
 */

/*
 * create-store:创建redux容器存储公共状态信息（并且要创建事件池）
 *  @param
 *   Reducer：修改容器状态的管理员（函数）
 *  @return
 *   {
 *       dispatch
 *       get-state
 *       subscribe
 *   }
 * */
export function createStore(reducer) {
    //=>state存储公共的状态：listeners存储事件池方法
    let state,
        listeners = [];

    //=>get-state：获取公共状态信息
    function getState() {
        //=>返回的state深拷贝，这样外面获取到的和本身的state不是同一个空间，修改张贴只能走dispatch（redux这里处理的是不完善的）
        state = JSON.parse(JSON.stringify(state));
        return state;
    }

    //=>subscribe:向事件池中追加方法
    function subscribe(fn) {
        for (let i = 0; i < listeners.length; i++) {
            let listener = listeners[i];
            if (listener === fn) {
                return new Function();//=>返回空函数，别人执行的时候什么都不处理，但是也不会报错（不重复情况下返回删除的函数）
            }
        }
        listeners.push(fn);

        //=>返回移除方法的操作
        return function unsubscribe() {
            let index=listeners.indexOf(fn);
            if(index>=0){
                listeners.splice(index,1);
            }
        }
    }

    //=>dispatch:派发任务，通知reducer执行
    function dispatch(action) {
        if(!'type' in action){
            throw new SyntaxError('action行为对象必须要有type行为标识，请检查你的代码');
        }
        //=>执行reducer，把其返回的最新状态替换现有的状态信息
        try {
            reducer(state,action);
            //=>通知事件池中的方法执行；优化处理应该是检测状态是否发生改变，改变我们才会执行方法，否则执行方法没啥意义
            for (let i = 0; i < listeners.length; i++) {
                let listener=listeners[i];
                typeof listener==='function'?listener():null;

            }
        }catch (e){
            throw new SyntaxError('reducer执行发生异常');
        }
    }

    //=>开始创建redux容器的时候，我们默认先执行一遍dispatch（给容器设置初始值）
    dispatch({
       type: '@@REDUX/INIT${Math.random()}'
    });

    return {
        getState,
        subscribe,
        dispatch
    };

}

//module.exports.createStore=createStore;