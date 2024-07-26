import styled, { css } from 'styled-components';

const ProblemContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.background};
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
  background-color: ${props => props.theme.foreground};
`;

const Button = styled.div`
  width: 100%;
  color: ${props => props.theme.titleText};
  font-size: 16px;
  text-align: center;
  padding: 16px 0;
  background-color: ${props => props.theme.white};
  border-radius: 48px;
  cursor: pointer;
  user-select: none;

  ${props =>
    props.selected &&
    css`
      color: ${props.theme.white};
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

export default {
  ProblemContainer,
  Wrapping,
  Button,
};
