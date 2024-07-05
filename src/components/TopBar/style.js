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

  padding: 8px 40px;
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
  gap: 40px;
`;

const TopBarItem = styled.div`
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
  opacity: 0;
  user-select: none;
  pointer-events: none;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }

  ${props =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export { TopBarContainer, TopBarLeft, TopBarItem, TopBarButton };
