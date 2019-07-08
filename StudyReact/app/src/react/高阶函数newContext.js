import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const {Provider,Consumer} = React.createContext();

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:0
        }
    }

    changeNum = () => {
        // this.setState({num:this.state.num + 1})
        // console.log(1);
        this.setState((prev)=>({num:prev.num+1}));
    }

    render(){
        return (
            <Provider value = {{num:this.state.num,changeNum:this.changeNum}}>
                <div>
                <p>父级{this.state.num}</p>
                    <hr />
                    <PaP/>
                </div>
            </Provider>
        )
    }
}

class PaP extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(<div>
            <p>子组件</p>
            <PaP1></PaP1>
            <PaP2></PaP2>
        </div>)
    }

}
class PaP1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            num2:10
        }
    }
    render(){
        console.log(this.state.num);
        
        console.log(this.context.num);
        return (<div>
            孙子组件{this.context.num}
        </div>)
    }
}
class PaP2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() { 
        return (
            <Consumer>
              {
                ({num,changeNum})=>{
                    console.log(num)
                    return(
                        <div>
                            { <button onClick={changeNum}>点击</button> }
                            <div>孙子2组件{num}</div>
                        </div>
                    )
                }
              }
            </Consumer>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));