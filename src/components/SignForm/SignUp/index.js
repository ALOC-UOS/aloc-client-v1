import logo from '../../../assets/logo.png';
import Button from '../../Buttons';
import { useRef, useState, useEffect } from 'react';
import BlackScreen from '../../BlackScreen';
import AlertModal from '../../Modal/AlertModal';
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

const SignUp = ({ setFormType }) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [inputs, setInputs] = useState({
    githubId: '',
    password: '',
    checkedPassword: '',
    name: '',
    studentId: '',
    baekjoonId: '',
    discordId: '',
    notionEmail: '',
  });
  const [focus, setFocus] = useState({
    githubIdFocus: false,
    passwordFocus: false,
    checkedPasswordFocus: false,
    nameFocus: false,
    studentIdFocus: false,
    beakjoonIdFocus: false,
    discordIdFocus: false,
    notionEmailFocus: false,
  });
  const {
    githubIdFocus,
    passwordFocus,
    checkedPasswordFocus,
    nameFocus,
    studentIdFocus,
    baekjoonIdFocus,
    discordIdFocus,
    notionEmailFocus,
  } = focus;
  const {
    githubId,
    password,
    checkedPassword,
    name,
    studentId,
    baekjoonId,
    discordId,
    notionEmail,
  } = inputs;

  const githubIdRef = useRef();
  const passwordRef = useRef();
  const checkedPasswordRef = useRef();
  const nameRef = useRef();
  const studentIdRef = useRef();
  const baekjoonIdRef = useRef();
  const discordIdRef = useRef();
  const notionEmailRef = useRef();

  useEffect(() => {
    if (githubIdRef.current) {
      githubIdRef.current.placeholder = '깃허브 닉네임';
    }
    if (passwordRef.current) {
      passwordRef.current.placeholder = '비밀번호';
    }
    if (checkedPasswordRef.current) {
      checkedPasswordRef.current.placeholder = '비밀번호 확인';
    }
    if (nameRef.current) {
      nameRef.current.placeholder = '이름';
    }
    if (studentIdRef.current) {
      studentIdRef.current.placeholder = '학번';
    }
    if (baekjoonIdRef.current) {
      baekjoonIdRef.current.placeholder = '백준 닉네임';
    }
    if (discordIdRef.current) {
      discordIdRef.current.placeholder = '디스코드 아이디';
    }
    if (notionEmailRef.current) {
      notionEmailRef.current.placeholder = '노션 이메일';
    }
  }, [
    githubIdRef,
    passwordRef,
    checkedPasswordRef,
    nameRef,
    studentIdRef,
    baekjoonIdRef,
    discordIdRef,
    notionEmailRef,
  ]);

  const reset = type => {
    setInputs(prev => {
      return {
        ...prev,
        [type]: '',
      };
    });
    setFocus(prev => {
      return {
        ...prev,
        [type + 'Focus']: true,
      };
    });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const checkPassword = () => {
    return password === checkedPassword;
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const onSubmit = async event => {
    event.preventDefault();
    if (checkForm()) {
      await LoginAPI.handleOnsubmitSignupForm(
        name,
        password,
        githubId,
        baekjoonId,
        studentId,
        discordId,
        notionEmail
      )
        .then(response => {
          console.log(response);
          setFormType('SIGNIN');
        })
        .catch(error => {
          if (error.response.data.code === 'COMMON400') {
            setModalText('이미 가입된 유저입니다.');
            setIsOpenedModal(true);
          }
          console.log('뭔가 안됨');
        });
    }
    return;
  };

  const checkForm = () => {
    let checkBool = true;
    if (githubId.length <= 1) {
      githubIdRef.current.placeholder = '닉네임은 2글자 이상이어야 합니다';
      reset('githubId');
      checkBool = false;
    }
    if (password.length <= 3) {
      passwordRef.current.placeholder = '비밀번호는 4글자 이상이어야 합니다';
      reset('password');
      checkBool = false;
    }
    if (!checkPassword()) {
      checkedPasswordRef.current.placeholder = '비밀번호와 일치하지 않습니다.';
      reset('checkedPassword');
      checkBool = false;
    }
    if (name.length <= 1) {
      nameRef.current.placeholder = '이름은 2글자 이상이어야 합니다';
      reset('name');
      checkBool = false;
    }
    if (studentId.length !== 10) {
      studentIdRef.current.placeholder = '10자리의 학번 형식이어야 합니다.';
      reset('studentId');
      checkBool = false;
    }
    if (baekjoonId.length <= 1) {
      baekjoonIdRef.current.placeholder = '백준 닉네임은 2글자 이상이어야 합니다';
      reset('baekjoonId');
      checkBool = false;
    }
    if (discordId.length <= 1) {
      discordIdRef.current.placeholder = '디스코드 아이디는 2글자 이상이어야 합니다';
      reset('discordId');
      checkBool = false;
    }
    if (!isValidEmail(notionEmail)) {
      notionEmailRef.current.placeholder = '이메일 형식이 잘못됐습니다';
      reset('notionEmail');
      checkBool = false;
    }
    return checkBool;
  };
  return (
    <SignBox onSubmit={onSubmit}>
      <BlackScreen isOpen={isOpenedModal} />
      <AlertModal
        isOpen={isOpenedModal}
        description={modalText}
        closeModal={() => {
          setIsOpenedModal(false);
          setFormType('SIGNIN');
        }}
      />
      <ImageWrapper>
        <LogoImage src={logo} />
      </ImageWrapper>
      <PhraseWrapper>
        <Phrase>알록 멤버가 되신 것을 환영해요!</Phrase>
      </PhraseWrapper>
      <BreakLine />
      <StyledInputBox
        ref={githubIdRef}
        isFocused={githubIdFocus}
        name="githubId"
        value={githubId}
        onChange={onChange}
      />
      <StyledInputBox
        ref={passwordRef}
        isFocused={passwordFocus}
        name="password"
        value={password}
        type="password"
        onChange={onChange}
      />
      <StyledInputBox
        ref={checkedPasswordRef}
        isFocused={checkedPasswordFocus}
        name="checkedPassword"
        value={checkedPassword}
        type="password"
        onChange={onChange}
      />
      <StyledInputBox
        ref={nameRef}
        isFocused={nameFocus}
        name="name"
        value={name}
        onChange={onChange}
      />
      <StyledInputBox
        ref={studentIdRef}
        isFocused={studentIdFocus}
        name="studentId"
        value={studentId}
        onChange={onChange}
      />
      <StyledInputBox
        ref={baekjoonIdRef}
        isFocused={baekjoonIdFocus}
        name="baekjoonId"
        value={baekjoonId}
        onChange={onChange}
      />
      <StyledInputBox
        ref={discordIdRef}
        isFocused={discordIdFocus}
        name="discordId"
        value={discordId}
        onChange={onChange}
      />
      <StyledInputBox
        ref={notionEmailRef}
        isFocused={notionEmailFocus}
        name="notionEmail"
        value={notionEmail}
        onChange={onChange}
      />
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
      >
        회원가입
      </Button>
      <UnderlinedText
        onClick={() => {
          setFormType('SIGNIN');
        }}
      >
        로그인하기
      </UnderlinedText>
    </SignBox>
  );
};
export default SignUp;
