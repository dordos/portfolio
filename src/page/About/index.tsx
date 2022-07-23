import React from "react";
import { AboutContent, AboutDescription, AboutPicture } from "./style";

const About = () => {
  const peopleImg = require("../../img/people1.jpg");
  return (
    <AboutContent>
      <AboutDescription>
        <h1>My, Myself</h1>
        <span>
          <p>
            My name is Hashir Shoaib. I’m a graduate of 2020 from National
            University of Sciences and Technology at Islamabad with a degree in
            Computer Engineering. I'm most passionate about giving back to the
            community, and my goal is to pursue this passion within the field of
            software engineering. In my free time I like working on open source
            projects.
          </p>
        </span>
      </AboutDescription>
      <AboutPicture>
        <img src={peopleImg} alt="" />
      </AboutPicture>
    </AboutContent>
  );
};

export default About;
