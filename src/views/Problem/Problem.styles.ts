import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-background);
  width: 100%;
  min-height: 100vh;
  padding: 110px 48px 0;
  gap: 24px;
`;

const Wrapping = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 24px;
  border-radius: 48px;
  overflow: scroll;
  background-color: var(--color-foreground);
`;

const Button = styled.div<{ selected: boolean }>`
  width: 100%;
  height: fit-content;
  color: var(--color-title-text);
  font-size: 16px;
  text-align: center;
  padding: 16px 0;
  background-color: var(--color-white);
  border-radius: 48px;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.selected &&
    css`
      color: var(--color-white);
      pointer-events: none;
      background-color: var(--color-blue);
    `}

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.03s;
    filter: brightness(0.8);
    transform: scale(0.95);
  }
`;

export default {
  ProblemContainer,
  Wrapping,
  Button,
};
