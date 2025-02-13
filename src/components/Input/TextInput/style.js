import styled from '@emotion/styled';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  padding: 12px;
  background-color: var(--color-white);
  border-radius: 8px;
`;

const InputLabel = styled.div`
  color: var(--color-sub-text);
  font-size: 12px;
  letter-spacing: -1px;
  user-select: none;
`;

const TextInputBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export { InputContainer, InputLabel, TextInputBoxWrap };
