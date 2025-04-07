import S from './TopBar.style';
import { HStack } from '@/components/common/Stack';
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
import GoogleLoginModal from '../../common/GoogleLogin/GoogleLoginModal';
import { pathname } from '@/constants/pathnames';
import useAuth from '@/hooks/useAuth';
import TopBarBackground from './TopBarBackground';

const TopBar = () => {
  const { isAuthenticated } = useAuth();
  const { isOpen: isLoginModalOpen, show: showLoginModal, hide: hideLoginModal } = useModal();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(pathname.MAIN_PAGE);
  };

  return (
    <>
      <S.TopBarContainer>
        <TopBarBackground />
        <HStack alignItems="center" gap={8} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <S.LogoImage src={LogoWhite} alt="logo" />
          <S.AlocTextImage src={AlocText} alt="aloc-text" />
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
