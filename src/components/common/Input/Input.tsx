import { ChangeEvent } from 'react';
import S from './Input.style';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  label?: string;
  labelColor?: string;
  error?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  maxLength,
  label,
  labelColor,
  error,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;
    onChange(newValue);
  };

  return (
    <S.InputContainer>
      {label && <S.Label color={labelColor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          maxLength={maxLength}
          hasError={!!error}
        />
        {maxLength && (
          <S.CharCount>
            {value.length}/{maxLength}
          </S.CharCount>
        )}
      </S.InputWrapper>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
