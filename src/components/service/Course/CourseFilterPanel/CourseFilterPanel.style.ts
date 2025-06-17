import styled from '@emotion/styled';

const TypeFilterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  padding: 8px;
  border-radius: 32px;
  width: 100%;
  font-size: 16px;
  color: var(--color-sub-text);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.8);
  }
`;

const SortButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
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
`;

export default { TypeFilterButton, SortButton };
