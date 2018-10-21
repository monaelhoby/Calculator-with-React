import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';
import Button from './button';
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
        <div style={styles.box} className="box text-center">
          <Button style={styles.button} onClick={this.handleChange} value="1" text="1"/>
          <Button style={styles.button} onClick={this.handleChange} value="2" text="2"/>
          <Button style={styles.button} onClick={this.handleChange} value="3" text="3"/>
          <Button style={styles.button} onClick={this.handleChange} className="add" value="+" text="+"/>
          <Button style={styles.button} onClick={this.handleChange} value="4" text="4"/>
          <Button style={styles.button} onClick={this.handleChange} value="5" text="5"/>
          <Button style={styles.button} onClick={this.handleChange} value="6" text="6"/>
          <Button style={styles.button} onClick={this.handleChange} className="substitute" value="-" text="-"/>
          <Button style={styles.button} onClick={this.handleChange} value="7" text="7"/>
          <Button style={styles.button} onClick={this.handleChange} value="8" text="8"/>
          <Button style={styles.button} onClick={this.handleChange} value="9" text="9"/>
          <Button style={styles.button} onClick={this.handleChange} className="dividor" value="/" text="/"/>
          <Button style={styles.button} onClick={this.handleChange} value="0" text="0"/>
          <Button style={styles.result } onClick={this.handleChange} className="result" value="=" text="="/>
          <Button style={styles.button} onClick={this.handleChange} className="multiply" value="*" text="*"/>
        </div>
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
