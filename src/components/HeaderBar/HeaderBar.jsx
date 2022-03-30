import React from 'react';
import styled from 'styled-components';

const HeaderBar = () => {
  return (
    <HeaderBarWarp>
      <LeftText>
        <img src='icon/headerIcon/vscode_icon.svg' alt='' />
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </LeftText>

      <CenterText>Peter Portfolio</CenterText>

      <RightText>
        <span className='red'></span>
        <span className='yellow'></span>
        <span className='green'></span>
      </RightText>
    </HeaderBarWarp>
  );
};

export default HeaderBar;

const HeaderBarWarp = styled.div`
  background-color: #24292e;
  /* border-bottom: 1px solid #191d20; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Source Sans Pro, sans-serif;
  height: 30px;
  font-size: 0.85rem;
`;

const LeftText = styled.div`
  display: flex;
  flex: 1;
  /* background-color: blue; */
  margin-left: 0.5rem;
  align-items: center;
  img {
    width: 20px;
    margin-right: 0.5rem;
  }
  span {
    padding: 0px 0.5rem;
  }
`;

const CenterText = styled.div`
  flex: 1;
  text-align: center;
  /* background-color: red; */
`;

const RightText = styled.div`
  display: flex;
  flex: 1;
  /* background-color: black; */
  justify-content: flex-end;
  padding-right: 5px;
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0px 0.5rem;
  }
  span.red {
    background-color: #c53c3c;
  }
  span.yellow {
    background-color: #f5c237;
  }
  span.green {
    background-color: #369636;
  }
`;
