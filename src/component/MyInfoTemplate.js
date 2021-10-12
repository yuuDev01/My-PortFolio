import React from 'react';
import gitLog from '../img/GitHub64.png';
import './MyInfoTemplate.css';
const MyInfoTemplate  = () =>{
  return (
  <div className="myInfo">
    <div className="title">
      안녕하세요! &nbsp;
      <span>거북이</span>  
      개발자 박윤주 입니다.
    </div>
    <div className="content">
      한걸음, 한걸음 느리지만 끈기와 부지런함을 가지고 개발자로서 성장해나가는 초보 개발자입니다.'
    </div>
    <div className="contact">
      <div><a href="https://github.com/yuuDev01"><img src={gitLog}></img></a></div>
      <div>pasenoaz@gmail.com</div>
      <div></div>
    </div>
  </div>
  );
}  

export default MyInfoTemplate;