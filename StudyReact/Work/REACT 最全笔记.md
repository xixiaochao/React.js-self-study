[toc]
#REACT 最全笔记
## 1.React
> React是Face Book公司开发的一款MVC版JS框架
> MVC：Model（数据层）、View（视图层）、Controller（控制层）
> 核心思想：通过数据的改变来影响视图渲染（数据驱动）

## 受控组件与非受控组件
> 1、基于数据驱动(修改状态数据，react帮助我们重新渲染视图)完成的组件叫做`受控组件`(受数据控制的组件)
> 2、基于ref操作DOM实现视图更新的，叫做`非受控组件`
> 真实项目中，建议多使用受控组件
> 
> 1、受控组件：通过状态的信息更改来影响视图的改变叫做受控组件。也就是说，受状态管控、由数据影响视图。
> 2、非受控组件：通过修改DOM 来影响视图的改变叫做非受控组件，即不受状态管控，通过DOM来影响视图。
> 真实项目用受控组件的多，因为框架诞生的本质就是让数据影响视图(MVC)，由视图来影响数据（MVVM）
## VUE和REACT
> VUE：【MVVM】数据更改视图跟着更改，视图更改，数据也跟着更改(双向数据绑定)
> REACT：【MVC】数据更改，视图跟着更改(原本是单向数据绑定，但是我们可以自己构建出双向的效果)

## 2.React脚手架

### 安装
npm install -g create-react-app
create-react-app my-app
> create-react-app[项目名]：官方提供的，快速搭建react工程项目的脚手架
cd my-app
npm run start

### 作用
> 基于脚手架 Create-Reacr-APP 快速构建一个React工程项目结构目录
> 自动安装React的核心组件：React/React-DOM
> 自动安装WebPack，并且完成相关配置
	->区分了开发环境和生产环境
	->安装Babel以及对应的语言解析包，可以把React和ES6进行编译处理
	->安装CSS/Style/File等加载器，处理CSS等合并压缩的问题
	->安装了ES-lint，可以进行代码检测
	->安装了很多插件，可以实现CSS、JS以及HTML的分离、打包，压缩
	->安装了WebPack-Dev-Server，可以在开发环境下，编译后自动创建服务，自动打开浏览器，当代码修改后，自动保存编译，页面自动刷新渲染等

###操作

####[使用脚手架]
1.把脚手架安装在全局环境下，以后用命令操作，完成项目结构的搭建
$ npm install create-react-app -g

2.创建项目结构目录
	项目名遵循NPM发包命名规范：名字只能是 /^[a-z0-9_-]$/
	$ create-react-app +项目名
3.特点：如果当前电脑安装了yarn，创建工程目录的时候，走的是yarn安装，yarn和npm主体相同，但是处理起来还有一定的区别，所以我们以后继续向工程中安装模块以及执行配置脚本打包编译的时候，尽可能使用yran，不建议和npm混用。因为有时候会发送丢包，包错乱等事项（如果电脑没有安装yran，可以使用npm）

####[工程化目录]

| - node_modules
|	| - .bin 所有在本地可执行的命令脚本（react-scripts.cmd）
| 	| - ...
| - package.json 当前项目的配置清单
|
| - public 存放的是当前项目的HTML页面（有可能放一部分静态资源）或者是无需webpack编译，直接在页面中导入的资源文件
|	| - index.html  
|	| - ...
| - src 存放的是项目需要的所有JS或静态资源等（包括组件、STORE、路由、数据模型、AJAX请求等内容，即“我们开发的所有内容”）`当前项目中的大部分业务逻辑代码和一些资源都是存放在这个文件夹下的`
| 	| - 	index.js	当前项目的入口文件
|	| - ...

####[脚手架生产的配置清单] 
- react  （16.4）
- react-dom  （16.4）
- react-scripts  （1.1）
    + 融合了webpack所需要的插件或者加载器等内容
    + webpack
    + webpack-dev-server
    + babel
    + eslint
    + ...
    + 脚手架为了美化结构目录，把配置好的webpack隐藏到react-scripts中，放到node_modules下了
