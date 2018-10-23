import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Show extends Component {

  render(){
    const string = this.props.data.join(' ')
    return (
      <div style={this.props.style}>{string}</div>
    )
  }

}

export default Show;
