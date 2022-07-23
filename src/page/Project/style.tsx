import styled from "styled-components";

export const ProjectContent = styled.div`
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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Items = styled.div`
  cursor: pointer;
  position: relative;
  border: 1px solid white;

  & a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 250px;
    margin: 2px;
    background-color: #eeffff;
  }

  & img {
    width: 100%;
    align-self: center;
  }

  & .item__description {
    background-color: black;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    transform: translateY(10px);
    transition: all 300ms ease-in;
  }

  &:hover .item__description {
    opacity: 0.8;
    transform: translateY(0px);
  }

  & .item__description span {
    text-align: center;
  }

  & .item__description h3 {
    color: orange;
    text-align: center;
  }
  & .item__description h3:after {
    content: "";
    display: block;
    position: relative;
    left: 50%;
    width: 50px;
    height: 2px;
    transform: translate(-50%);
    margin-top: 8px;
    background-color: #eeffff;
  }
`;