####[暴露WebPack配置项]
脚手架构建项目的时候，为了结构的美化，把所有的webPack配置都隐藏到了Node_modules中（React-scripts中），真实项目中，我们经常会基于脚手架构建的结构，自己安装配置信息（例如Less处理的配置），此时我们需要把配置项暴露出来
	`$ yarn eject` 此操作是`不可逆转`的，一旦暴漏出配置项，将无法再将它隐藏，谨慎操作（而且操作之前需要把所有修改的文件提交到git）
把默认隐藏的webpack配置项暴露出来，这样我们可以在默认的基础上进行修改，变成符合我们自己项目的配置结构
	| - config 存放的是webpack的一些配置项
	|   | - webpack.config.dev.js 开发环境 (执行yarn start 走的是这个配置项)
	|	| - webpack.config.prod.js 生产环境 (执行yarn build 走的是这个配置项)
	|   | - paths.js 基本配置项（包含项目的入口信息）
	|	| - ...
	| - scripts  当我们执行yarn xxx的时候，首先找到这里对应的JS文件，并且把它执行，从而走到对应的webpack配置
	|   | - start.js / build.js / test.js

####[可执行的脚本命令]
`$ yarn start` 或者 `npm run start`开发环境下预览 
	-> 创建了一个本地服务，端口号为3000，协议为HTTP的web服务
	-> 按照webpack.config.dev.js把项目编译
	-> 自动打开浏览器，预览我们正在开发的项目
	-> 当项目文件修改的时候，自动重新编译，浏览器页面自动刷新，展示最新的效果
	
	[windows]
	$ set HTTPS = true&&yarn start
	$ set PORT = 1234&&yarn start	
	[mac/linux]
	$ HTTPS = true yarn start
	$ PORT = 1234 yarn start

`$ yarn build`
->生成一个build文件夹，存放最后打包的文件 生产环境下使用的
->基于webpack.config.prod.js，把项目进行编译打包
->部署上线的时候，只需要把build中的内容发布即可

####[基于脚手架配置less]
1.安装less和对应的加载器
`$ yarn add less less-loader`

2.修改webpack配置项：

####[修改本地启动服务的端口号]
start.js 第43行
$ set PORT=8000   设置环境变量中的端口号是8000（同样的还有HTTPS/HOST）
"start": "set PORT=9000&set HTTPS=true&node scripts/start.js",

##3.JSX语法
> React 是基于独有的JSX语法实现视图（数据和HTML）渲染
> JSX语法的渲染使用的是ReactDOM.render
```
ReactDOM.render([JSX元素],[指定的容器],[回调函数])
//回调函数：当我们把JSX放到指定容器内，触发执行的函数
```
> JSX = JavaScript + XML(HTML)
> 1.不推荐存放JSX的容器是body（会报错），一般都是使用我们创建的元素（例如：创建#root的div容器）
> 2.不允许出现两个“根”元素，如果需要绑定复杂的结构，最外层嵌套一个容器作为根元素即可
> 3.把数据嵌套到JSX中（不是嵌套到元素的属性中，而是正常的内容中）
> ==可以嵌入变量或直接的数据值：==
```
let name = "范里昂",
ReactDOM.render(<div>
    <h1>{name}</h1>
    <h2>{"Leon"}</h2>
    <h2>{[1,2,3]}</h2>
    <h2>{(()=>{
        return "自执行函数的结果";
    })()}</h2>
</div>,window.root);
```
> ==不能嵌入对象（代指：{ }、 /^$/、日期对象、或数组中有前面项的）==
>  == 可以嵌入基本类型值（null/undefined/布尔值都是空元素，不显示内容）== 
>  大括号{ }中可以嵌入JS表达式（执行JS代码需要有返回结果）
>  循环创建的JSX元素需要设置标识KEY，使用map是因为它有返回值
```
循环创建的JSX表达式
let data = [{id: 1, title: "haha"}, {id: 2, title: "hihi"}];

ReactDOM.render(<ul>
    {
        data.map((item, index) => {
            return <li key={index}>
                {item.id}
                {item.title}
            </li>;
        })
    }
</ul>, window.root);
```
##react基础知识
###1.属性
> 调取组件的时候，传递给组件的信息(render渲染的时候会把props传递给组件，props就是属性)
> 作用：让组件丰富多元化，传递不同的属性，控制组件展示不同的效果
> 特点：传递进来的属性在组件内部不能修改，也就是它是"只读"的(修改属性的值，只能重新调取组件并且重新传递值)
> 虽然不可以修改属性值，但是在类创建组件的方式中，我们可以给组件设置默认值和设置一些规则

