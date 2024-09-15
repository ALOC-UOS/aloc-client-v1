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

  @media (max-width: 480px) {
    top: 0;
    margin: 0;
    padding: 8px 16px;
    border-radius: 0px;
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
export { TopBarContainer };
