import styled from '@emotion/styled';

const TopBarContainer = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0px 0px auto 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  @media (max-width: 480px) {
    padding: 8px 16px;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const AlocTextImage = styled.img`
  width: 79px;
  height: 27px;
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
