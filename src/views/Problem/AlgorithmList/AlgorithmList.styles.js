import styled, { css } from 'styled-components';

const AlgorithmListContainer = styled.div`
  display: flex;
`;

const AlgorithmItem = styled.div`
  min-width: 232px;
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 48px;
  background-color: ${props => props.theme.white};
  gap: 8px;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.selected &&
    css`
      pointer-events: none;
      background-color: ${props.theme.primary};
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
  color: ${props => props.theme.primary};
  font-size: 12px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.primary};
  border-radius: 24px;

  ${props =>
    props.selected &&
    css`
      color: ${props.theme.white};
      border: 1px solid ${props.theme.white};
    `}
`;

const AlgorithmName = styled.p`
  color: ${props => props.theme.contentText};
  font-size: 16px;

  ${props =>
    props.selected &&
    css`
      color: ${props.theme.white};
    `}
`;

export default { AlgorithmListContainer, AlgorithmItem, WeekText, AlgorithmName };
