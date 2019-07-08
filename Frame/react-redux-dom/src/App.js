import React,{Component} from 'react';
import Nav from './components/Nav'
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return <div>
            <Nav></Nav>
            {this.props.children}
        </div>
    }
}