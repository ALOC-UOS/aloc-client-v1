import logo from '../../../assets/logo.svg';
import Button from '../../Buttons';
import { useState } from 'react';
import { useRef } from 'react';
import BlackScreen from '../../BlackScreen';
import AlertModal from '../../Modal/AlertModal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginAPI from '../../../api/login/loginAPI';

import {
  SignBox,
  ImageWrapper,
  LogoImage,
  PhraseWrapper,
  Phrase,
  UnderlinedText,
  BreakLine,
  StyledInputBox,
} from '../style';
import loginStatusAtom from '../../../store/login/loginStatus';
import { useSetAtom } from 'jotai';
import storeToken from '../../../utils/auth/storeToken';

const SignIn = ({ setFormType }) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [githubId, setGithubId] = useState('');
  const [password, setPassword] = useState('');
  const [githubIdFocus, setGithubIdFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const githubIdRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetAtom(loginStatusAtom);

  useEffect(() => {
    if (githubIdRef.current) {
      githubIdRef.current.placeholder = '깃허브 닉네임';
    }
    if (passwordRef.current) {
      passwordRef.current.placeholder = '비밀번호';
    }
  }, [githubIdRef, passwordRef]);

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

  const onSubmit = async event => {
    event.preventDefault();
    if (checkForm()) {
      await LoginAPI.handleOnSubmitLoginForm(githubId, password)
        .then(res => {
          const { accessToken, refreshToken } = res.data;
          storeToken({ accessToken, refreshToken });
          setIsLoggedIn(true);
          navigate('/');
        })
        .catch(error => {
          passwordRef.current.placeholder = '비밀번호가 일치하지 않거나 없는 회원입니다.';
          setPassword('');
          setPasswordFocus(true);
        });
    }
    return;
  };

  return (
    <SignBox onSubmit={onSubmit}>
      <BlackScreen isOpen={isOpenedModal} />
      <AlertModal
        isOpen={isOpenedModal}
        description={modalText}
        closeModal={() => {
          setIsOpenedModal(false);
        }}
      />
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
        type={'submit'}
        size={'medium'}
        style={{
          height: 40,
          textAlign: 'start',
          padding: '4px 8px',
          fontSize: 14,
          borderRadius: 8,
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
    </SignBox>
  );
};
export default SignIn;
