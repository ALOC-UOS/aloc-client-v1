import { useFunnel } from '../../../hooks/useFunnel';
import SignUpFirst from './SignUpFirst';
import SignUpSecond from './SignUpSecond';
const SignUp = ({ setFormType }) => {
  const { Step, Funnel, setStep, currentStep } = useFunnel('회원가입');
  return (
    <Funnel>
      <Step name="회원가입">
        <SignUpFirst setFormType={setFormType} onNext={() => setStep('코스선택')} />
      </Step>
      <Step name="코스선택">
        <SignUpSecond setFormType={setFormType} />
      </Step>
    </Funnel>
  );
};
export default SignUp;
