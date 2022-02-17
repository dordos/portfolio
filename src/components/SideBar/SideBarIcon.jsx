import React from 'react';
import styled from 'styled-components';
import files from '../../icon/sideIcon/files.svg';
import search from '../../icon/sideIcon/search.svg';
import sourceControl from '../../icon/sideIcon/source-control.svg';
import debugAlt from '../../icon/sideIcon/debug-alt.svg';
import extensions from '../../icon/sideIcon/extensions.svg';

import account from '../../icon/sideIcon/account.svg';
import settingsGear from '../../icon/sideIcon/settings-gear.svg';

const MenuBarIcon = () => {
  return (
    <MenuBarIconWarp>
      <TopWarp>
        <img src={files} alt='' />
        <img src={search} alt='' />
        <img src={sourceControl} alt='' />
        <img src={debugAlt} alt='' />
        <img src={extensions} alt='' />
      </TopWarp>
      <BottomWarp>
        <img src={account} alt='' />
        <img src={settingsGear} alt='' />
      </BottomWarp>
    </MenuBarIconWarp>
  );
};

export default MenuBarIcon;

const MenuBarIconWarp = styled.div`
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

const TopWarp = styled.div``;

const BottomWarp = styled.div``;
