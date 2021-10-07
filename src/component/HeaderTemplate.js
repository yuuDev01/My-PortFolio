import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './HeaderTemplate.css';
import { useScrollFadeIn } from '../hooks'

const HeaderTemplate  = ({typingEffect}) =>{
  const animatedItem = useScrollFadeIn();

  return (
  <div className="form-wrapper" {...animatedItem} >
    {/* <ReactTypingEffect
        text={["Hello, World!"]}
      /> */}
      <ReactTypingEffect
        text={["ddd"]} 
      />
  </div>
  );
}  


export default HeaderTemplate;

