import React, { MouseEventHandler } from "react";
import { ProjectContent, Projects, ProjectMenu, Items } from "./style";

const Project = () => {
  const projectImg1 = require("../../img/project1.png");
  const dd = (e: any) => {
    console.dir(e.target);
  };

  return (
    <ProjectContent>
      <h1>Project</h1>
      <ProjectMenu onClick={dd}>
        <li className="selectProject">All</li>
        <li>JS</li>
        <li>TS</li>
        <li>React</li>
        <li>ETC</li>
      </ProjectMenu>

      <Projects>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>Youtube Site</h3>
              <span>Clone coding with HTML and CSS</span>
            </div>
          </a>
        </Items>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>item</h3>
              <span>dddd</span>
            </div>
          </a>
        </Items>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>item</h3>
              <span>dddd</span>
            </div>
          </a>
        </Items>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>item</h3>
              <span>dddd</span>
            </div>
          </a>
        </Items>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>item</h3>
              <span>dddd</span>
            </div>
          </a>
        </Items>
        <Items>
          <a href="#">
            <img src={projectImg1} alt="" />
            <div className="item__description">
              <h3>item</h3>
              <span>dddd</span>
            </div>
          </a>
        </Items>
      </Projects>
    </ProjectContent>
  );
};

export default Project;
