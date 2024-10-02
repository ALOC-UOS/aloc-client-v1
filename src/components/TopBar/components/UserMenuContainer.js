import { useState, useRef } from 'react';
import useUserState from '../../../hooks/useUserState';
import useLoginState from '../../../hooks/useLoginState';

import { Message } from '../../Message';
import useModal from '../../../hooks/useModal';
import useContainer from '../../../hooks/useContainer';

import { checkPasswordValidate, renderUserImage, uploadImage } from '../utils';

import ChangePasswordModalChildren from '../components/ChangePasswordModalChildren';
import ProfileChangeModalChildren from '../components/ProfileChangeModalChildren';
import UserMenuChildren from '../components/UserMenuChildren';

const UserMenuConainer = () => {
  const [messageText, setMessageText] = useState('');
  const [selectedFile, setselectedFile] = useState(null);
  const [changePasswordFocus, setChangePasswordFocus] = useState(false);
  const [checkedChangePasswordFocus, setCheckedChangePasswordFocus] = useState(false);

  const nextPasswordRef = useRef();
  const checkedNextPasswordRef = useRef();

  const userMenu = useContainer();
  const { user, setUserInfo } = useUserState();
  const { initLoginStatus } = useLoginState();

  const logoutModal = useModal({
    description: '정말 로그아웃하시겠어요?',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    onOk: () => {
      initLoginStatus();
    },
  });

  const profileChangeModal = useModal({
    description: '변경할 이미지를 올려주세요',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    onOk: () =>
      uploadImage(selectedFile, setUserInfo, setselectedFile, setMessageText, toastMessage),
  });

  const changePasswordModal = useModal({
    cancelText: '취소',
    closable: true,
    onOk: () =>
      checkPasswordValidate(
        nextPasswordRef,
        checkedNextPasswordRef,
        setChangePasswordFocus,
        setCheckedChangePasswordFocus,
        setMessageText,
        changePasswordModal,
        toastMessage
      ),
  });
  const toastMessage = Message();
  return (
    <>
      {toastMessage.render({
        children: (
          <div style={{ fontSize: 15, fontWeight: 400 }}> ✅&nbsp;&nbsp;&nbsp;{messageText}</div>
        ),
      })}
      {profileChangeModal.render({
        children: (
          <ProfileChangeModalChildren
            selectedFile={selectedFile}
            setselectedFile={setselectedFile}
          />
        ),
      })}
      {changePasswordModal.render({
        children: (
          <ChangePasswordModalChildren
            nextPasswordRef={nextPasswordRef}
            changePasswordFocus={changePasswordFocus}
            checkedNextPasswordRef={checkedNextPasswordRef}
            checkedChangePasswordFocus={checkedChangePasswordFocus}
          />
        ),
      })}
      {logoutModal.render()}
      <div style={{ position: 'absolute', right: 0, margin: 10, marginTop: 64 }}>
        {userMenu.render({
          children: (
            <UserMenuChildren
              showChangePasswordModal={changePasswordModal.show}
              showProfileChangeModal={profileChangeModal.show}
              hideUserMenu={userMenu.hide}
              showLogoutModal={logoutModal.show}
            />
          ),
        })}
      </div>
      {renderUserImage(user, userMenu)}
    </>
  );
};
export default UserMenuConainer;
