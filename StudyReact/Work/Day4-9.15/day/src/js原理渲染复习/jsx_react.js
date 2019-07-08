/**
 * Created by Administrator on 2018/9/15.
 */
let React = {};

React.createElement = function createElement(type, props, ...children) {
    let newOBJ = {
        type,
        key:null,
        ref:null,
        props: {
            ...props,//=>key&ref 要提出来
        },
    };
    //=>children
    let params = children,
        len = params.length;
    if (len > 0) {
        newOBJ.props.children = len === 1 ? params[0] : params;
    }
    //=>key和ref的提取
    let props = newOBJ.props;
    for (let propsKey in props) {
        if (props.hasOwnProperty(propsKey)) {
            if (/^(KEY|REF)$/i.test(propsKey)) {
                newOBJ[propsKey] = props[propsKey];
                delete props[propsKey];
            }
        }
    }

    return newOBJ;
};

export  default  React;