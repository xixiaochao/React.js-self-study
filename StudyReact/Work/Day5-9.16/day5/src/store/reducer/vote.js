/**
 * Created by Administrator on 2018/9/16.
 */
export default function vote_reducer(state = {
    n: 0,
    baseInfo: 0
}, action) {
    state = JSON.parse(JSON.stringify(state)); //实现深度克隆但是不能用JSON，该如何处理
    switch(action.type){

    }
    return state;
}