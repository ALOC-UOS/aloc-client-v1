import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import { InputBox } from '../../Input/TextInput/TextInputBox/style';
import Button from '../../Buttons';
import { useState } from 'react';
import { useRef } from 'react';

const SignIn = ({ setFormType }) => {
  const [githubId, setGithubId] = useState('');
  const [password, setPassword] = useState('');
  const [githubIdFocus, setGithubIdFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const githubIdRef = useRef();
  const passwordRef = useRef();
  const checkForm = () => {
    let checkBool = true;
    if (githubId.length <= 1) {
      githubIdRef.current.placeholder = '닉네임은 2글자 이상이어야 합니다';
      setGithubId('');
      setGithubIdFocus(true);
      checkBool = false;
    }
    if (password.length <= 3) {
      passwordRef.current.placeholder = '비밀번호는 4글자 이상이어야 합니다';
      setPassword('');
      setPasswordFocus(true);
      checkBool = false;
    }
    return checkBool;
  };
  return (
    <SigninBox>
      <ImageWrapper>
        <LogoImage src={logo} />
      </ImageWrapper>
      <PhraseWrapper>
        <Phrase>오늘도 알록하세요</Phrase>
      </PhraseWrapper>
      <BreakLine />
      <StyledInputBox
        ref={githubIdRef}
        placeholder={'깃허브 닉네임'}
        value={githubId}
        isFocused={githubIdFocus}
        onChange={e => setGithubId(e.target.value)}
      ></StyledInputBox>
      <StyledInputBox
        ref={passwordRef}
        type="password"
        placeholder={'비밀번호'}
        value={password}
        isFocused={passwordFocus}
        onChange={e => setPassword(e.target.value)}
      ></StyledInputBox>

      <Button
        color={'blue'}
        type={'active'}
        size={'medium'}
        style={{
          height: 40,
          textAlign: 'start',
          padding: '4px 8px',
          fontSize: 14,
          borderRadius: 8,
        }}
        onClick={() => {
          console.log(checkForm());
        }}
      >
        로그인
      </Button>
      <UnderlinedText
        onClick={() => {
          setFormType('SIGNUP');
        }}
      >
        알록 회원이 아니신가요?
      </UnderlinedText>
    </SigninBox>
  );
};
export default SignIn;

const StyledInputBox = styled(InputBox)`
  border-color: ${props => (props.isFocused && props.value.length === 0 ? 'red' : '')};
`;

const SigninBox = styled.div`
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
  color: ${props => props.theme.contentText};
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
