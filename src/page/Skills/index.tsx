import React from 'react';
import { SkillsContent, SkillLevel } from './style';
import ProgressBar from '@ramonak/react-progress-bar';
import { useState } from 'react';
const Skills = () => {
  const [percentage, setPercentage] = useState(0);
  // const change_progressbar_input = (e) => {
  // setPercentage(100);
  // };
  return (
    <SkillsContent>
      <SkillLevel>
        <ul>
          <li>
            <span>HTML</span>
            <ProgressBar
              completed={100}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>CSS</span>
            <ProgressBar
              completed={100}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>JavaScript</span>
            <ProgressBar
              completed={80}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>React.js</span>
            <ProgressBar
              completed={70}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>TypeScript</span>
            <ProgressBar
              completed={40}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA7a'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>Sass</span>
            <ProgressBar
              completed={80}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>Styled-component</span>
            <ProgressBar
              completed={80}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA'}
              baseBgColor={'#373737'}
            />
          </li>
          <li>
            <span>AWS</span>
            <ProgressBar
              completed={20}
              height={'6px'}
              margin={'6px 0px'}
              isLabelVisible={false}
              transitionDuration={'1.3s'}
              transitionTimingFunction={'linear'}
              animateOnRender={true}
              bgColor={'#17AFCA7a'}
              baseBgColor={'#373737'}
            />
          </li>
        </ul>
      </SkillLevel>
    </SkillsContent>
  );
};

export default Skills;
