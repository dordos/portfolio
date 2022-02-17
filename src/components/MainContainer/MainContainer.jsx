import React from 'react';
import styled from 'styled-components';

const MainContainer = () => {
  return (
    <Container>
      <MenuBar>
        <ul>
          <i className='codicon codicon-comment-discussion'></i>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </MenuBar>

      <MainContent>123</MainContent>
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  width: 100%;
  background-color: gold;
`;
const MenuBar = styled.div`
  background-color: #1c1c1d;
  ul {
    padding: 0px;
    list-style: none;
    display: flex;
    margin: 0px;
  }
`;

const MainContent = styled.div`
  background-color: #171717;
  height: 80%;
`;
