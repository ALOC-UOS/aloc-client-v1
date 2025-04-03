import S from './TopBar.style';
import { HStack } from '@/components/common/Stack';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '@/assets/images/logo.white.png';
import AlocText from '@/assets/images/aloc-text.png';
import CourseWhiteIcon from '@/assets/icons/course.white.svg';
import CourseBlueIcon from '@/assets/icons/course.blue.svg';
import UsersWhiteIcon from '@/assets/icons/users.white.svg';
import UsersBlueIcon from '@/assets/icons/users.blue.svg';
import IconButton from './IconButton';
import ProfileButton from './ProfileButton';
import useModal from '@/hooks/useModal';
import GoogleLoginModal from '../GoogleLoginModal';
import { pathname } from '@/constants/pathnames';
import useAuth from '@/hooks/useAuth';

const TopBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { isAuthenticated } = useAuth();
  const { isOpen: isLoginModalOpen, show: showLoginModal, hide: hideLoginModal } = useModal();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(pathname.MAIN_PAGE);
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
        <HStack alignItems="center" gap={8} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={LogoWhite} alt="logo" width={40} height={40} key="logo" />
          <img src={AlocText} alt="aloc-text" width={79} height={27} key="aloc-text" />
        </HStack>
        <HStack gap={16}>
          <IconButton icon={CourseBlueIcon} activeIcon={CourseWhiteIcon} route="/course" />
          <IconButton icon={UsersBlueIcon} activeIcon={UsersWhiteIcon} route="/users" />
          {isAuthenticated ? (
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
