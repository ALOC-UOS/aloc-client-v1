import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Button = styled.button`
  letter-spacing: -1px;
  color: var(--color-title-text);
  font-size: 16px;
  font-weight: 500;

  min-width: 140px;
  width: 100%;
  padding: 16px 0;
  background-color: var(--color-foreground);

  border: none;
  border-radius: 12px;
  outline: none;

  cursor: pointer;
  ${(props) =>
    props.hover !== 'none' &&
    `&:hover {
    filter: brightness(0.9);
  }`}

  ${(props) =>
    props.active !== 'none' &&
    `&:active {
    transition: all 0.05s;
    filter: brightness(0.8);
  }`}

 ${(props) =>
    props.color === 'white' &&
    css`
      border: 1px #a9adb9 solid;
      background-color: #fff;
      transition: none;
    `}
  ${(props) =>
    props.color === 'blue' &&
    css`
      color: var(--color-white);
      background-color: var(--color-blue);
    `}
  ${(props) =>
    props.color === 'red' &&
    css`
      color: var(--color-white);
      background-color: var(--color-red);
    `}
  ${(props) =>
    props.buttonType === 'disabled' &&
    css`
      opacity: 0.5;
      user-select: none;
      pointer-events: none;
    `}
  ${(props) =>
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
