import React, { useEffect, useState } from 'react';
import { InputBox } from './style';
const Input = React.forwardRef(({ placeholder, isFocused, type }, ref) => {
  const [text, setText] = useState('');
  useEffect(() => {
    setText('');
  }, [isFocused]);
  return (
    <InputBox
      type={type}
      ref={ref}
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder={placeholder}
      isFocused={isFocused}
    />
  );
});
export default React.memo(Input);
