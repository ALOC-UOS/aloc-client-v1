import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

const getButtonStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: var(--color-blue, #3182f6);
        color: white;
        border: none;
      `;
    case 'secondary':
      return css`
        background-color: var(--color-foreground, #f5f5f5);
        color: var(--color-content-text, #333333);
        border: none;
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: var(--color-content-text, #333333);
        border: 1px solid var(--color-content-text, #333333);

        &:hover {
          background-color: var(--color-black-10, #0000001a);
        }
      `;
    case 'text':
      return css`
        background-color: transparent;
        color: var(--color-blue, #3182f6);
        border: none;

        &:hover {
          background-color: var(--color-black-10, #0000001a);
        }
      `;
    case 'danger':
      return css`
        background-color: var(--color-red, #ff5a5f);
        color: var(--color-white, #ffffff);
        border: none;
      `;
    default:
      return css``;
  }
};

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 12px;
        font-size: 12px;
        border-radius: 8px;
      `;
    case 'medium':
      return css`
        padding: 16px;
        font-size: 14px;
        border-radius: 12px;
      `;
    case 'large':
      return css`
        padding: 16px 24px;
        font-size: 16px;
        border-radius: 16px;
      `;
    default:
      return css``;
  }
};

const Button = styled.button<{
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  ${(props) => getButtonStyles(props.variant)}
  ${(props) => getButtonSize(props.size)}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default { Button, LoadingSpinner };
