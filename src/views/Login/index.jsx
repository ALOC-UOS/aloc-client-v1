import { useState } from 'react';
import SignIn from '../../components/SignForm/SignIn';
import SignUp from '../../components/SignForm/SignUp';
import S from './style';

const Login = () => {
  const [formType, setFormType] = useState('SIGNIN');

  return (
    <S.SignInContainer>
      {formType === 'SIGNIN' ? (
        <SignIn setFormType={setFormType} />
      ) : (
        <SignUp setFormType={setFormType} />
      )}
    </S.SignInContainer>
  );
};
export default Login;
