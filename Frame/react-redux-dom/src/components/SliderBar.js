import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class SliderBar extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <nav className="nav nav-stacked">
                {
                    this.props.sliderBarData.map((slide,key)=>(
                        <li key={key}>
                            <Link to={slide.path}>
                                {slide.content}}
                            </Link>
                        </li>
                    ))
                }
            </nav>
        )
    }
}