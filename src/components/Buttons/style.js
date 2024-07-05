import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.titleText};
  font-size: 16px;
  font-weight: 500;

  min-width: 140px;
  width: 100%;
  padding: 16px 0;
  background-color: ${props => props.theme.background};

  border: none;
  border-radius: 12px;
  outline: none;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    transition: all 0.05s;
    filter: brightness(0.8);
  }

  ${props =>
    props.color === 'blue' &&
    css`
      color: #ffffff;
      background-color: #408cff;
    `}
  ${props =>
    props.color === 'red' &&
    css`
      color: #ffffff;
      background-color: #ff5a5f;
    `}
  ${props =>
    props.type === 'disabled' &&
    css`
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      width: fit-content;
      font-size: 14px;
      padding: 8px 16px;
      min-width: 40px;
      border-radius: 8px;
      align-self: flex-end;
    `}
`;

export { Button };
