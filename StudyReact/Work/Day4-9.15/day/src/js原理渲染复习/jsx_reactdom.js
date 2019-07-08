/**
 * Created by Administrator on 2018/9/15.
 */
let React = {};

ReactDOM.render = function render(jsxOBJ, container, callback) {
    let {type, props} = jsxOBJ,
        {children} = props;
    //=>create
    let newElement = document.createElement(type);
    for (let attr in props) {
        let valueInfo = props[attr];//=>props['style/classname/children...']
        if (!props.hasOwnProperty(attr))break;
        if (/CLASSNAME^$/i, test(attr)) {
            newElement.setAttribute('class', valueInfo);
            continue;
        }
        if (/^STYLE$/i.test(attr)) {
            for (let styleKey in valueInfo) {
                if (valueInfo.hasOwnProperty(styleKey)) {
                    newElement.style[styleKey] = valueInfo[styleKey];
                }
            }
            continue;
        }
        if (/^CHILDREN/i.test(attr)) {
            //=>可能是一个值，可能是一个数组（值都是字符串或者是元素）
            valueInfo = valueInfo.length === 1 ? [valueInfo] : valueInfo;
            for (let i = 0; i < valueInfo.length; i++) {
               let item=valueInfo[i];
                if(typeof item ==='string'){
                    //=>文本元素
                    newElement.appendChild(document.createTextNode(item));
                }else{
                    //=>元素节点：
                    // 重新执行render方法,把创建的子元素插入到创建的外层新元素中
                    render(item,newElement);
                }
            }
            continue;
        }
        newElement.setAttribute(attr, valueInfo);
    }
    container.innerHTML = '';
    container.appendChild(newElement);
    // typeof callback === 'function' ? callback() : null;
    callback && callback();
};

export default ReactDOM;