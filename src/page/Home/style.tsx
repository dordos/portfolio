import styled from 'styled-components';

const homebg = require('../../img/home_bg2.jpg');

export const HomeContent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  /* opacity: 0.8; */
  /* background: url(${homebg}) center/cover no-repeat; */
  background: #262626;
  h4 {
    padding-top: 20%;
    margin: auto;
    max-width: 600px;
  }
  span {
    color: #ffffff;
    font-size: 4rem;
    font-weight: 800;
    margin: 0px;
  }
`;
