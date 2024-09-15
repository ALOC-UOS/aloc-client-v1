import Input from '../../Input/Input';
import { forwardRef } from 'react';

const ChangePasswordModalChildren = forwardRef(
  (
    { nextPasswordRef, changePasswordFocus, checkedNextPasswordRef, checkedChangePasswordFocus },
    ref
  ) => {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Input
          type={'password'}
          ref={nextPasswordRef}
          isFocused={changePasswordFocus}
          initialPlaceholder={'변경할 비밀번호'}
        />
        <Input
          type={'password'}
          ref={checkedNextPasswordRef}
          isFocused={checkedChangePasswordFocus}
          initialPlaceholder={'비밀번호 재입력'}
        />
      </div>
    );
  }
);

export default ChangePasswordModalChildren;
