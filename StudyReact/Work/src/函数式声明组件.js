/**
 * Created by Administrator on 2018/10/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog函数声明式组件';

ReactDOM.render(<div>
    {/*注释：JSX中调取组件，只需要把组件当做一个标签调取使用即可（单闭合和双闭合都可以）*/}
    <Dialog con="哈哈" style={{color:'red'}}/>
    <Dialog con="嘿嘿" lx={2}>
        {/*属性值不是字符串，我们需要使用大括号包起来*/}
        <span>1</span>
        <span>2</span>
    </Dialog>
</div>,window.root);