import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Button extends Component{
    render(){
        return(
            <div style={this.props.style} onClick={this.props.onClick} value={this.props.value} >{this.props.text}</div>
        )
    }
}
export default Button;