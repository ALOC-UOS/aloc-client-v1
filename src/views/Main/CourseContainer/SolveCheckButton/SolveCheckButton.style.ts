import styled from '@emotion/styled';
import Animation from '@/styles/animation';

const AnimationContainer = styled.div`
  animation: ${Animation.FadeInUp} 1s 3s forwards;
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  opacity: 0;
`;

const SolveCheckButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white-10);
  padding: 12px;
  border-radius: 32px;
  border: 1px solid var(--color-white-25);
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.9;
  }
`;

const Text = styled.span`
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  margin-left: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default { AnimationContainer, SolveCheckButton, Text, LoadingSpinner };
