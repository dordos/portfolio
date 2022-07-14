import styled from 'styled-components';

export const ProjectContent = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  width: 100%;
  height: 100%;

  h1 {
    text-align: center;
    width: 600px;
    margin: auto;
    background-color: beige;
    padding: 0;
  }
`;

export const ProjectMenu = styled.ul`
  color: #ffff;
  display: flex;
  justify-content: center;
  li {
    width: 150px;
    text-align: center;
    font-weight: 700;
    border: 1px solid #fff;
    list-style: none;
    cursor: pointer;
    &:hover {
    }
  }
  li:hover {
    background-color: #17afca;
  }
  li.selectProject {
    background-color: #17afca;
  }
`;

export const Projects = styled.div`
  /* width: 100%; */
  /* height: 100%; */

  background-color: blue;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    background-color: red;

    width: 300px;
    /* height: 300px; */
  }
`;
