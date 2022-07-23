import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  h1 {
    font-size: 30px;
  }

  p {
  }
`;

export const ContactDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & button {
    width: 200px;
    height: 80px;
    background-color: #1c1c1d;
    border: 0;
    cursor: pointer;
    font-size: 32px;
    color: #eeffff;
  }
`;

export const ContactInputs = styled.div`
  & input {
    width: 300px;
    height: 50px;
    font-size: 20px;
    font-width: 800;
    border: 0;
    background-color: #1c1c1d;
    outline: none;
    caret-color: #eeffff;
    color: #eeffff;
  }
`;

export const InputFirst = styled.div`
  & input {
    margin: 5px;
  }
`;

export const InputSecond = styled.div`
  & input {
    width: 614px;
    margin: 5px;
  }
`;

export const InputThird = styled.div`
  & textarea {
    font-family: sans-serif;
    color: #eeffff;
    width: 614px;
    height: 250px;
    margin: 5px;
    font-size: 20px;
    font-width: 800;
    border: 0;
    background-color: #1c1c1d;
    outline: none;
    resize: none;
    caret-color: #eeffff;
  }
`;

export const ContactSocials = styled.div`
  width: 50%;
  h1 {
    font-size: 46px;
  }
  span,
  a {
    font-size: 32px;
  }
`;
