import React, { ButtonHTMLAttributes } from 'react';
import S from './Button.style';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <S.LoadingSpinner />}
      {children}
    </S.Button>
  );
};

export default Button;
