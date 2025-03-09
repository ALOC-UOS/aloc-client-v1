import styled from '@emotion/styled';

const ButtonContainer = styled.button<{ isMainPage: boolean }>`
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--color-black-10);
  border-radius: 8px;
  padding: 4px;
  background-color: ${({ isMainPage }) =>
    isMainPage ? 'var(--color-white-10)' : 'var(--color-white)'};
`;

const UserNickname = styled.p<{ isMainPage: boolean }>`
  color: ${({ isMainPage }) => (isMainPage ? 'var(--color-white)' : 'var(--color-title-text)')};
  font-size: 16px;
`;

export default { ButtonContainer, UserNickname };
