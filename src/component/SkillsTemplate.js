import React from 'react';
import './SkillsTemplate.css';
const SkillsTemplate  = () =>{
  return (
  <div className="skill">
  Skill
  <div className="FrontEnd">
    <div className="title">Front-End</div>
  <div className="content">Node-Js JavaScript HTML React-js Css</div>
  </div>
  <div className="BackEnd">
    <div  className="title">Back-End</div>
  <div className="content">Java Python Spring</div>
  </div>
  </div>
  );
}  

export default SkillsTemplate;