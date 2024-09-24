import React, { useState, useEffect, useRef } from 'react';
import S from './style';

const CoinComponent = ({ userCoin, obtainCoin, triggerAnimation }) => {
  const [coin, setCoin] = useState(userCoin);
  const [isVisible, setIsVisible] = useState(true);
  const plusCoinSpanRef = useRef();

  useEffect(() => {
    if (triggerAnimation) {
      const fadeOutTimeout = setTimeout(() => {
        setIsVisible(false);
        setCoin(userCoin + obtainCoin);
      }, 2000);

      return () => {
        clearTimeout(fadeOutTimeout);
      };
    }
  }, [triggerAnimation]);

  return (
    <S.CoinContainer>
      <S.CoinSpan isVisible={isVisible}>{coin}코인 </S.CoinSpan>
      <S.PlusCoinSpan
        ref={plusCoinSpanRef}
        isVisible={isVisible}
        width={isVisible ? plusCoinSpanRef.current?.offsetWidth : 0}
      >
        +{obtainCoin}
      </S.PlusCoinSpan>
    </S.CoinContainer>
  );
};

export default CoinComponent;
