import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './HeaderTemplate.css';
const HeaderTemplate  = ({typingEffect}) =>{
  return (
  <div className="form-wrapper">
    <ReactTypingEffect
        text={["Hello, World!"]}
      />
  </div>
  );
}  


export default HeaderTemplate;

