import React from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import SideBarIcon from './components/SideBar/SideBarIcon';
import styled from 'styled-components';
import SideBarList from './components/SideBar/SideBarList';
import FooterBar from './components/Footer/FooterBar';
import Main from './components/Main/Main';

function App() {
  return (
    <Container>
      <HeaderBar />

      <SideWrap>
        <SideBarIcon />
        <SideBarList />
        <Main />
      </SideWrap>

      <FooterBar />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideWrap = styled.div`
  display: flex;
`;
