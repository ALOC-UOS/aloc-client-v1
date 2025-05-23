import styled from '@emotion/styled';

const GoogleLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: 1px solid var(--color-black-10);
  border-radius: 12px;
  background-color: var(--color-white);
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

export default { GoogleLoginButton };
