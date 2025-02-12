import logo from '../../../assets/logo.svg';
import Button from '../../Buttons';
import { useRef, useState, useEffect } from 'react';
import { BlackOverlay } from '../../BlackOverlay';
import AlertModal from '../../Modal/AlertModal';
import {
  textReducer,
  focusReducer,
  isValidEmail,
  checkFormValidity,
  setInputState,
} from '../../../utils/SignUp';
import { SIGNUP_PLACEHOLDER } from '../../../constants/SignUp';
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

const SignUpFirst = ({ setFormType, onNext }) => {
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
      check: () => inputState.githubId.length <= 1,
    },
    PASSWORD: {
      type: 'password',
      inputState: inputState.password,
      focusState: focusState.passwordFocus,
      ref: passwordRef,
      check: () => inputState.password.length <= 3,
    },
    CHECKED_PASSWORD: {
      type: 'password',
      inputState: inputState.checkedPassword,
      focusState: focusState.checkedPasswordFocus,
      ref: checkedPasswordRef,
      check: () => !(inputState.password === inputState.checkedPassword),
    },
    NAME: {
      inputState: inputState.name,
      focusState: focusState.nameFocus,
      ref: nameRef,
      check: () => inputState.name.length <= 1,
    },
    STUDENT_ID: {
      inputState: inputState.studentId,
      focusState: focusState.studentIdFocus,
      ref: studentIdRef,
      check: () => inputState.studentId.length !== 10,
    },
    BAEKJOON_ID: {
      inputState: inputState.baekjoonId,
      focusState: focusState.baekjoonIdFocus,
      ref: baekjoonIdRef,
      check: () => inputState.baekjoonId.length <= 1,
    },
    DISCORD_ID: {
      inputState: inputState.discordId,
      focusState: focusState.discordIdFocus,
      ref: discordIdRef,
      check: () => inputState.discordId.length <= 1,
    },
    NOTION_EMAIL: {
      inputState: inputState.notionEmail,
      focusState: focusState.notionEmailFocus,
      ref: notionEmailRef,
      check: () => !isValidEmail(inputState.notionEmail),
    },
  };

  useEffect(() => {
    Object.entries(inputObject).map(([key, value]) => {
      if (value.ref) {
        value.ref.current.placeholder = SIGNUP_PLACEHOLDER[key].DEFAULT_PLACEHOLDER;
      }
    });
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    dispatchText({ type: name, text: value });
  };

  const onSubmit = async event => {
    event.preventDefault();
    if (checkFormValidity(inputObject, dispatchText, dispatchFocus)) {
      setInputState(inputState);
      onNext();
    }
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (checkFormValidity(inputObject, dispatchText, dispatchFocus)) {
        setInputState(inputState);
        onNext();
      }
    }
  };
  return (
    <SignBox onSubmit={onSubmit}>
      <BlackOverlay isOpen={isOpenedModal} />
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
        <Phrase>알록에 온 것을 환영해요!</Phrase>
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
            type={value.type === 'password' ? 'password' : 'text'}
            onKeyDown={onKeyDown}
          />
        );
      })}

      <Button
        color={'blue'}
        buttonType={'active'}
        size={'medium'}
        style={{
          height: 40,
          textAlign: 'start',
          padding: '4px 8px',
          fontSize: 14,
          borderRadius: 8,
        }}
      >
        다음으로
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
export default SignUpFirst;
