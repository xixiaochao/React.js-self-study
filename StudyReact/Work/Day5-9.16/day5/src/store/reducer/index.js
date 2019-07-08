
/**
 * Created by Administrator on 2018/9/16.
 */
/*
 * 把多个REDUCER合并成为一个REDUCER
 *   COMBINE-REDUCERS({
 *       [KEY]:[VALUE是某一个需要合并的REDUCER],
 *   })
 *
 *   导致影响：
 *       1.REDUX容器中的状态也是按照合并REDUCER时候制定的KEY值分开存储管理的，列举当前案例合并的结果：
 *           STATE={
 *               VOTE:{
 *                   n:0,
 *                   m:0
 *               },
 *               PERSON:{
 *                   n:0,
 *                   baseInfo:null
 *               }
 *           }
 * */
import {combineReducers} from 'redux';
import vote_reducer from './vote'
import person_reducer from './person'

let reducer = combineReducers({
    vote:vote_reducer,
    person:person_reducer
});
export default reducer;


