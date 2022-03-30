import React from 'react';
import styled from 'styled-components';

const FooterBar = () => {
  return (
    <FooterBarWarp>
      <LeftWrap>
        <div className='footerItem'>
          <img src='icon/footerIcon/source-control.svg' alt='' />
          <span>main＊</span>
        </div>
        <div className='footerItem'>
          <img src='icon/footerIcon/sync.svg' alt='' />
        </div>
        <div className='footerItem'>
          <img src='icon/footerIcon/error.svg' alt='' />
          <span>0</span>
        </div>
        <div className='footerItem'>
          <img src='icon/footerIcon/warning.svg' alt='' />
          <span>0</span>
        </div>
      </LeftWrap>

      <RightWrap>
        <div className='footerItem'>
          <span>Ln&nbsp;371, Col&nbsp;13</span>
        </div>

        <div className='footerItem'>
          <span>Spaces: 2</span>
        </div>

        <div className='footerItem'>
          <span>UTF - 8</span>
        </div>

        <div className='footerItem'>
          <span>LF</span>
        </div>

        <div className='footerItem'>
          <img src='icon/footerIcon/symbol-namespace.svg' alt='' />
        </div>

        <div className='footerItem'>
          <span>JavaScript React</span>
        </div>

        <div className='footerItem'>
          <img src='icon/footerIcon/broadcast.svg' alt='' />
          <span>Go Live</span>
        </div>

        <div className='footerItem'>
          <img src='icon/footerIcon/check.svg' alt='' />
          <span>Prettier</span>
        </div>

        <img src='icon/footerIcon/bell.svg' alt='' />
      </RightWrap>
    </FooterBarWarp>
  );
};

export default FooterBar;

const FooterBarWarp = styled.div`
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
`;
const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;
const RightWrap = styled.div`
  display: flex;
  align-items: center;
`;
