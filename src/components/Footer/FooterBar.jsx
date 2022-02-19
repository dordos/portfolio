import React from 'react';
import styled from 'styled-components';

import sourceControl from '../../icon/footerIcon/source-control.svg';
import sync from '../../icon/footerIcon/sync.svg';
import error from '../../icon/footerIcon/error.svg';
import warning from '../../icon/footerIcon/warning.svg';
import nameSpace from '../../icon/footerIcon/symbol-namespace.svg';
import broadcast from '../../icon/footerIcon/broadcast.svg';
import check from '../../icon/footerIcon/check.svg';
import bell from '../../icon/footerIcon/bell.svg';

const FooterBar = () => {
  return (
    <FooterBarWarp>
      <LeftWrap>
        <div className='footerItem'>
          <img src={sourceControl} alt='' />
          <span>main＊</span>
        </div>
        <div className='footerItem'>
          <img src={sync} alt='' />
        </div>
        <div className='footerItem'>
          <img src={error} alt='' />
          <span>0</span>
        </div>
        <div className='footerItem'>
          <img src={warning} alt='' />
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
          <img src={nameSpace} alt='' />
        </div>

        <div className='footerItem'>
          <span>JavaScript React</span>
        </div>

        <div className='footerItem'>
          <img src={broadcast} alt='' />
          <span>Go Live</span>
        </div>

        <div className='footerItem'>
          <img src={check} alt='' />
          <span>Prettier</span>
        </div>

        <img src={bell} alt='' />
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
