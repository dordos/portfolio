import React from 'react';
import './app.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SideBarIcon from './components/SideBar/SideBarIcon';
import styled from 'styled-components';
import SideBarList from './components/SideBar/SideBarList';
import FooterBar from './components/Footer/FooterBar';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <>
      <HeaderBar />

      <SideWrap>
        <SideBarIcon />
        <SideBarList />
        <MainContainer />
      </SideWrap>

      <FooterBar />
    </>
  );
}

export default App;

const SideWrap = styled.div`
  display: flex;
`;
