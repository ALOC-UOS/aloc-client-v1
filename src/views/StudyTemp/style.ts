import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -20%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  width: 100%;
  min-height: 100vh;
  padding: 110px 48px 0;
  gap: 24px;
`;

const InfoFont = styled.div`
  color: var(--color-sub-text);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const EmptyContainer = styled.div`
  animation: ${fadeIn} 1s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const EmptyTitle = styled.p`
  color: var(--color-sub-text);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export default {
  StudyContainer,
  InfoFont,
  EmptyContainer,
  EmptyTitle,
};