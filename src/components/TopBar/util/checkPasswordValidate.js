import { serverAPI } from '../../../api/axios';
const resetInput = (ref, placeholderText) => {
  ref.current.setValue('');
  ref.current.setPlaceholder('');
  ref.current.setPlaceholder(placeholderText);
};
export const checkPasswordValidate = (
  nextPasswordRef,
  checkedNextPasswordRef,
  setChangePasswordFocus,
  setCheckedChangePasswordFocus,
  setMessageText,
  changePasswordModal,
  passwordChangeMessage
) => {
  const nextPassword = nextPasswordRef.current.getValue();
  const checkedPassword = checkedNextPasswordRef.current.getValue();
  //비밀번호 검증
  if (nextPassword.length <= 3) {
    resetInput(nextPasswordRef, '비밀번호는 4글자 이상이어야 합니다.');
    checkedNextPasswordRef.current.setValue('');
    setChangePasswordFocus(true);

    return false;
  }
  if (nextPassword !== checkedPassword) {
    resetInput(checkedNextPasswordRef, '비밀번호가 일치하지 않습니다.');
    setCheckedChangePasswordFocus(true);
    return false;
  }
  serverAPI
    .patch('/user/reset-password', { password: nextPasswordRef.current.getValue() })
    .then(response => {
      setMessageText(response.data.result);
      setChangePasswordFocus(false);
      resetInput(nextPasswordRef, '비밀번호는 4글자 이상이어야 합니다.');
      resetInput(checkedNextPasswordRef, '비밀번호가 일치하지 않습니다.');
      changePasswordModal.setIsPending(false);
      passwordChangeMessage.toast();
    })
    .catch(error => {
      if (error.data) {
        setMessageText(error.data.result);
        passwordChangeMessage.toast();
      } else {
        console.log(error);
      }
    });
};
