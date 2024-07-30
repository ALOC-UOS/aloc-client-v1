import styled, { css } from 'styled-components';

const TopBarContainer = styled('div')`
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
      background-color: ${props => props.theme.foreground}18;
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

const TopBarItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.subText};
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${props => props.theme.titleText};
  }
  ${props =>
    props.selected &&
    css`
      color: ${props => props.theme.primary};
      &:hover {
        color: ${props => props.theme.primary};
      }
    `}
`;

const TopBarButton = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => props.theme.primary};

  color: #ffffff;
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

const TypoImage = styled.img`
  width: 55px;
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
  TypoImage,
  LogoImage,
  UserImage,
  UserImageWrapper,
};
