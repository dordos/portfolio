import styled from 'styled-components';

export const SkillsContent = styled.div`
  height: 100%;
`;

export const SkillLevel = styled.div`
  display: flex;
  justify-content: center;
  ul {
    padding: 0;
    margin: 0;
    width: 380px;
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
