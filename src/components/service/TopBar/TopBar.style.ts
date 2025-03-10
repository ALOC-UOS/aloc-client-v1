import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TopBarContainer = styled.div<{ isScroll: boolean }>`
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 16px 24px;

  ${(props) =>
    props.isScroll &&
    css`
      background-color: var(--color-foreground-10);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);
    `}
  @media (max-width: 480px) {
    top: 0;
    margin: 0;
    padding: 8px 16px;
    border-radius: 0px;
  }
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const AlocTextImage = styled.img`
  width: 64px;
  height: 32px;
`;

const LoginButton = styled.button`
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  background-color: var(--color-blue);
  cursor: pointer;
`;

export default {
  TopBarContainer,
  AlocTextImage,
  LogoImage,
  LoginButton,
};
