import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import ScrollHorizontal from 'react-scroll-horizontal';

class ProjectInfoList extends Component {
  static defaultProps = {
    data: []
  }

  render() {
    const { data } = this.props;
    const list = data.map(
      info => (<ProjectInfo key={info.id} info={info}/>)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default ProjectInfoList;