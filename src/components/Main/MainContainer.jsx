import React from 'react';
import styled from 'styled-components';
import Home from '../../page/Home.jsx';
import About from '../../page/About.jsx';
import { useState } from 'react/cjs/react.production.min';
// import Skills from '../../page/Skills.jsx';
// import project from '../../page/project.jsx';
// import Contact from '../../page/Contact.jsx';
// import Git from '../../page/Git.jsx';

const Main = () => {
  const [nav, setnav] = useState([]);

  return (
    <MainContainer>
      <SideContainer>
        <IconWarp>
          <div>
            <img src='icon/sideIcon/files.svg' alt='' />
            <img src='icon/sideIcon/search.svg' alt='' />
            <img src='icon/sideIcon/source-control.svg' alt='' />
            <img src='icon/sideIcon/debug-alt.svg' alt='' />
            <img src='icon/sideIcon/extensions.svg' alt='' />
          </div>
          <div>
            <img src='icon/sideIcon/account.svg' alt='' />
            <img src='icon/sideIcon/settings-gear.svg' alt='' />
          </div>
        </IconWarp>
        <MenuBarListWarp>
          <TopWrap>
            <span>EXPLORER</span>
            <img src='icon/listIcon/ellipsis.svg' alt='' />
          </TopWrap>

          <MiddleWrap>
            <ItemTile>
              <img src='icon/listIcon/chevron-down.svg' alt='' />
              <img src='icon/listIcon/folder-src-open.svg' alt='' />
              <span>PORTFOLIO</span>
            </ItemTile>
            <Items>
              <img src='icon/listIcon/favicon.svg' alt='' />
              <span>home.ico</span>
            </Items>
            <Items>
              <img src='icon/listIcon/html_icon.svg' alt='' />
              <span>about.html</span>
            </Items>
            <Items>
              <img src='icon/listIcon/react_icon.svg' alt='' />
              <span>skills.jsx</span>
            </Items>
            <Items>
              <img src='icon/listIcon/js_icon.svg' alt='' />
              <span>project.js</span>
            </Items>
            <Items>
              <img src='icon/listIcon/css_icon.svg' alt='' />
              <span>contact.css</span>
            </Items>
            <Items>
              <img src='icon/listIcon/git_icon.svg' alt='' />
              <span>github.ico</span>
            </Items>
          </MiddleWrap>

          <BottomWrap>
            <div>
              <img src='icon/listIcon/chevron-right.svg' alt='' />
              <span>OUTLINE</span>
            </div>
            <div>
              <img src='icon/listIcon/chevron-right.svg' alt='' />
              <span>TMELINE</span>
            </div>
          </BottomWrap>
        </MenuBarListWarp>
      </SideContainer>

      <ContentContainer>
        <Menubar>
          <ul>
            {/* <li>
              <img src='icon/listIcon/favicon.svg' alt='' />
              <span>home.ico</span>
            </li>
            <li>
              <img src='icon/listIcon/html_icon.svg' alt='' />
              <span>about.html</span>
            </li>
            <li>
              <img src='icon/listIcon/react_icon.svg' alt='' />
              <span>skills.jsx</span>
            </li>
            <li>
              <img src='icon/listIcon/js_icon.svg' alt='' />
              <span>project.js</span>
            </li>
            <li>
              <img src='icon/listIcon/css_icon.svg' alt='' />
              <span>contact.css</span>
            </li>
            <li>
              <img src='icon/listIcon/git_icon.svg' alt='' />
              <span>github</span>
            </li> */}
          </ul>
          <div className='rightTabNav'>
            <img src='icon/listIcon/git-compare.svg' alt='' />
            <img src='icon/listIcon/split-horizontal.svg' alt='' />
            <img src='icon/listIcon/ellipsis.svg' alt='' />
          </div>
        </Menubar>

        <About />
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
`;

const SideContainer = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const IconWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #262626;
  height: calc(100vh - 49px);
  width: 50px;
  img {
    width: 25px;
    height: 25px;
    padding: 10px 10px;
  }
`;

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
  img {
    width: 20px;
  }

  span {
    color: #e1e4e8;
    font-weight: 700;
  }
`;

const ItemTile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-left: 5px;
  }
`;

const Items = styled.div`
  display: flex;
  padding: 4px 10px 4px 30px;
  cursor: pointer;
  img {
    margin-right: 5px;
    width: 20px;
  }
  :hover {
    background-color: #2b292f;
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

const ContentContainer = styled.div`
  width: 100%;
`;
const Menubar = styled.div`
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
    cursor: pointer;
    padding: 2px 20px;
    height: 30px;
    display: flex;
    align-items: center;
    img {
      width: 20px;
    }
  }
  li:hover {
    background-color: #1c1c1d;
  }

  .rightTabNav {
    display: flex;
    justify-content: center;
    img {
      padding: 2px 5px;
      width: 20px;
    }
  }
`;
