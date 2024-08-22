import styled, { css } from 'styled-components';

const Button = styled.button`
  letter-spacing: -1px;
  color: ${props => props.theme.titleText};
  font-size: 16px;
  font-weight: 500;

  min-width: 140px;
  width: 100%;
  padding: 16px 0;
  background-color: ${props => props.theme.foreground};

  border: none;
  border-radius: 12px;
  outline: none;

  cursor: pointer;
  ${props =>
    props.hover !== 'none' &&
    `&:hover {
    filter: brightness(0.9);
  }`}

  ${props =>
    props.active !== 'none' &&
    `&:active {
    transition: all 0.05s;
    filter: brightness(0.8);
  }`}

  ${props => {
    switch (props.color) {
      case 'white':
        return css`
          border: 1px #a9adb9 solid;
          background-color: #fff;
          transition: none;
         }`;
      case 'blue':
        return css`
          color: #ffffff;
          background-color: #408cff;
        `;
      case 'red':
        return css`
          color: #ffffff;
          background-color: #ff5a5f;
        `;
      case 'gradationBlue':
        return css`
          color: #ffffff;
          background: linear-gradient(180deg, #408cff 0%, #8e9aff 100%);
        `;
      default:
        return;
    }
  }}

  ${props =>
    props.buttonType === 'disabled' &&
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
    ${props =>
    props.size === 'big' &&
    css`
      padding: 30px;
      font-size: 20px;
    `}
`;

export { Button };
