import React, {Component} from 'react';
import './ProjectInfo.css';
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
        <div>{year}</div>
        <div>{project}</div>
        <div>{content}</div>
        <div>{url}</div>
      </div>
    </div>
  );
  }
}

export default ProjectInfo;