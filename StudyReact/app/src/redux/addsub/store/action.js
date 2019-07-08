import * as types from './actionTypes';
export function incrment(){
    return {type:types.INCERMENT}
}

export function deincrment(){
    return {type:types.DEINCERMENT}
}

/**
 * import store from './index';
 * store.dispatch({type:types.标识})
 */