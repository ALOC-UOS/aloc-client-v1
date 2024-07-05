import React from 'react';
import { InputBox } from './style';

const TextInputBox = ({ placeholder, onChange }) => {
  return <InputBox placeholder={placeholder} onChange={onChange} />;
};

export default TextInputBox;
