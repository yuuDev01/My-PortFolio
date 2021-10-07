import React, { Component } from 'react';
import HeaderTemplate from './component/HeaderTemplate';
import IntroTemplate from './component/IntroTemplate';
import MyInfoTemplate from './component/MyInfoTemplate';
import SkillsTemplate from './component/SkillsTemplate';
import ProjectsTemplate from './component/project/ProjectsTemplate';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderTemplate>헤더</HeaderTemplate>
      <IntroTemplate>인트로</IntroTemplate>
      <MyInfoTemplate>내정보</MyInfoTemplate>
      <SkillsTemplate>보유기술</SkillsTemplate>
      <ProjectsTemplate>프로젝트목록</ProjectsTemplate>
      </div>
  );
 }
}
export default App;