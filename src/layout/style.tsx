import styled from 'styled-components';

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
  background-color: #24292e;
  /* border-bottom: 1px solid #191d20; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Source Sans Pro, sans-serif;
  height: 30px;
  font-size: 0.85rem;

  & #left {
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
  }

  & > p {
    flex: 1;
    text-align: center;
  }

  & #right {
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
  }
`;

//--------------------------------------------------------------
// Main
//--------------------------------------------------------------

export const Main = styled.div`
  display: flex;
  background-color: red;
  height: 100%;
`;

export const IconWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #262626;
  height: calc(100vh - 49px);
  width: 50px;
  img {
    width: 25px;
    height: 25px;
    padding: 10px 10px;
  }
`;

// -------------------------------------------------------------
// footer
//--------------------------------------------------------------
export const Footer = styled.div`
  background-color: #0065c9;
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
    color: #c5c5c5;
    img {
      margin-right: 5px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const MenuListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1c1c1d;
  width: 200px;
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: #c5c5c5;
  font-weight: 500;
  font-size: 15px;
  padding: 10px 10px 10px 10px;
`;

export const MiddleWrap = styled.div`
  margin-bottom: auto;
  img {
    width: 20px;
  }

  span {
    color: #e1e4e8;
    font-weight: 700;
  }
`;

export const ItemTile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-left: 5px;
  }
`;

export const BottomWrap = styled.div`
  align-items: flex-end;
  div {
    color: #c5c5c5;
    border-top: 1px solid black;
  }
`;
