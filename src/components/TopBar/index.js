import TopBarLeft from './components/TopBarLeft';
import TopBarRight from './components/TopBarRight';
import React from 'react';
import { TopBarContainer } from './style';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLeft />
      <TopBarRight />
    </TopBarContainer>
  );
};

export default React.memo(TopBar);
