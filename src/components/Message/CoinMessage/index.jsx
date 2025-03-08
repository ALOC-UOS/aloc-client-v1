import React, { useState, useEffect, useRef } from 'react';
import S from './style';
import { HStack } from '../../common/Stack';

const CoinComponent = ({ userCoin, obtainCoin, triggerAnimation }) => {
  const [coin, setCoin] = useState(userCoin);
  const [isVisible, setIsVisible] = useState(true);
  const earnedCoinRef = useRef();

  useEffect(() => {
    if (triggerAnimation) {
      const fadeOutTimeout = setTimeout(() => {
        setIsVisible(false);
        setCoin((prev) => prev + obtainCoin);
      }, 2000);

      return () => {
        clearTimeout(fadeOutTimeout);
      };
    }
  }, [triggerAnimation]);

  useEffect(() => {
    setCoin(userCoin);
  }, [userCoin]);

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      styled={{
        position: 'relative',
        width: '100%',
        transition: 'all 1s ease-in-out',
      }}
    >
      <S.CurrentCoin isVisible={isVisible}>{coin}코인 </S.CurrentCoin>
      <S.EarnedCoin ref={earnedCoinRef} isVisible={isVisible} width={isVisible ? 23 : 0}>
        +{obtainCoin}
      </S.EarnedCoin>
    </HStack>
  );
};

export default CoinComponent;
