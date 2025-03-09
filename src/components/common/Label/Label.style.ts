import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LabelContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 16px;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--color-blue-25)' : 'var(--color-background)'};
`;

const Circle = styled.div<{ isActive: boolean }>`
  animation: ${({ isActive }) => (isActive ? blink : 'none')} 1.5s infinite;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? 'var(--color-blue)' : 'var(--color-sub-text)')};
`;

const LabelText = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? 'var(--color-blue)' : 'var(--color-sub-text)')};
  font-size: 12px;
  font-weight: 500;
`;

export default { LabelContainer, Circle, LabelText };
