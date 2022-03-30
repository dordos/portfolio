import React from 'react';
import styled from 'styled-components';
import HeaderBar from './components/HeaderBar/HeaderBar';
import FooterBar from './components/Footer/FooterBar';
import MainContainer from './components/Main/MainContainer';

function App() {
  return (
    <Wrap>
      <HeaderBar />
      <MainContainer />
      <FooterBar />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
