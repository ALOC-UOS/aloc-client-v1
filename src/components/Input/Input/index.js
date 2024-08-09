import React, { useState } from 'react';
import { InputBox } from './style';
const Input = React.forwardRef(({ placeholder }, ref) => {
  const [text, setText] = useState('');
  return (
    <InputBox
      ref={ref}
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder={placeholder}
    />
  );
});
export default React.memo(Input);
