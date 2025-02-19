import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import S from '../style';
import LogoWhite from '@/assets/images/logo.season2.white.svg';
import Button from '@/components/Buttons';
import { BlackOverlay } from '@/components/BlackOverlay';
import AlertModal from '@/components/Modal/AlertModal';
import LoginAPI from '@/api/login/loginAPI';
import { serverAPI } from '@/api/axios';
import useLoginState from '@/hooks/useLoginState';
import useUserState from '@/hooks/useUserState';

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
  const { setLoginStatus } = useLoginState();
  const { setUserInfo } = useUserState();

  useEffect(() => {
    if (githubIdRef.current) {
      githubIdRef.current.placeholder = '깃허브 닉네임';
    }
    if (passwordRef.current) {
      passwordRef.current.placeholder = '비밀번호';
    }
  }, [githubIdRef, passwordRef]);

  const checkFormValidity = () => {
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

  const onSubmit = async (event) => {
    event.preventDefault();
    if (checkFormValidity()) {
      await LoginAPI.handleOnSubmitLoginForm(githubId, password)
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          setLoginStatus({ accessToken, refreshToken });
          serverAPI.get('/user').then((response) => {
            const userInfo = response.data.result;
            setUserInfo(userInfo);
          });
          navigate('/');
        })
        .catch((error) => {
          passwordRef.current.placeholder = '비밀번호가 일치하지 않거나 없는 회원입니다.';
          setPassword('');
          setPasswordFocus(true);
        });
    }
    return;
  };

  return (
    <S.SignBox onSubmit={onSubmit}>
      <BlackOverlay isOpen={isOpenedModal} />
      <AlertModal
        isOpen={isOpenedModal}
        description={modalText}
        closeModal={() => {
          setIsOpenedModal(false);
        }}
      />
      <S.ImageWrapper>
        <S.LogoImage src={LogoWhite} />
      </S.ImageWrapper>
      <S.PhraseWrapper>
        <S.Phrase>오늘도 알록하세요</S.Phrase>
      </S.PhraseWrapper>
      <S.BreakLine />
      <S.InputBox
        ref={githubIdRef}
        placeholder={'깃허브 닉네임'}
        value={githubId}
        isFocused={githubIdFocus}
        onChange={(e) => setGithubId(e.target.value)}
      ></S.InputBox>
      <S.InputBox
        ref={passwordRef}
        type="password"
        placeholder={'비밀번호'}
        value={password}
        isFocused={passwordFocus}
        onChange={(e) => setPassword(e.target.value)}
      ></S.InputBox>
      <Button
        color={'blue'}
        type="submit"
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
      <S.UnderlinedText
        onClick={() => {
          setFormType('SIGNUP');
        }}
      >
        알록 회원이 아니신가요?
      </S.UnderlinedText>
    </S.SignBox>
  );
};
export default SignIn;
