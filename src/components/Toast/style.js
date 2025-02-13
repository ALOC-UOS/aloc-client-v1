import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const ToastContainer = styled.div`
  z-index: 9999;
  position: fixed;
  bottom: 24px;
  left: 50%;

  opacity: 0;
  box-shadow: var(--color-box-shadow);
  display: flex;
  flex-direction: column;
  min-width: 320px;
  border-radius: 8px;
  background-color: #ff5a5a;
  justify-content: center;
  overflow: hidden;
  transform: translate(-50%, 0%);
  ${props =>
    props.$toastState &&
    css`
      opacity: 1;
      transform: translate(-50%, -50%);
    `}
`;
const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const ToastText = styled.div`
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -2px;
`;
const ToastWrapper = styled.div`
  padding: 16px 0 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const progressbar = keyframes`
  from{
    width: 0%;
  }
  to{
    width: 100%;
  }
`;

const Progress = styled.div`
  background: rgba(256, 256, 256, 0.5);
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  animation: ${props =>
    props.$runAnimation
      ? css`
          ${progressbar} 1.8s linear forwards
        `
      : 'none'};
`;

export { ToastContainer, ToastIcon, ToastText, ToastWrapper, progressbar, Progress };
