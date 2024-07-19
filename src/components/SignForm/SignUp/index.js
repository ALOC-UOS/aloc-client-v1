import logo from '../../../assets/logo.svg';
import Button from '../../Buttons';
import { useRef, useState, useEffect } from 'react';
import BlackScreen from '../../BlackScreen';
import AlertModal from '../../Modal/AlertModal';
import LoginAPI from '../../../api/login/loginAPI';
import { textReducer, focusReducer, isValidEmail, checkForm } from './utils';
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
import { useReducer } from 'react';

const SignUp = ({ setFormType }) => {
  const [inputState, dispatchText] = useReducer(textReducer, {
    githubId: '',
    password: '',
    checkedPassword: '',
    name: '',
    studentId: '',
    baekjoonId: '',
    discordId: '',
    notionEmail: '',
  });
  const [focusState, dispatchFocus] = useReducer(focusReducer, {
    githubIdFocus: false,
    passwordFocus: false,
    checkedPasswordFocus: false,
    nameFocus: false,
    studentIdFocus: false,
    beakjoonIdFocus: false,
    discordIdFocus: false,
    notionEmailFocus: false,
  });
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const githubIdRef = useRef();
  const passwordRef = useRef();
  const checkedPasswordRef = useRef();
  const nameRef = useRef();
  const studentIdRef = useRef();
  const baekjoonIdRef = useRef();
  const discordIdRef = useRef();
  const notionEmailRef = useRef();

  const inputObject = {
    GITHUB_ID: {
      inputState: inputState.githubId,
      focusState: focusState.githubIdFocus,
      ref: githubIdRef,
      default: '깃허브 닉네임',
      error: '닉네임은 2글자 이상이어야 합니다',
      check: () => inputState.githubId.length <= 1,
    },
    PASSWORD: {
      inputState: inputState.password,
      focusState: focusState.passwordFocus,
      ref: passwordRef,
      default: '비밀번호',
      error: '비밀번호는 4글자 이상이어야 합니다',
      check: () => inputState.password.length <= 3,
      type: 'password',
    },
    CHECKED_PASSWORD: {
      inputState: inputState.checkedPassword,
      focusState: focusState.checkedPasswordFocus,
      ref: checkedPasswordRef,
      default: '비밀번호 확인',
      error: '비밀번호와 일치하지 않습니다.',
      check: () => !(inputState.password === inputState.checkedPassword),
      type: 'password',
    },
    NAME: {
      inputState: inputState.name,
      focusState: focusState.nameFocus,
      ref: nameRef,
      default: '이름',
      error: '이름은 2글자 이상이어야 합니다',
      check: () => inputState.name.length <= 1,
    },
    STUDENT_ID: {
      inputState: inputState.studentId,
      focusState: focusState.studentIdFocus,
      ref: studentIdRef,
      default: '학번',
      error: '10자리의 학번 형식이어야 합니다.',
      check: () => inputState.studentId.length !== 10,
    },
    BAEKJOON_ID: {
      inputState: inputState.baekjoonId,
      focusState: focusState.baekjoonIdFocus,
      ref: baekjoonIdRef,
      default: '백준 닉네임',
      error: '백준 닉네임은 2글자 이상이어야 합니다',
      check: () => inputState.baekjoonId.length <= 1,
    },
    DISCORD_ID: {
      inputState: inputState.discordId,
      focusState: focusState.discordIdFocus,
      ref: discordIdRef,
      default: '디스코드 아이디',
      error: '디스코드 아이디는 2글자 이상이어야 합니다',
      check: () => inputState.discordId.length <= 1,
    },
    NOTION_EMAIL: {
      inputState: inputState.notionEmail,
      focusState: focusState.notionEmailFocus,
      ref: notionEmailRef,
      default: '노션 이메일',
      error: '이메일 형식이 잘못됐습니다',
      check: () => !isValidEmail(inputState.notionEmail),
    },
  };

  useEffect(() => {
    Object.entries(inputObject).map(([key, value]) => {
      if (value.ref) {
        value.ref.current.placeholder = inputObject[key].default;
      }
    });
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    dispatchText({ type: name, text: value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (checkForm(inputObject, dispatchText, dispatchFocus)) {
      await LoginAPI.handleOnSubmitSignupForm(inputState)
        .then(response => {
          setFormType('SIGNIN');
        })
        .catch(error => {
          if (error.response.data.code === 'COMMON400') {
            setModalText('이미 가입된 유저입니다.');
            setIsOpenedModal(true);
          }
          return;
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
      {Object.entries(inputObject).map(([key, value]) => {
        return (
          <StyledInputBox
            name={key}
            ref={value.ref}
            isFocused={value.focusState}
            value={value.inputState}
            onChange={onChange}
            type={value.type === 'password' && 'password'}
          />
        );
      })}

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
