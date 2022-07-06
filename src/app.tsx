import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
// import Header from './layout/Header';

// const Header = require('./layout/Header');
// import styled from 'styled-components';
// import HeaderBar from './components/HeaderBar/HeaderBar';
// import FooterBar from './components/Footer/FooterBar';
// import MainContainer from './components/Main/MainContainer';

const App = () => {
  return (
    <>
      <Layout></Layout>
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element='/home'>
    //       <Header></Header>
    //     </Route>
    //   </Routes>
    //   {/* <HeaderBar /> */}
    //   {/* <MainContainer /> */}
    //   {/* <FooterBar /> */}
    // </BrowserRouter>
  );
};

export default App;
