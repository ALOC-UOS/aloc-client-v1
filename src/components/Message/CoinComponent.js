import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CoinContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 1s ease-in-out;
`;

const CoinSpan = styled.span`
  transition: all 1s ease-in-out;
  color: ${props => props.textColor};
`;

const PlusCoinSpan = styled.span`
  color: #ffb800;
  transform: ${props => (props.isVisible ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  width: ${props => (props.isVisible ? `${props.width}px` : 0)};
  transition:
    width 0.8s ease-in-out,
    opacity 0.5s ease-in-out,
    transform 0.8s ease-in-out;
`;

const CoinComponent = ({ userCoin, obtainCoin, triggerAnimation }) => {
  const [coin, setCoin] = useState(userCoin);
  const [color, setColor] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const plusCoinSpanRef = useRef();

  useEffect(() => {
    if (triggerAnimation) {
      const fadeOutTimeout = setTimeout(() => {
        setIsVisible(false);
        setCoin(userCoin + obtainCoin);
        setColor('#FFB800');
      }, 2000);

      return () => {
        clearTimeout(fadeOutTimeout);
      };
    }
  }, [triggerAnimation]);

  return (
    <CoinContainer>
      <CoinSpan textColor={color}>{coin}코인 </CoinSpan>
      <PlusCoinSpan
        ref={plusCoinSpanRef}
        isVisible={isVisible}
        width={isVisible ? plusCoinSpanRef.current?.offsetWidth : 0}
      >
        {'\u00A0'}+{obtainCoin}
      </PlusCoinSpan>
    </CoinContainer>
  );
};

export default CoinComponent;
