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
    const googleLoginUrl = 'https://api.openaloc.store/oauth2/authorization/google';
    window.location.href = googleLoginUrl;
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

  useEffect(() => {
    const handleMessage = async (event: { origin: string; data: { type: string; code: any } }) => {
      const redirectOrigin = new URL(import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI).origin;
      if (event.origin !== redirectOrigin) return;

      if (event.data.type === 'google-login' && event.data.code) {
        console.log('구글 로그인 코드:', event.data.code);
        try {
          const response = await fetch('https://api.openaloc.store/login/oauth2/code/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: event.data.code }),
            credentials: 'include',
          });

          if (!response.ok) throw new Error('로그인 처리 중 오류가 발생했습니다');

          const userData = await response.json();

          console.log('로그인 성공:', userData);
          hideLoginModal();
          showProfileModal();
        } catch (error) {
          console.error('로그인 처리 중 오류:', error);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [hideLoginModal, showProfileModal]);

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
