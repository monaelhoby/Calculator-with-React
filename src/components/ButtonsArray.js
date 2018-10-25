
import React, { Component } from 'react';
import Button from './button';


const ButtonsArray =(({buttonStyle , handleChange , resultSyle ,boxStyle}) =>
<div style={boxStyle} className="box text-center">
  <Button style={buttonStyle} clicking={handleChange} value="1" text="1"/>
  <Button style={buttonStyle} clicking={handleChange} value="2" text="2"/>
  <Button style={buttonStyle} clicking={handleChange} value="3" text="3"/>
  <Button style={buttonStyle} clicking={handleChange} className="add" value="+" text="+"/>
  <Button style={buttonStyle} clicking={handleChange} value="4" text="4"/>
  <Button style={buttonStyle} clicking={handleChange} value="5" text="5"/>
  <Button style={buttonStyle} clicking={handleChange} value="6" text="6"/>
  <Button style={buttonStyle} clicking={handleChange} className="substitute" value="-" text="-"/>
  <Button style={buttonStyle} clicking={handleChange} value="7" text="7"/>
  <Button style={buttonStyle} clicking={handleChange} value="8" text="8"/>
  <Button style={buttonStyle} clicking={handleChange} value="9" text="9"/>
  <Button style={buttonStyle} clicking={handleChange} className="dividor" value="/" text="/"/>
  <Button style={buttonStyle} clicking={handleChange} value="0" text="0"/>
  <Button style={resultSyle} clicking={handleChange} className="result" value="=" text="="/>
  <Button style={buttonStyle} clicking={handleChange} className="multiply" value="*" text="*"/>
</div>
);

export default ButtonsArray;
