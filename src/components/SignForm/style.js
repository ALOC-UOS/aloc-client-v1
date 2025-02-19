import styled from '@emotion/styled';

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 240px;
  max-width: 400px;
  width: 100%;
`;

const InputBox = styled.input`
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

  &::placeholder {
    opacity: 0.5;
  }
`;

const SignBox = styled.form`
  display: flex;
  width: 350px;
  border-radius: 16px;
  background: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
  box-shadow: 0px 8px 24px 0px rgba(64, 140, 255, 0.25);
`;

const PhraseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Phrase = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -2.56px;
  color: var(--color-content-text);
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 64px;
  height: 64px;
  margin: 24px;
`;
const BreakLine = styled.div`
  width: 320px;
  height: 2px;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.1);
  margin: 12px 0px;
`;
const UnderlinedText = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: #a9adb9;
  text-decoration-line: underline;
`;

export default {
  InputBox,
  SignBox,
  Phrase,
  PhraseWrapper,
  ImageWrapper,
  LogoImage,
  BreakLine,
  UnderlinedText,
};
