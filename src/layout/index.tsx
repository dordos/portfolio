import React from 'react';
import {
  Header,
  Container,
  Footer,
  Main,
  IconWarp,
  TopWrap,
  MiddleWrap,
  ItemTile,
  BottomWrap,
  MenuListWrap,
  // SideBarMenu,
} from './style';

// import menu from '../data/Menu';

const Layout = () => {
  // const menuList = menu.map((item: []) => {
  //   return item;
  // });
  return (
    <Container>
      <Header>
        <div id='left'>
          <img src='icon/headerIcon/vscode_icon.svg' alt='' />
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>

        <p>Peter Portfolio</p>

        <div id='right'>
          <span className='red'></span>
          <span className='yellow'></span>
          <span className='green'></span>
        </div>
      </Header>

      <Main>
        <IconWarp>
          <div>
            <img src='icon/sideIcon/files.svg' alt='' />
            <img src='icon/sideIcon/search.svg' alt='' />
            <img src='icon/sideIcon/source-control.svg' alt='' />
            <img src='icon/sideIcon/debug-alt.svg' alt='' />
            <img src='icon/sideIcon/extensions.svg' alt='' />
          </div>
          <div>
            <img src='icon/sideIcon/account.svg' alt='' />
            <img src='icon/sideIcon/settings-gear.svg' alt='' />
          </div>
        </IconWarp>

        <MenuListWrap>
          <TopWrap>
            <span>EXPLORER</span>
            <img src='icon/listIcon/ellipsis.svg' alt='' />
          </TopWrap>

          <MiddleWrap>
            <ItemTile>
              <img src='icon/listIcon/chevron-down.svg' alt='' />
              <img src='icon/listIcon/folder-src-open.svg' alt='' />
              <span>PORTFOLIO</span>
            </ItemTile>

            {/* <SideBarMenu menuList={menuList} /> */}
          </MiddleWrap>

          <BottomWrap>
            <div>
              <img src='icon/listIcon/chevron-right.svg' alt='' />
              <span>OUTLINE</span>
            </div>
            <div>
              <img src='icon/listIcon/chevron-right.svg' alt='' />
              <span>TMELINE</span>
            </div>
          </BottomWrap>
        </MenuListWrap>
      </Main>

      <Footer>
        <div>
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
        </div>

        <div>
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
        </div>
      </Footer>
    </Container>
  );
};

export default Layout;

// const SideBarMenu = (props: any) => {
//   const list: any = [];

//   props.menuList.map((item: any) => {
//     list.push(
//       <div>
//         <img src={item.icon} alt='' />
//         <span>{item.name}</span>
//       </div>,
//     );
//   });

//   // const SideBarMenu = styled.div`
//   //   display: flex;
//   //   padding: 4px 10px 4px 30px;
//   //   cursor: pointer;
//   //   img {
//   //     margin-right: 5px;
//   //     width: 20px;
//   //   }
//   //   :hover {
//   //     background-color: #2b292f;
//   //   }
//   //   span {
//   //     font-weight: 500;
//   //   }
//   // `;

//   return list;
// };
