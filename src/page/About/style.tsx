import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AboutDescription = styled.div`
  width: 50%;
`;

export const AboutPicture = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  img {
    border-radius: 50%;
    border: 3px solid black;
  }
`;
