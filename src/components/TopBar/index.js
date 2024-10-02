import TopBarLeft from './components/TopBarLeft';
import TopBarRight from './components/TopBarRight';
import React from 'react';
import S from './style';

const TopBar = () => {
  return (
    <S.TopBarContainer>
      <TopBarLeft />
      <TopBarRight />
    </S.TopBarContainer>
  );
};

export default React.memo(TopBar);
