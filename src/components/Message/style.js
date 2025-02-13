import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1080deg);
  } 
`;

const MessageContainer = styled.div`
  transition: all 0.3s;
  z-index: 1000;
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translate(-50%, -24px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  opacity: 0;

  background-color: var(--color-white);
  box-shadow: 0 8px 16px var(--color-blue-25);
  min-height: 48px;
  padding: 8px 12px;
  border-radius: 32px;

  ${props =>
    props.isOpen &&
    css`
      transform: translate(-50%, 0px);
      opacity: 1;
    `}
`;

const LoadingIcon = styled.img`
  animation: ${rotateAnimation} 4s linear infinite;
  width: 16px;
  height: 16px;
`;

const CoinIcon = styled.img`
  width: 32px;
  height: 32px;
  padding: 4px;
  background-color: #ffb80040;
  border-radius: 50%;
`;

const Text = styled.span`
  color: ${props => (props.blue ? 'var(--color-blue)' : 'var(--color-title-text)')};
  font-size: 16px;
  font-weight: 500;
`;

export default { MessageContainer, LoadingIcon, CoinIcon, Text };
