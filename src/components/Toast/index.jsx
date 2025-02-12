import { ToastContainer, ToastIcon, ToastText, ToastWrapper, Progress } from './style.js';

const Toast = ({ toastState, text, icon, copyClick }) => {
  return (
    <ToastContainer $toastState={toastState}>
      <ToastWrapper>
        <ToastIcon src={icon} />
        <ToastText>{text}</ToastText>
      </ToastWrapper>
      <Progress key={copyClick} $runAnimation={toastState} />
    </ToastContainer>
  );
};
export default Toast;
