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

  padding: 0 20px;
  height: 64px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.05);

  ${props =>
    props.isScroll &&
    css`
      background-color: var(--color-foreground-10);
    `}
  @media (max-width: 480px) {
    top: 0;
    margin: 0;
    padding: 8px 16px;
    border-radius: 0px;
  }
`;

const TopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  cursor: pointer;
`;
const TopBarRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const TopBarItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-sub-text);
  cursor: pointer;
  user-select: none;
  &:hover {
    color: var(--color-title-text);
  }
  ${props =>
    props.selected &&
    css`
      color: var(--color-blue);
      &:hover {
        color: var(--color-blue);
      }
    `}
`;

const TopBarButton = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: var(--color-blue);

  color: var(--color-white);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
`;

const AlocTextImage = styled.img`
  width: 64px;
  height: 32px;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  cursor: pointer;
`;
const UserImageWrapper = styled.div``;
export {
  TopBarContainer,
  TopBarLeft,
  TopBarRight,
  TopBarItem,
  TopBarButton,
  ImageWrapper,
  AlocTextImage,
  LogoImage,
  UserImage,
  UserImageWrapper,
};
