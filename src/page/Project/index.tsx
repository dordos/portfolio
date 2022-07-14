import React from 'react';
import { ProjectContent, Projects, ProjectMenu } from './style';

const Project = () => {
  const projectImg1 = require('../../img/project1.png');

  return (
    <ProjectContent>
      <h1>Project</h1>
      <ProjectMenu>
        <li className='selectProject'>All</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
        <li>ETC</li>
      </ProjectMenu>

      <Projects>
        <div>
          <img src={projectImg1} alt='' />
        </div>
        <div>
          <img src={projectImg1} alt='' />
        </div>
        <div>
          <img src={projectImg1} alt='' />
        </div>
      </Projects>
    </ProjectContent>
  );
};

export default Project;
