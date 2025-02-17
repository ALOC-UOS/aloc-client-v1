import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const AppearProblemItem = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    transform:scale(1.2);
  }
  100% {
    opacity: 1;
  }
`;
const AppearHorizontalLine = keyframes`
  0% {
    opacity: 0;
    transform:scale(0.5);
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProblemNumber = styled.div`
  color: var(--color-white);
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.64px;
`;

const ProblemItemWrapper = styled.div<{delay: number, disabled?: boolean}>`
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  animation: ${AppearProblemItem} 1.6s ease forwards;
  animation-delay: ${props => props.delay + 2}s;
  opacity: 0;

  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const ProblemItem = styled.div<{isSolved: boolean, backgroundColor: string}>`
  transition: all 0.3s;
  position: relative;

  width: 64px;
  height: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${props => props.isSolved ? 1 : 0.5};
  border-radius: 50%;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom, var(--color-white-50), transparent);
    padding: 1px;
    border-radius: 24px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    border-radius: 50%;
  }

  &:hover {
    opacity: 1;
    background-color: ${props => props.backgroundColor};
    transform: scale(1.2);

    &:before {
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    }
  }
`;

const HorizontalLine = styled.hr<{delay: number}>`
  animation: ${AppearHorizontalLine} ${props => props.delay + 5}s ease forwards;
  border: 0;
  width: 28px;
  height: 1px;
  background-color: var(--color-white);
`;

export default { ProblemNumber, ProblemItemWrapper, ProblemItem, HorizontalLine };
