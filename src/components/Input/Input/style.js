import styled from '@emotion/styled';

const InputBox = styled.input`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-width: 240px;
  max-width: 400px;
  width: 100%;
  height: 40px;

  border: 1px solid var(--color-foreground);
  border-color: ${(props) => (props.isFocused && props.value.length === 0 ? 'red' : '')};
  outline: none;
  color: var(--color-content-text);
  font-size: 14px;
  letter-spacing: -1px;

  background-color: var(--color-foreground);
  padding: 4px 4px 4px 8px;
  border-radius: 8px;
  cursor: pointer;

  opacity: ${(props) => (props.disabled ? '0.5' : '1')};

  &:hover {
    border: ${(props) => (props.disabled ? '1px solid #00000000' : '1px solid #00000040')};
  }
`;
export { InputBox };
