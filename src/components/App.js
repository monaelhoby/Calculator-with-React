import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
import Button from './button';
import ButtonsArray from './ButtonsArray';
import Show from './show';

class App extends Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={
            result:[]
        }
    }
    handleChange(event){
        const value = event.target.getAttribute('value')
        var newResult
        if(value != "="){
          newResult = update(this.state.result , {$push: [value]}).join('')
          this.setState({result : [newResult]})
        }else {
          let operation = this.state.result.join('')
          operation = eval(operation)
          this.setState({
            result: [operation]
          })
        }
      }
    render(){
        return(
        <div className="container">
        <Show style={styles.show} data={this.state.result}/>
        <ButtonsArray buttonStyle={styles.button} handleChange={this.handleChange}
                               boxStyle={styles.box} resultSyle={styles.result}/>
       </div>
        )
    }
}
    export default App;

const styles= {
    show:{
        width: '400px',
        height: '100px',
        margin:'0 auto',
        background:'#888',
        color:'#FFF',
        boxShadow:'1px 1px 1px #BBB , -1px -1px 1px #BBB'
    },
    box:{
      width: '400px',
      height: '400px',
      margin:'0 auto 80px auto',
      boxShadow:'1px 1px 1px #BBB , -1px -1px 1px #BBB'
   },
   button:{
       width: '20%',
       height: '60px',
       margin: '20px 2%',
       float:'left',
       lineHeight:'60px',
       fontSize:'20px',
       boxShadow:'1px 1px 1px #BBB , -1px -1px 1px #BBB'
   },
    result: {
       width: '44%',
       height: '60px',
       margin: '20px 2%',
       float:'left',
       lineHeight:'60px',
       fontSize:'20px',
       boxShadow:'1px 1px 1px #BBB , -1px -1px 1px #BBB'
   }
  }
