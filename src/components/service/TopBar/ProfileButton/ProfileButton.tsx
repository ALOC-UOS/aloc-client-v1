import { useState } from 'react';
import S from './ProfileButton.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { HStack } from '@/components/common/Stack';
import UserProfileImage from '@/components/service/UserProfileImage';
import Label from '@/components/common/Label';

const ProfileButton = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/';

  const handleClick = () => {
    navigate('/profile/me');
  };

  return (
    <S.ButtonContainer onClick={handleClick} isMainPage={isMainPage}>
      <HStack alignItems="center" gap={8}>
        <UserProfileImage user={null} width="28px" height="28px" />
        <S.UserNickname isMainPage={isMainPage}>유저 닉네임</S.UserNickname>
      </HStack>
      <Label />
    </S.ButtonContainer>
  );
};

export default ProfileButton;
