import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Label = styled.p<{ color?: string }>`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.color || 'var(--color-sub-text)'};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{
  hasError?: boolean;
}>`
  width: 100%;
  padding: 12px;
  background-color: var(--color-foreground);
  outline: none;
  border: 1px solid ${(props) => (props.hasError ? 'var(--color-red)' : 'transparent')};
  border-radius: 8px;
  color: var(--color-title-text);
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--color-black-10);
  }

  &::placeholder {
    color: var(--color-sub-text);
  }
`;

const CharCount = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--color-sub-text);
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: var(--color-error, red);
  margin-top: 4px;
`;

export default {
  InputContainer,
  Label,
  InputWrapper,
  Input,
  CharCount,
  ErrorMessage,
};
