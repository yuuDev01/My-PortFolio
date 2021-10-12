import React, { Component } from 'react';
import HeaderTemplate from './component/HeaderTemplate';
import IntroTemplate from './component/IntroTemplate';
import MyInfoTemplate from './component/MyInfoTemplate';
import SkillsTemplate from './component/SkillsTemplate';
import ProjectsTemplate from './component/project/ProjectsTemplate';
import ReactPageScroller from "react-page-scroller";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


class App extends Component {
  goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  render() {
    
    return (
      <div className="App">
        <ReactPageScroller>
        <HeaderTemplate>헤더</HeaderTemplate>
      <IntroTemplate>인트로</IntroTemplate>
      <MyInfoTemplate>내정보</MyInfoTemplate>
      <SkillsTemplate>보유기술</SkillsTemplate>
      <ProjectsTemplate>프로젝트목록</ProjectsTemplate>
        {/* <BrowserView>
        <HeaderTemplate>헤더</HeaderTemplate>
      <IntroTemplate>인트로</IntroTemplate>
      <MyInfoTemplate>내정보</MyInfoTemplate>
      <SkillsTemplate>보유기술</SkillsTemplate>
      <ProjectsTemplate>프로젝트목록</ProjectsTemplate>
        </BrowserView>
        
        <MobileView>
        <HeaderTemplate>헤더</HeaderTemplate>
      <IntroTemplate>인트로</IntroTemplate>
      <MyInfoTemplate>내정보</MyInfoTemplate>
      <SkillsTemplate>보유기술</SkillsTemplate>
      <ProjectsTemplate>프로젝트목록</ProjectsTemplate>
        </MobileView> */}
        </ReactPageScroller>
      </div>
  );
 }
}
export default App;
