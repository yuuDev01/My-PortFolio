import React, {Component} from 'react';
import './ProjectInfo.css';
import img0 from '../../img/prj0.JPG';

class ProjectInfo extends Component {
  static defaultProps = {
   info :  {
      id : 1,
      project : 'FestaBot(페스타봇)',
      year : 2020,
      content : '사용자의 의도를 파악하여 축제 정보를 제공하는 챗봇',
      url : 'https://github.com/yuuDev01/festabot',
      demo : 'https://github.com/yuuDev01/whereGarden',
      img : img0
    }
  }
  render(){
    const { 
      id, project, year, content, url, demo, img
    } = this.props.info;
  return(
    <div className="infoForm">
      <img src={img} />
      <div className="infoText">
        <div className="yearDiv">{year}</div>
        <div className="prjDiv">{project}</div>
        <div className="contetDiv">{content}</div>
        <div className="btnDiv">
         <a href={demo} className="demoBtn" target="_blank">Demo</a>
         <a href={url} className="urlBtn" target="_blank">Git</a>
        </div>  
      </div>
    </div>
  );
  }
}

export default ProjectInfo;