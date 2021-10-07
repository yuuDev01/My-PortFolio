import React from 'react';
import './IntroTemplate.css';
import Fade from 'react-fade-in'
import { useScrollFadeIn } from '../hooks'

const IntroTemplate  = () =>{
  const animatedItem = useScrollFadeIn();

  return (
    <Fade bottom>
  <div className="Intro" >
  Developer <br /> 
  Park Yun Ju
  </div>
  </Fade>
  );
}  

export default IntroTemplate;