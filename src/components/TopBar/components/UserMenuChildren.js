import Button from '../../Buttons';
const UserMenuChildren = ({
  showChangePasswordModal,
  showProfileChangeModal,
  hideUserMenu,
  showLogoutModal,
}) => {
  return (
    <>
      <Button
        onClick={() => {
          showChangePasswordModal();
        }}
      >
        비밀번호 변경
      </Button>
      <Button
        onClick={() => {
          showProfileChangeModal();
        }}
      >
        프로필 사진 변경
      </Button>
      <Button
        color={'red'}
        onClick={() => {
          hideUserMenu();
          showLogoutModal();
        }}
      >
        로그아웃
      </Button>
    </>
  );
};
export default UserMenuChildren;
