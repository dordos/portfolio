import styled from "styled-components";

export const SkillsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SkillsDescription = styled.div`
  width: 50%;
  //background-color: red;
  & h1 {
    color: #17afca;
    font-size: 72px;
  }
  p {
    color: #eeffff;
    font-size: 18px;
  }
  br {
    margin: 20px 0px;
  }
`;

export const SkillLevel = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  //background-color: blue;
  ul {
    padding: 0;
    margin: 0;
    width: 520px;
    height: 500px;
    li {
      list-style: none;
      margin: 20px 0px;
      span {
        font-size: 16px;
        font-weight: 700;
        color: #ffff;
      }
    }
  }
`;
