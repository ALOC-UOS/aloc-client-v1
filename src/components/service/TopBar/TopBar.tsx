import S from './TopBar.style';
import { HStack } from '@/components/Stack';
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

const TopBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <S.TopBarContainer
      isScroll={isScroll}
      style={{
        zIndex: 100,
        padding: '16px 40px',
      }}
    >
      <HStack gap={8} onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={LogoWhite} width={40} height={40} />
        <img src={AlocText} width={74} height={41} />
      </HStack>
      <HStack gap={16}>
        <IconButton icon={CoursesBlueIcon} activeIcon={CoursesWhiteIcon} route="/courses" />
        <IconButton icon={UsersBlueIcon} activeIcon={UsersWhiteIcon} route="/users" />
        <S.LoginButton>로그인</S.LoginButton>
        <ProfileButton />
      </HStack>
    </S.TopBarContainer>
  );
};

export default TopBar;