=>继承Component和PureComponent的区别？

###2.状态
> 自己在组件内部定义的
> 作用：组件内部的状态重新更新(setState)，可以控制组件内部重新渲染(不需要重新调取组件也可以渲染)
> 凡是想在后期某个阶段，某个操作，通过修改一些信息，想让组件重新渲染，就用状态


### 3.ref

### 4.生命周期
> 从组件调用开始(重新调用组件可能会从新开始)：
> constructor
> componentWillMount 第一次渲染之前
> render 第一次渲染
> componentDidMount 第一次渲染之后
> 

 组件内部状态修改：
- shouldComponentUpdate(nextProps,nextState){
     //=>是否允许更新
     this.props/this.state获取的依然是之前的信息，nextProps/nextState获取的才是最新修改的信息

     return true/false; //=>TRUE继续执行更新操作  FALSE停止更新
  }
- componentWillUpdate(nextProps,nextState) 更新之前
- render 重新渲染
- componentDidUpdate  更新之后

调取组件传递的属性发生改变：
- componentWillReceiveProps(nextProps) 接收最新的属性之前
- shouldComponentUpdate
- ...

卸载（路由切换的时候组件会发生卸载）：
- componentWillUnmount 卸载之前

##复合组件 & 平行组件
> 组件嵌套：父组件嵌套子组件(或者更深层次嵌套)
> 平行组件：没有嵌套关系的组件(包含：兄弟组件)

1、父组件把信息传递给子组件(复合组件信息传递)
> 父组件可以基于属性把信息传递给子组件(传递是单向的，父可以传子，子不能传父)；对于嵌套层级较深的组件，可以依托这种方式一级级传递下去即可！

2、平行组件信息交互
> 我们在条件允许的情况下可以让其拥有共同的父组件，例如：footer和body，我们可以让其拥有vate父组件，如果footer把vote中的信息改了(子改动父)，这样我们就可以让vote把最新修改的信息传递给body(父传子)
> 1) 子组件如何修改父组件的信息
> 父组件基于属性把自己的一个函数Fn传递给子组件，子组件在某些操作下，把Fn执行，而执行Fn的过程我们就可以修改父组件中的一些信息了。(原理类似于回调函数)

3、基于上下文管理传递的信息
> 属性传递只能一层层传递，对于复杂的组件嵌套操作不方便，而且需要在调取组件的时候，把传递的属性一一列举才可以；
> 上下文也是依托组件嵌套关系完成的，但是它的优势在于：当前组件(祖先组件)设置一些上下文，后代所有组件(儿子或者孙子等)都可以随时获取(不需要调取组件的时候一一传递，基于某些方法直接获取即可)这些信息使用
> 

##redux思想
全局有一个公共容器(所有组件都可以操作)，存储公共状态，我们可以在footer中把全局容器中的信息进行修改，而且只要全局信息修改，就可以通知所有用到该信息的组件重新渲染(类似于发布订阅)==>redux就是这种解决方法：REDUX只有一个作用，就是为了实现组件之间的信息交互

