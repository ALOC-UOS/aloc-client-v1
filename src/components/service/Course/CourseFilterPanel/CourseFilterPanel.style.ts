import styled from '@emotion/styled';

interface ButtonProps {
  isSelected: boolean;
}

const TypeFilterButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 32px;
  width: 100%;
  font-size: 16px;
  color: var(--color-sub-text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }

  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-blue)' : 'var(--color-white)'};
  color: ${({ isSelected }) => (isSelected ? 'var(--color-white)' : 'var(--color-sub-text)')};
`;

const SortButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 32px;
  width: 100px;
  font-size: 16px;
  color: var(--color-sub-text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
  background-color: ${({ isSelected }) =>
    isSelected ? 'var(--color-blue)' : 'var(--color-white)'};
  color: ${({ isSelected }) => (isSelected ? 'var(--color-white)' : 'var(--color-sub-text)')};
`;

export default {
  TypeFilterButton,
  SortButton,
};
