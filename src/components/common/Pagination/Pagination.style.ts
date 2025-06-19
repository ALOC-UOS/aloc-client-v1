import styled from '@emotion/styled';

interface PageButtonProps {
  isSelected?: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-blue)' : 'var(--color-white)'};
  color: ${({ isSelected }) => (isSelected ? 'var(--color-white)' : 'var(--color-sub-text)')};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  border: none;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 255px;
  overflow-y: auto;
  background-color: var(--color-foreground);
  border-radius: 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-black-10);
    border-radius: 4px;
  }
`;

export default { PageButton, Container };
