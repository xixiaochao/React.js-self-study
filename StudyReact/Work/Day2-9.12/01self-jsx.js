// 创建虚拟DOM的类
class CreateElement{

	constructor(tagname,attrs,children){
		this.tagname=tagname;
		this.attrs=attrs;
		this.children=children;

	}

	//将虚的DOM转为真实DOM
	render(){
		//创建出元素
		let ele=document.createElement(this.tagname);


		

		// 循环attrs,设置上所有的属性
		for(let key in this.attrs){
			let _key=key;

			if(key==='className'){
				_key='class';
			}

			if(key==='htmlFor'){
				_key='for';
			}

			ele.setAttribute(_key,this.attrs[key]);
		}

		if(this.children!=null &&this.children.length>0){
			this.children.forEach(child=>{
				//两种类型，要么是文本  要么是对象

				let childEle=child instanceof CreateElement?child.render():document.createTextNode(child);
				// 加入父元素
				ele.appendChild(childEle);
			});
		}

		return ele;

	}

}



// 封装自己的创建虚拟DOM方法

let React={
	/**
	 * tagname 标签名
	 * attrs   属性
	 * children 内容
	 */
	createElement(tagname,attrs,...children){

		// 返回虚拟的DOM对象
		return new CreateElement(tagname,attrs,children);
	}
}

let ReactDOM={
	render(element,container){
		container.appendChild(element.render());
	}
}

export {
	React,
	ReactDOM
}

// let h= obj.createElement("h1",{name:"张三"},"hello");
// ReactDOM1.render(h,window.root);