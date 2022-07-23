import React from "react";
import { SkillsContent, SkillLevel, SkillsDescription } from "./style";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";
const Skills = () => {
  const [percentage, setPercentage] = useState(0);
  // const change_progressbar_input = (e) => {
  // setPercentage(100);
  // };
  return (
    <SkillsContent>
      <SkillsDescription>
        <h1>Skills & Experience</h1>
        <span>
          <p>
            Since beginning my journey as a freelance developer nearly 10 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create web products for both
            business and consumer use.
          </p>
          <p>
            I create successful responsive websites that are fast, easy to use,
            and built with best practices. The main area of my expertise is
            front-end development, HTML, CSS, JS, building small and medium web
            apps, custom plugins, features, animations, and coding interactive
            layouts.
          </p>
          <p>
            also have full-stack developer experience with popular open- source
            CMS like (WordPress, Drupal, Magento, Keystone.js and others). Visit
            my Linkedin profile for more details or just contact me.
          </p>
        </span>
      </SkillsDescription>
      <SkillLevel>
        <ul>
          <li>
            <span>HTML</span>
            <ProgressBar
              completed={100}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>CSS</span>
            <ProgressBar
              completed={100}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>JavaScript</span>
            <ProgressBar
              completed={80}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>React.js</span>
            <ProgressBar
              completed={70}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>TypeScript</span>
            <ProgressBar
              completed={40}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA7a"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>Sass</span>
            <ProgressBar
              completed={80}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>Styled-components</span>
            <ProgressBar
              completed={80}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA"}
              baseBgColor={"#373737"}
            />
          </li>
          <li>
            <span>AWS</span>
            <ProgressBar
              completed={20}
              height={"6px"}
              margin={"6px 0px"}
              isLabelVisible={false}
              transitionDuration={"1.3s"}
              transitionTimingFunction={"linear"}
              animateOnRender={true}
              bgColor={"#17AFCA7a"}
              baseBgColor={"#373737"}
            />
          </li>
        </ul>
      </SkillLevel>
    </SkillsContent>
  );
};

export default Skills;
