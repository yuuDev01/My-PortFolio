import React from 'react';
import './MyInfoTemplate.css';
const MyInfoTemplate  = () =>{
  return (
  <div className="myInfo">
    <div className="title">
      안녕하세요!
      <span>거북이 개발자</span>  
      박윤주 입니다.
    </div>
    <div className="content">
      한걸음, 한걸음 느리지만 끈기와 부지런함을 가지고 개발자로서 성장해나가는 초보 개발자입니다.'
    </div>
    <div className="contact">
      <div><a href="#">Github</a></div>
      <div>pasenoaz@gmail.com</div>
      <div></div>
    </div>
  </div>
  );
}  

export default MyInfoTemplate;