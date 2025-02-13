import styled from '@emotion/styled';
import { css } from '@emotion/react';

const AlgorithmListContainer = styled.div`
  display: flex;
`;

const AlgorithmItem = styled.div`
  min-width: 232px;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 48px;
  background-color: var(--color-white);
  gap: 8px;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.selected &&
    css`
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

const WeekText = styled.p`
  color: var(--color-blue);
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid var(--color-blue);
  border-radius: 24px;

  ${props =>
    props.selected &&
    css`
      color: var(--color-white);
      border: 1px solid var(--color-white);
    `}
`;

const AlgorithmName = styled.p`
  color: var(--color-content-text);
  font-size: 16px;

  ${props =>
    props.selected &&
    css`
      color: var(--color-white);
    `}
`;

export default { AlgorithmListContainer, AlgorithmItem, WeekText, AlgorithmName };
