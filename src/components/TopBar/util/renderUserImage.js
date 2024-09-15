import styled from 'styled-components';
import memberIcon from '../../../assets/member-icon.svg';
import DefaultProfile from '../../../assets/default-profile.svg';

export const renderUserImage = (user, userMenu) => {
  return user ? (
    <UserImageWrapper>
      {user.profileImageFileName ? (
        <UserImage
          src={`https://www.iflab.run/files/user/profile/${user.profileImageFileName}`}
          onClick={userMenu.toggle}
        />
      ) : (
        <UserImage src={memberIcon} onClick={userMenu.toggle} />
      )}
    </UserImageWrapper>
  ) : (
    <UserImageWrapper>
      <UserImage src={DefaultProfile} />
    </UserImageWrapper>
  );
};

const UserImageWrapper = styled.div``;
const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  cursor: pointer;
`;
