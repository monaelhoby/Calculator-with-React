import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const Button = (({style , clicking , value , text})=>
    <div style={style} onClick={clicking} value={value} >{text}</div>

)
export default Button;
