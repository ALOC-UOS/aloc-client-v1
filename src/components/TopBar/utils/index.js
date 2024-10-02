import { serverAPI } from '../../../api/axios';
import { MIN_PASSWORD_LENGTH } from '../constants';

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
  if (nextPassword.length < MIN_PASSWORD_LENGTH) {
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

export const uploadImage = async (
  selectedFile,
  setUserInfo,
  setselectedFile,
  setMessageText,
  passwordChangeMessage
) => {
  const formData = new FormData();
  formData.append('file', selectedFile);
  try {
    await serverAPI.post('/images/upload/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const response = await serverAPI.get('/user');
    setUserInfo(response.data.result);
    setselectedFile(null);
  } catch (error) {
    console.log(error);
    if (error.code === 'ERR_NETWORK') {
      setMessageText('이미지 용량이 너무 커요!');
      passwordChangeMessage.toast();
    }
  }
};

export function goRoute(route, selectedItem, navigate) {
  if (route === selectedItem) return;
  window.scrollTo(0, 0);
  if (route === '/shop') {
    localStorage.setItem('shopChecked', 'true');
  }
  navigate(route);
}
