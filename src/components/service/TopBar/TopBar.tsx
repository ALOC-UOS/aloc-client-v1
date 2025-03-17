import S from './TopBar.style';
import { HStack } from '@/components/common/Stack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '@/assets/images/logo.season2.white.svg';
import AlocText from '@/assets/images/aloc-text.svg';
import CourseWhiteIcon from '@/assets/icons/course.white.svg';
import CourseBlueIcon from '@/assets/icons/course.blue.svg';
import UsersWhiteIcon from '@/assets/icons/users.white.svg';
import UsersBlueIcon from '@/assets/icons/users.blue.svg';
import IconButton from './IconButton';
import ProfileButton from './ProfileButton';
import useModal from '@/hooks/useModal';
import GoogleLoginModal from '../GoogleLoginModal';
import useUser from '@/hooks/useUser';

const TopBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isLoggedIn } = useUser();
  const { isOpen: isLoginModalOpen, show: showLoginModal, hide: hideLoginModal } = useModal();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <S.TopBarContainer isScroll={isScroll}>
        <HStack gap={8} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={LogoWhite} width={40} height={40} />
          <img src={AlocText} width={74} height={41} />
        </HStack>
        <HStack gap={16}>
          <IconButton icon={CourseBlueIcon} activeIcon={CourseWhiteIcon} route="/course" />
          <IconButton icon={UsersBlueIcon} activeIcon={UsersWhiteIcon} route="/users" />
          {isLoggedIn ? (
            <ProfileButton />
          ) : (
            <S.LoginButton onClick={showLoginModal}>로그인</S.LoginButton>
          )}
        </HStack>
      </S.TopBarContainer>

      <GoogleLoginModal isOpen={isLoginModalOpen} onClose={hideLoginModal} />
    </>
  );
};

export default TopBar;
