import styled from 'styled-components';
import SignIn from '../../components/SignForm/SignIn';
import { useState } from 'react';
import SignUp from '../../components/SignForm/SignUp';

const Login = () => {
  const [formType, setFormType] = useState('SIGNIN');

  return (
    <div>
      <SigninContainer>
        {formType === 'SIGNIN' ? (
          <SignIn setFormType={setFormType} />
        ) : (
          <SignUp setFormType={setFormType} />
        )}
      </SigninContainer>
    </div>
  );
};
export default Login;

const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
