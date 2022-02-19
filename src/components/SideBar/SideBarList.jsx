import React from 'react';
import styled from 'styled-components';
import ellipsis from '../../icon/listIcon/ellipsis.svg';
import chevronDown from '../../icon/listIcon/chevron-down.svg';
import chevronRight from '../../icon/listIcon/chevron-right.svg';
import icoIcon from '../../icon/listIcon/favicon.svg';
import htmlIcon from '../../icon/listIcon/html_icon.svg';
import cssIcon from '../../icon/listIcon/css_icon.svg';
import jsIcon from '../../icon/listIcon/js_icon.svg';
import reactIcon from '../../icon/listIcon/react_icon.svg';
import gitIcon from '../../icon/listIcon/git_icon.svg';

const MenuBarList = () => {
  return (
    <MenuBarListWarp>
      <TopWrap>
        <span>EXPLORER</span>
        <img src={ellipsis} alt='' />
      </TopWrap>

      <MiddleWrap>
        <div>
          <img src={chevronDown} alt='' />
          <span>PORTFOLIO</span>
        </div>
        <Items>
          <img src={icoIcon} alt='' />
          <span>home.ico</span>
        </Items>
        <Items>
          <img src={htmlIcon} alt='' />
          <span>about.html</span>
        </Items>
        <Items>
          <img src={reactIcon} alt='' />
          <span>skills.jsx</span>
        </Items>
        <Items>
          <img src={jsIcon} alt='' />
          <span>project.js</span>
        </Items>
        <Items>
          <img src={cssIcon} alt='' />
          <span>contack.css</span>
        </Items>
        <Items>
          <img src={gitIcon} alt='' />
          <span>github.ico</span>
        </Items>
      </MiddleWrap>

      <BottomWrap>
        <div>
          <img src={chevronRight} alt='' />
          <span>OUTLINE</span>
        </div>
        <div>
          <img src={chevronRight} alt='' />
          <span>TMELINE</span>
        </div>
      </BottomWrap>
    </MenuBarListWarp>
  );
};

export default MenuBarList;

const MenuBarListWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1c1c1d;
  width: 200px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: #c5c5c5;
  font-weight: 500;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
`;

const MiddleWrap = styled.div`
  margin-bottom: auto;
  div {
    padding-left: 10px;
  }

  span {
    color: #e1e4e8;
    font-weight: 700;
  }
  div:nth-child(1) {
    margin-bottom: 10px;
  }
`;

const Items = styled.div`
  display: flex;
  margin-left: 20px;
  padding: 4px 10px;
  img {
    margin-right: 5px;
    width: 20px;
  }
  span {
    font-weight: 500;
  }
`;

const BottomWrap = styled.div`
  align-items: flex-end;
  div {
    color: #c5c5c5;
    border-top: 1px solid black;
  }
`;
