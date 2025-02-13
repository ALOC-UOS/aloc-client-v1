import styled from '@emotion/styled';
import { InputBox } from '../Input/TextInput/TextInputBox/style';

const StyledInputBox = styled(InputBox)`
  border-color: ${props => (props.isFocused && props.value.length === 0 ? 'red' : '')};
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

export {
  StyledInputBox,
  SignBox,
  Phrase,
  PhraseWrapper,
  ImageWrapper,
  LogoImage,
  BreakLine,
  UnderlinedText,
};
