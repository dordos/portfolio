import React from 'react';
import styled from 'styled-components';
import icoIcon from '../../icon/listIcon/favicon.svg';
import htmlIcon from '../../icon/listIcon/html_icon.svg';
import reactIcon from '../../icon/listIcon/react_icon.svg';
import jsIcon from '../../icon/listIcon/js_icon.svg';
import cssIcon from '../../icon/listIcon/css_icon.svg';
import gitIcon from '../../icon/listIcon/git_icon.svg';

import compareIcon from '../../icon/listIcon/git-compare.svg';
import splitIcon from '../../icon/listIcon/split-horizontal.svg';
import ellipsis from '../../icon/listIcon/ellipsis.svg';

const MainContainer = () => {
  return (
    <Container>
      <TabNav>
        <LeftWrap>
          <ul>
            <li>
              <img src={icoIcon} alt='' />
              <span>home.ico</span>
            </li>
            <li>
              <img src={htmlIcon} alt='' />
              <span>about.html</span>
            </li>
            <li>
              <img src={reactIcon} alt='' />
              <span>skills.jsx</span>
            </li>
            <li>
              <img src={jsIcon} alt='' />
              <span>project.js</span>
            </li>
            <li>
              <img src={cssIcon} alt='' />
              <span>contack.css</span>
            </li>
            <li>
              <img src={gitIcon} alt='' />
              <span>github</span>
            </li>
          </ul>
        </LeftWrap>
        <RightWrap>
          <img src={compareIcon} alt='' />
          <img src={splitIcon} alt='' />
          <img src={ellipsis} alt='' />
        </RightWrap>
      </TabNav>

      <MainContent>123</MainContent>
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
`;
const TabNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #262626;
  color: #e1e4e8;

  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    margin: 0px;
  }
  li {
    padding: 2px 20px;
    height: 30px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
    }
  }
`;

const LeftWrap = styled.div``;
const RightWrap = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 2px 5px;
    width: 20px;
  }
`;

const MainContent = styled.div`
  background-color: #171717;
  height: calc(100vh - 83px);
`;
