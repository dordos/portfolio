import React from 'react';
import styled from 'styled-components';

import sourceControl from '../../icon/footerIcon/source-control.svg';
import sync from '../../icon/footerIcon/sync.svg';

const FooterBar = () => {
  return (
    <FooterBarWarp>
      <LeftWrap>
        <img src={sourceControl} alt='' />
        <span>main</span>
        <img src={sync} alt='' />
      </LeftWrap>

      <RightWrap>{/* <img src={files} alt='' /> */}</RightWrap>
    </FooterBarWarp>
  );
};

export default FooterBar;

const FooterBarWarp = styled.div`
  background-color: #0065c9;
  display: flex;
  justify-content: space-between;

  height: 20px;
  img {
    width: 15px;
    height: 15px;
    padding: 0px 10px;
  }
  span {
    font-size: 13px;
    color: #c5c5c5;
  }
`;
const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;
const RightWrap = styled.div`
  background-color: #0065c9;
`;

const MenuBarIconWarp = styled.div`
  img {
    width: 25px;
    height: 25px;
    padding: 10px 10px;
  }
`;

const TopWarp = styled.div``;

const BottomWarp = styled.div``;
