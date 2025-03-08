import S from './TopBar.style';
import { HStack } from '@/components/common/Stack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '@/assets/images/logo.season2.white.svg';
import AlocText from '@/assets/images/aloc-text.svg';
import CoursesWhiteIcon from '@/assets/icons/courses.white.svg';
import CoursesBlueIcon from '@/assets/icons/courses.blue.svg';
import UsersWhiteIcon from '@/assets/icons/users.white.svg';
import UsersBlueIcon from '@/assets/icons/users.blue.svg';
import IconButton from './IconButton';
import ProfileButton from './ProfileButton';
import useModal from '@/hooks/useModal';
import GoogleLoginModal from './GoogleLoginModal';
import ProfileModal from './ProfileModal';

const TopBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isOpen: isLoginModalOpen, show: showLoginModal, hide: hideLoginModal } = useModal();
  const { isOpen: isProfileModalOpen, show: showProfileModal, hide: hideProfileModal } = useModal();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleGoogleLogin = () => {
    console.log('Google 로그인 시도');
    // 로그인 성공 후 모달 닫기
    hideLoginModal();
    showProfileModal();
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
          <IconButton icon={CoursesBlueIcon} activeIcon={CoursesWhiteIcon} route="/courses" />
          <IconButton icon={UsersBlueIcon} activeIcon={UsersWhiteIcon} route="/users" />
          <S.LoginButton onClick={showLoginModal}>로그인</S.LoginButton>
          <ProfileButton />
        </HStack>
      </S.TopBarContainer>

      <GoogleLoginModal
        isOpen={isLoginModalOpen}
        onClose={hideLoginModal}
        onGoogleLogin={handleGoogleLogin}
      />
      <ProfileModal isOpen={isProfileModalOpen} onClose={hideProfileModal} />
    </>
  );
};

export default TopBar;