----------
redux：进行状态统一管理的类库(适用于任何技术体系的项目)
常见的redux的应用场景： 
1、只要两个或者多个组件之间想要实现信息的共享，都可以基于redux解决，把共享的信息存储到redux容器中进行管理
2、还可以使用redux做临时存储：页面加载的时候，把从服务器获取的数据存储到redux中，组件渲染需要的数据，从redux中获取，这样只要页面不刷新，路由切换的时候，再次渲染组件不需要重新从服务器拉取数据，直接从redux中获取即可，页面刷新，从头开始！(这套方法代替了localStorage本地存储来实现数据缓存)
redux一共三套体系：
1、订阅方法体系
2、获取数据体系
3、修改数据体系
action中处理的事情暂时感觉很无聊：就是封装几个方法(都是需要dispatch派发任务修改状态时执行的方法)，方法返回的是当前派发任务时传递的action对象 `reacr-redux中非常有用`reacr-redux中才能体验到这个封装的乐趣
> 1、执行createStore
> 创建一个容器【store】用来管理公用的状态信息
> 创建一个事件池，用来存储一些方法(方法一般都是用来通知某个组件重新渲染的)
> 当容器中的状态改变，会自动通知事件池中的方法依次执行
> 2、基于store.getState可以获取容器中存储的状态信息(拿到状态信息就可以做数据绑定等操作了)
> 3、我们可以基于store.subscribe向事件池中追加方法(也可以移除事件池中的方法)
> 4、修改容器中的状态信息
> 首先雇一个管理员(reducer)，它就是用来修改容器中状态的
> 当我们在组件中进行某些操作想要修改状态信息的时候，我们首先dispatch派发一个任务给reducer，并且告诉reducer如何去修改状态信息
> 公共状态信息都是reducer去改的：reduce记录了所有修改状态的行为方法，我们以后想要知道怎么改的状态，只需要看reducer即可。
![Alt text](./1533921766138.png)

安装 
`yarn add redux react-redux`

redux：不局限于任何框架(vue/react/angular/jq...)
react-redux：把redux进一步封装，专门给react框架开发的(操作起来更加简洁)
vuex：类似于redux的操作思想，专门为vue框架定制的
dva：把redux/react-redux进一步封装，操作更简洁
mobx：和redux不完全一致，也是用来管控公用状态的，只不过操作起来更加简单而已

##redux的工程化管理
1、reducer的模块化拆分：每一个板块都有一个自己对于的reducer，最后基于一些方法把所有的reducer合并即可。
2、基于actionCreator统一管理，每次派发需要的行为对象，而且和reducer一样，也是分板块管理的。
3、把dispatch和reducer校验的时候需要的行为标识(type)进行统一管理
```
|- store STORE中存放的都是redux中使用的东西
	|-action ACTION文件夹中存放的是action-creator内容
		|- personal.js personal板块的action
		|- vote.js vote板块的action
		|- ...
		|- index.js 把所有板块的action进行合并
	|-reducer REDUCER文件夹中存放的是每个板块的reducer
		|- personal.js personal板块的reducer
		|- vote.js vote板块的reducer
		|- ...
		|- index.js 把所有板块的reducer进行合并
	|- action-types.js 存储项目中需要的所有行为标识 宏观管理所有的行为对象
	|- index.js 创建STORE容器的
```
![Alt text](./1533922544042.png)

##使用redux开发
1、把创建好的store挂载到上下文上，哪个组件需要，则从上下文获取
2、需要获取store中的状态信息，我们需要机遇getState获取，并且展示，为了容器状态更改组件重新渲染，我们还需要手动的subscribe；
3、需要派发的时候，我们自己还需要导入action，把对应板块中写的creator方法执行，手动dispatch一下 

##react-redux
react-redux是把redux进一步封装，适配react项目，让redux操作更简洁
=> 简化基于redux开发时编写业务逻辑的代码，可以使用react-redux

store文件夹中的内容和redux一模一样；
在组件调取使用的时候可以优化一些步骤：

###1、Provider：
=>我们把Provider设置为当前项目的`根组件`，可以把store自动挂载到整个项目最外层根组件(Provider)的上下文中(项目所有其他组件都可以基于上下文获取store了)
作用：把创建的store可以供内部任何后代组件使用(基于上下文完成的)
注意点：
1、Provider组件中只允许出现一个子元素
2、把创建的store基于属性传递给Provider(这样后代组件中都可以使用这个store了)

###2、connect：高阶组件
-> 可以自动从provider上下文中获取store
-> 可以把store中管理的状态 和 action中管理的行为对象，都基于属性的方式传递给对应的组件
->当store中状态改变，自动冲洗渲染当前组件，不需要我们自己subscribe了。

