import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { InputBox } from './style';
const Input = React.forwardRef(({ initialPlaceholder, isFocused, type }, ref) => {
  const [text, setText] = useState('');
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setValue: value => {
      setText(value);
    },
    getValue: () => {
      return text;
    },
    focus: () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    setPlaceholder: value => {
      setPlaceholder(value);
    },
  }));

  useEffect(() => {
    setText('');
  }, [isFocused]);

  return (
    <InputBox
      type={type}
      ref={inputRef}
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder={placeholder}
      isFocused={isFocused}
    />
  );
});
export default React.memo(Input);
