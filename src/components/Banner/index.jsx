import React from 'react';
import S from './style';

const Banner = ({ text }) => {
  return (
    <S.BannerContainer>
      <S.BannerContent>{text}</S.BannerContent>
    </S.BannerContainer>
  );
};

export default Banner;
