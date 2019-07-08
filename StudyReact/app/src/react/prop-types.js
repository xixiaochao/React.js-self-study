import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

if(module.hot)module.hot.accrpt();

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:0
        }
    }
    render(){
        return (<div>
            <PPa num={this.state.num}/>
        </div>)
    }
}

class PPa extends Component{
    render(){
        return (<div>
            {this.props.num + 1}
        </div>)
    }
}

// PPa.PropTypes = {
//     num: PropTypes.number
// }

export default PPa;

ReactDOM.render(<App />,document.getElementById('root'));
