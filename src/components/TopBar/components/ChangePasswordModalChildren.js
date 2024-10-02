import Input from '../../Input';
import { VStack } from '../../../styles/Stack.styles';
import { forwardRef } from 'react';

const ChangePasswordModalChildren = forwardRef(
  (
    { nextPasswordRef, changePasswordFocus, checkedNextPasswordRef, checkedChangePasswordFocus },
    ref
  ) => {
    return (
      <VStack style={{ width: '100%', gap: 10 }}>
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
      </VStack>
    );
  }
);

export default ChangePasswordModalChildren;
