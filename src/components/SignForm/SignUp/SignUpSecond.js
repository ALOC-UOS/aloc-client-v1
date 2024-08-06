import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import { SignBox, ImageWrapper, LogoImage, PhraseWrapper, Phrase, BreakLine } from '../style';
import Button from '../../Buttons';
import useModal from '../../../hooks/useModal';
import LoginAPI from '../../../api/login/loginAPI';
import { getInputState } from '../../../utils/SignUp';

const SignUpSecond = ({ setFormType }) => {
  const [course, setCourse] = useState('HALF');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async event => {
    const inputState = getInputState();
    const new_inputState = { ...inputState, course: course };

    await LoginAPI.handleOnSubmitSignUpForm(new_inputState)
      .then(() => {
        alertModal.setIsPending(false);
        setFormType('SIGNIN');
      })
      .catch(error => {
        if (error.response.data.code === 'COMMON400') {
          console.log(error.response.data);
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
          alertModal.hide();
          errorModal.show();
        }
        return;
      });
    return;
  };
  const alertModal = useModal({
    description: '코스를 설정하면 빠꾸칠 수 없어요!',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    pendable: true,
    onOk: onSubmit,
  });
  const errorModal = useModal({
    description: errorMessage,
    closable: false,
    onOk: () => setFormType('SIGNIN'),
  });
  return (
    <>
      <alertModal.render />
      <errorModal.render />
      <SignBox>
        <ImageWrapper>
          <LogoImage src={logo} />
        </ImageWrapper>
        <PhraseWrapper>
          <Phrase>코스를 선택하세요</Phrase>
        </PhraseWrapper>
        <BreakLine />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 30, marginBottom: 20 }}>
          <Button
            color={'white'}
            type="button"
            buttonType={'active'}
            size={'medium'}
            hover={'none'}
            active={'none'}
            style={{
              border: course === 'HALF' && '2px #408cff solid',
              height: 40,
              textAlign: 'center',
              padding: '4px 8px',
              fontSize: 14,
              borderRadius: 8,
            }}
            onClick={() => setCourse('HALF')}
          >
            HALF
          </Button>
          <Button
            color={'white'}
            type="button"
            buttonType={'active'}
            size={'medium'}
            hover={'none'}
            active={'none'}
            style={{
              border: course === 'FULL' && '2px #408cff solid',
              height: 40,
              textAlign: 'center',
              padding: '4px 8px',
              fontSize: 14,
              borderRadius: 8,
            }}
            onClick={() => setCourse('FULL')}
          >
            FULL
          </Button>
        </div>
        <Button
          color={'blue'}
          type="button"
          buttonType={'active'}
          size={'medium'}
          style={{
            height: 40,
            textAlign: 'center',
            padding: '4px 8px',
            fontSize: 14,
            borderRadius: 8,
          }}
          onClick={event => {
            event.preventDefault();
            alertModal.show();
          }}
        >
          회원가입
        </Button>
      </SignBox>
    </>
  );
};
export default SignUpSecond;
