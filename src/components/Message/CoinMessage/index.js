import React, { useState, useEffect, useRef } from 'react';
import S from './style';
import { HStack } from '../../../styles/Stack.styles';

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
    <HStack
      styled={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        transition: 'all 1s ease-in-out',
      }}
    >
      <S.CurrentCoin isVisible={isVisible}>{coin}코인 </S.CurrentCoin>
      <S.EarnedCoin
        ref={plusCoinSpanRef}
        isVisible={isVisible}
        width={isVisible ? plusCoinSpanRef.current?.offsetWidth : 0}
      >
        +{obtainCoin}
      </S.EarnedCoin>
    </HStack>
  );
};

export default CoinComponent;
