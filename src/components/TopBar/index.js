import logo from '../../assets/logo.svg';
import typo from '../../assets/typo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TopBarContainer,
  TopBarLeft,
  TopBarRight,
  TopBarItem,
  TopBarButton,
  ImageWrapper,
  LogoImage,
  TypoImage,
  UserImage,
  UserImageWrapper,
} from './style';
import useLoginState from '../../hooks/useLoginState';

const TopBarItems = [
  {
    name: '메인 화면',
    route: '/',
  },
  {
    name: '문제 목록',
    route: '/problem',
  },
  {
    name: '구성원',
    route: '/member',
  },
  {
    name: '상점',
    route: '/shop',
  },
];

const TopBar = ({ active }) => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);
  const [isScroll, setIsScroll] = useState(false);
  const { isLoggedIn } = useLoginState();
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setSelectedItem('/');
    } else if (path === '/problem/' || path === '/problem') {
      setSelectedItem('/problem');
    } else if (path === '/member/' || path === '/member') {
      setSelectedItem('/member');
    } else if (path === '/shop/' || path === '/shop') {
      setSelectedItem('/shop');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  function goRoute(route) {
    if (route === selectedItem) return;
    window.scrollTo(0, 0);
    navigate(route);
  }

  return (
    <TopBarContainer isScroll={isScroll}>
      <TopBarLeft onClick={() => navigate('/')}>
        <ImageWrapper>
          <LogoImage src={logo} />
        </ImageWrapper>
        <ImageWrapper>
          <TypoImage src={typo} />
        </ImageWrapper>
      </TopBarLeft>
      <TopBarRight>
        {TopBarItems.map((item, index) => (
          <TopBarItem
            key={index}
            selected={selectedItem === item.route}
            onClick={() => goRoute(item.route)}
          >
            {item.name}
          </TopBarItem>
        ))}
        {isLoggedIn ? (
          // <UserImageWrapper>
          //   <UserImage src={logo} />
          // </UserImageWrapper>
          <div></div>
        ) : (
          <TopBarButton active={!isLoggedIn} onClick={() => navigate('/login')}>
            로그인
          </TopBarButton>
        )}
      </TopBarRight>
    </TopBarContainer>
  );
};

export default TopBar;
