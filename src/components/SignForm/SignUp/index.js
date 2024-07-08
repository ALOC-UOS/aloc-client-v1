import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import { InputBox } from '../../Input/TextInput/TextInputBox/style';
import Button from '../../Buttons';
const SignUp = ({ setFormType }) => {
  return (
    <SigninBox>
      <ImageWrapper>
        <LogoImage src={logo} />
      </ImageWrapper>
      <PhraseWrapper>
        <Phrase>알록 멤버가 되신 것을 환영해요!</Phrase>
      </PhraseWrapper>
      <BreakLine />
      <InputBox placeholder={'깃허브 닉네임'}></InputBox>
      <InputBox placeholder={'비밀번호'}></InputBox>
      <InputBox placeholder={'비밀번호 확인'}></InputBox>
      <InputBox placeholder={'이름'}></InputBox>
      <InputBox placeholder={'학번'}></InputBox>
      <InputBox placeholder={'백준 닉네임'}></InputBox>
      <Button color={'blue'} type={'active'} size={'small'} onClick={() => {}}>
        회원가입
      </Button>
      <UnderlinedText
        onClick={() => {
          setFormType('SIGNIN');
        }}
      >
        로그인하기
      </UnderlinedText>
    </SigninBox>
  );
};
export default SignUp;

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
