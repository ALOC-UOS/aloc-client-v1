import styled from '@emotion/styled';

const ButtonContainer = styled.button<{ isMainPage: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-black-10);
  border-radius: 8px;
  padding: 0;
  background-color: ${({ isMainPage, isActive }) => {
    if (isActive) {
      return 'var(--color-blue)';
    }
    if (isMainPage) {
      return 'var(--color-white-10)';
    }
    return 'var(--color-white)';
  }};
`;

export default { ButtonContainer };
