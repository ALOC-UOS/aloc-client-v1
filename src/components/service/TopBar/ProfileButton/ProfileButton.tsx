import S from './ProfileButton.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { HStack } from '@/components/common/Stack';
import UserProfileImage from '@/components/service/UserProfileImage';
import Label from '@/components/common/Label';
import useUser from '@/hooks/useUser';
import { pathname } from '@/lib/constants/pathnames';

const ProfileButton = () => {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/';
  const isProfilePage = location.pathname === pathname.PROFILE_PAGE;

  const handleClick = () => {
    navigate(pathname.PROFILE_PAGE);
  };

  if (!user) {
    return null;
  }

  return (
    <S.ButtonContainer onClick={handleClick} transparent={isMainPage || isProfilePage}>
      <HStack alignItems="center" gap={8}>
        <UserProfileImage user={user} width="28px" height="28px" />
        <S.UserNickname transparent={isMainPage || isProfilePage}>{user.nickname}</S.UserNickname>
      </HStack>
      <Label text={`${user.consecutiveSolvedDays}일 째`} isActive={user.todaySolved} />
    </S.ButtonContainer>
  );
};

export default ProfileButton;
