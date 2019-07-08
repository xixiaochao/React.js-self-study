import React,{Component} from 'react';
import SliderBar from '../components/SliderBar';
import {Route,Switch,Redirect} from 'react-router-dom';
import Add from './Add';
import List from './List';
export default class User extends Component{
    state = {
      sliderBarData:[
        {path:'/user/add',content:'用户添加'},
        {path:'/user/list',content:'用户列表'}
      ]
    }
    render(){
      return (
        <div>
         <div className="col-md-3">
           <SliderBar sliderBarData={this.state.sliderBarData}></SliderBar>
         </div>
         <div className="col-md-9">
           <Switch>
             {/* 二级菜单 默认展示添加路由 */}
             <Route path='/user' exact={true} component={Add}/>
             <Route path='/user/add' component={Add}/>
             <Route path='/user/list' component={List}/>
             <Redirect to="/" />
           </Switch>
         </div>
       </div>
      )
    }
}