import React from 'react';
import styled from 'styled-components';
import homebg from '../img/home_bg2.jpg';

const Home = () => {
  return (
    <Main>
      <div>
        <p>I'm a Front-End</p>
        <p>Developer</p>
      </div>
    </Main>
  );
};

export default Home;

const Main = styled.div`
  height: calc(100vh - 83px);
  width: 100%;
  text-align: center;
  opacity: 0.8;
  background: url(${homebg}) center/cover no-repeat;
  div {
    padding-top: 20%;
    margin: auto;
    max-width: 600px;
  }
  p {
    color: #ffffff;
    font-size: 4rem;
    font-weight: 800;
    margin: 0px;
  }
`;
