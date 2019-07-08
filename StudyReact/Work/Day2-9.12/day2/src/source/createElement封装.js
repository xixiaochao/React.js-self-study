/**
 * Created by Administrator on 2018/9/13.
 */
class CreateElement {
    constructor(type, attrs, childer) {
        this.type = type;
        this.attrs = attrs;
        this.childer = childer;
    }

    render() {
        let ele = document.createElement(this.type);
        for (let key in this.attrs) {
            let _key = key;
            if (key === "className") {
                _key = "class";
            }
            if (key === "htmlFor") {
                _key = "for";
            }
            ele.setAttribute(_key, this.attrs[key]);
        }
        this.childer.forEach(child => {
            let childEle = child instanceof CreateElement ? child.render() : document.createTextNode(child);
            ele.appendChild(childEle);
        });
        return ele;
    }
}
let obj = {
    constructor(type, attrs, ...childer){
        return new CreateElement(type, attrs, childer);
    }
};
let objDOM = {
    render(element, cont){
        cont.appendChild(element.render());
    }
};

let a = obj.createElement(
    "h1",
    {
        a: 1,
        classname: "dev"
    },
    "hello",
    obj.createElement(
        "span",
        {b: 2},
        "world"));
objDOM.render(a, document.getElementById("root"));