相对于传统的redux，我们做的步骤优化：
1、导出的不再是我们创建的组件，而是基于connect构造后的高阶组件。
2、react-redux帮我们做了一件非常重要的事情：以前我们需要自己基于subscribe向事件池追加方法，以达到容器状态信息改变，执行我们追加的方法，重新渲染组件的目的。但是现在不用了，react-redux帮我们做了这件事：`所有用到redux容器状态信息的组件，都会默认向事件池中追加一个方法，当状态改变，通知方法执行，把最新的状态信息作为属性传递给组件，组件的属性值改变了，组件也会重新渲染`
```javascript
//connect 高阶组件的常规用法
//把redux容器中的状态信息遍历，赋值给当前组件的属性(state)
let mapStateToProps = state=>{
	//state:就是redux容器中所有的状态信息
	//我们返回的是啥，就把它挂载到当前自己创建的组件属性上(redux存储很多信息，我们想用啥就返回啥即可)
	return{
		...state.vote
	}
}；
//mapDispatchToProps：把redux中的dispatch派发行为遍历，也赋值给组件的属性(actionCreator)
let mapDispatchToProps= dispatch =>{
//dispatch：store中存储的dispatch方法
//返回的是啥，就相当于把啥挂载到组件的属性上(一般我们挂载一些方法，这些方法中完成了dispatch派发任务操作)
	return {
		init(initDate){
			dispatch(action.vote.init(initData)) //就是把之前写在组件内部的dispatch行为都给抽离出来了。组件内部只需要把方法执行，就相当于dispatch了
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(自己创建的组件) 

//===========以上一堆代码简化写法如下：
export default connect(state=>({...state.vote}),action.vote)(自己创建的组件) ;
//react-redux帮我们做了一件事情，把action-creator中编写的方法(action对象的方法)，自动构建成dispatch派发任务的方法，也就是mapDispatchToProps这种格式
```


##redux的应用
1、基于redux管理公共状态信息，实现组件之间的信息通信
> 注意：当页面刷新的时候，存储到redux的中的信息都会消失，因为页面刷新，所有程序都会重新执行，包括redux(了解redux我们知道，它仅仅是在某一个栈内存中用变量存储一些信息而已)

2、基于redux做数据的缓存，来减少路由切换的时候频繁向服务器发送请求(每一次拿到的数据还是一样的)，做项目的一些性能优化
> 1）第一次加载组件的时候，我们会向服务器发起请求，把获取的数据存储到redux中
> 2）我们从redux中获取数据，如果存在数据，我们直接用这些信息渲染组件，如果不存在，我们重新发起请求，把获取的数据重新存储到redux中
> 3）以后路由切换的时候，组件卸载和重新挂载，也会根据redux中是否有这些数据而减少对服务器的请求次数，既保证减少了服务器压力，也保证渲染速度加快。

###面试时问项目遇到问题怎么处理
1、简历或者面试的时候，面试官经常问：项目中遇到哪些问题，你是如何处理的？
> 1）性能优化：
> 2）安全优化：跨站脚本攻击XSS(Cross Site Scripting)、跨站请求伪造CSRF(Cross Site Request Forgery)
> 3）代码规范 
> ...
> 4）尽可能突出对项目的贡献(哪怕是让git操作更简洁或者让webpack更高质量(性能更好、环境区分更简洁等)...)

##闭包的作用
###什么是闭包
> 闭包是JS中非常关键的知识点，不管是具体的业务逻辑开发，还是组件插件的封装，都会用到闭包。我对闭包的理解：函数执行产生一个Scope(作用域)，这个作用域中可能不去释放，这样就可以保存一些私有的信息供后续使用

###闭包的作用：保存、保护
> 【保护】平时在开发项目的时候，简单的项目我基于单例模式做模块管理，复杂的项目基于CommonJS/Es6Module等模块规范管理，但是所有的模块规范基本上都是形成一个闭包，把内容保护起来。
> 平时自己喜欢看一些插件的源码，自己也会封装一些插件，基本上都会用闭包包起来，防止和其他的冲突。我看过JQ源码，它就是这样处理的。
> 【保存】形成不释放的scope，把一些信息事先存储起来，最长应用的思想是柯理化函数思想和COMPOSE思想，具体：Function.prototype.bind、combineReducers、createStore(dispatch)、subscribe、applyMiddleWare、各种中间件、react-redux中的connect...

compose(a,b,c,d) =>a(b(c(d()))) =>数组reduce
```
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```
