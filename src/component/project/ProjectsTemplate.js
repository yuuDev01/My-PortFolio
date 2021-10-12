import React, {Component} from 'react';
import './ProjectsTemplate.css';
import ProjectInfoList from './ProjectInfoList'; 
import img0 from '../../img/prj0.JPG';
import img1 from '../../img/prj1.JPG';
import img2 from '../../img/prj2.JPG';
import { useScrollFadeIn } from '../../hooks'
import Fade from 'react-fade-in/lib/FadeIn';

class ProjectsTemplate extends Component {
  id = 2
  state = {
  information : [
    {
      id : 0,
      project : '어딜,가든',
      year : 2021,
      content : '사용자 맞춤형 반려식물정보 제공 웹사이트',
      url : 'https://github.com/yuuDev01/whereGarden',
      demo : 'https://youtube.com/watch?v=_3VRJLx96j0&feature=share',
      img : img2
    },
    {
      id : 1,
      project : 'FestaBot(페스타봇)',
      year : 2020,
      content : '사용자의 의도를 파악하여 축제 정보를 제공하는 챗봇',
      url : 'https://github.com/yuuDev01/festabot',
      demo : 'https://www.youtube.com/watch?v=GHfe_htA4ic',
      img : img1
    },
    {
      id : 2,
      project : '울산 Together',
      year : 2019,
      content : '안드로이드 기반 울산 지역내 운동 매칭 어플',
      url : 'https://github.com/yuuDev01/UlsanAthelticMatching',
      demo : 'https://github.com/yuuDev01/UlsanAthelticMatching/blob/master/%EA%B5%AC%EB%8F%99%20%EC%98%81%EC%83%81.avi',
      img : img0
    }
  ]
}
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  render() {
    return (
      <div className="projects">
        <div className="prj_title">Project</div>
        <Fade bottom>
        <ProjectInfoList data={this.state.information}/></Fade>
      </div>
    );
  }
}

export default ProjectsTemplate;