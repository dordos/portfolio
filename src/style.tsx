import styled from "styled-components";

//--------------------------------------------------------------
// Container
//--------------------------------------------------------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

//--------------------------------------------------------------
// Header
//--------------------------------------------------------------

export const Header = styled.div`
  background-color: #181818;
  /* background-color: #24292e; */
  /* border-bottom: 1px solid #2d2d2e; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fbfbfb;
  font-family: Source Sans Pro, sans-serif;
  height: 30px;
  font-size: 0.85rem;

  & #left {
    display: flex;
    margin-left: 0.5rem;
    align-items: center;

    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin: 0px 0.3rem;
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
  }

  & > p {
    flex: 1;
    text-align: center;
  }

  @media screen and (max-width: 1300px) {
    height: 60px;
  }
`;

export const TopMenu = styled.div`
  cursor: pointer;
  margin-right: 0.5rem;
`;
//--------------------------------------------------------------
// Main
//--------------------------------------------------------------

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1c1c1d;
  border-right: 1px solid #2d2d2e;
  height: calc(100vh - 49px);
  width: 50px;
  height: 100%;
  img {
    width: 25px;
    height: 25px;
    padding: 10px 10px;
  }

  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const MenuListWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: space-between;
  background-color: #1c1c1d;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7a7a7a;
  font-weight: 500;
  font-size: 12px;
  padding: 10px 10px 10px 10px;
`;

export const MiddleWrap = styled.div`
  margin-bottom: auto;
  img {
    width: 20px;
  }

  span {
    color: #fbfbfb;
    font-weight: 700;
  }
`;

export const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;

    align-items: center;
    width: 180px;
    padding: 10px 0px 10px 50px;
    a {
      cursor: pointer;

      display: flex;
      align-items: center;
      text-decoration: none;
    }
    img {
      margin-right: 5px;
      width: 20px;
    }

    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  li:hover {
    background-color: #262628;
  }
  li.selectBg {
    background-color: #262628;
  }
`;

export const ItemTile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-left: 5px;
    color: #7a7a7a;
  }
`;

export const BottomWrap = styled.div`
  align-items: flex-end;
  font-size: 12px;
  div {
    display: flex;
    padding: 3px 1px;
    align-items: center;
    color: #7a7a7a;
    border-top: 1px solid #2d2d2e;
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: #262628;
`;

// -------------------------------------------------------------
// footer
//--------------------------------------------------------------
export const Footer = styled.div`
  background-color: #181818;
  display: flex;
  justify-content: space-between;
  height: 20px;
  padding: 0px 15px;
  img {
    width: 15px;
    height: 15px;
  }
  .footerItem {
    display: flex;
    padding: 0px 8px;
    font-size: 13px;
    color: #525252;
    img {
      margin-right: 5px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }
`;
