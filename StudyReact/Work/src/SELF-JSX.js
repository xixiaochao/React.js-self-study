/**
 * Created by Administrator on 2018/10/12.
 */

/*
 * 1、创建一个对象（默认有四个属性：TYPE/PROPS/REF/KEY）,最后要把这个对象返回
 *
 * 2、根据传递的值修改这个对象
 * TYPE => 传递的TYPE
 * PROPS 需要做一些处理：大部分传递PROPS中的属性都赋值给对象的PROPS，有一些比较特殊
 *   -> 如果是REF或者KEY，我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删除掉
 *   ->把传递的children作为新创建对象的props中的一个属性
 * */


function createElement(type, props, children) {

    //=>创建一个对象，设置一些默认属性值
    let obj = {
        type: null,
        props: {
            children: ''
        },
        ref: null,
        key: null
    };
//=>用传递的type的props覆盖原有的默认值
//obj={...obj,type,props};
    obj = {...obj, type, props: {...props, children}};//=>把ref和key提取出来(并且删除props属性值)
    'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
    'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
    return obj;
}


let objJSX=createElement(
    'h1',
    {id: 'titleBox', className: 'title', style: {color:'red'},ref:'AA',key:'12'}, '\u73E0\u5CF0\u57F9\u8BAD'
);


/*
 * Render:把创建的对象生成对应的DOM元素，最后插入到页面中
 * */
function render(obj, container, callBack) {
    let {type, props} = obj || {},
        newElement = document.createElement(type);
    for (let attr in props) {
        if (!props.hasOwnProperty(attr))break;//=>不是私有的直接结束遍历
        if (!props[attr]) continue; //=>如果当前属性没有值，直接不处理即可
        let value = props[attr];
        //=>Class-name
        if (attr === 'className') {
            newElement.setAttribute('class', value);
            continue;
        }
        //=>style
        if (attr = 'style') {
            if (value === '') container;
            for (var styKey in value) {
                if (value.hasOwnProperty(styKey)) {
                    newElement['style'][styKey] = value[styKey];
                }
            }
            container;
        }
        //=>children
        if(attr === 'children'){
            if(typeof value ==='string'){
                let text=document.createTextNode(value);//创建文本节点
                newElement.appendChild(text);
            }
            continue;
        }
        newElement.setAttribute(attr, value);//=>基于Set-Attribute可以让设置的属性表现在hmtl的结构上

    }
    container.appendChild(newElement);
    callBack && callBack();
}
render(objJSX, root, () => {
    console.log('ok');
});