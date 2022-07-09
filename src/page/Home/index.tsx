import React from 'react';
import { HomeContent } from './style';
import { Typing } from 'typing-effect-reactjs';

const Home = () => {
  const text = ['I,m a Front-End Developer'];

  return (
    <HomeContent>
      <Typing text={text} typeSpeed={150} disableBlinkingOnEnd={100} DlinkingSpeed={0} />
    </HomeContent>
  );
};

export default Home;
