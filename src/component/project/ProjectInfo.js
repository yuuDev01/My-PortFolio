import React, {Component} from 'react';
import './ProjectInfo.css';
import { Link } from 'react-router-dom';

class ProjectInfo extends Component {
  static defaultProps = {
   info :  {
      id : 1,
      project : 'FestaBot(페스타봇)',
      year : 2020,
      content : '사용자의 의도를 파악하여 축제 정보를 제공하는 챗봇',
      url : 'https://github.com/yuuDev01/festabot',
      img : 'img/prj1.JPG'
    }
  }
  render(){
    const { 
      id, project, year, content, url, img
    } = this.props.info;
  return(
    <div className="infoForm">
      <img src={img} />
      <div className="infoText">
        <div className="yearDiv">{year}</div>
        <div className="prjDiv">{project}</div>
        <div className="contetDiv">{content}</div>
        <div className="btnDiv">
          <button className="demoBtn"><a href={url}>Demo</a></button>
          <button className="urlBtn"><a href={url}>Git</a></button>
        </div>  
      </div>
    </div>
  );
  }
}

export default ProjectInfo;