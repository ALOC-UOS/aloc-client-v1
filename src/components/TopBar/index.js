import logo from '../../assets/logo.svg';
import typo from '../../assets/typo.svg';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
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
import useUserState from '../../hooks/useUserState';
import DefaultProfile from '../../assets/default-profile.svg';
import useContainer from '../../hooks/useContainer';
import Button from '../Buttons';
import useModal from '../../hooks/useModal';
import { useRef } from 'react';
import { serverAPI } from '../../api/axios';
import { Message } from '../Message';

const TopBarItems = [
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
  const { isLoggedIn, initLoginStatus } = useLoginState();
  const { user } = useUserState();
  const navigate = useNavigate();
  const nextPasswordRef = useRef();
  const [messageText, setMessageText] = useState('');

  const userMenu = useContainer();
  const logoutModal = useModal({
    description: '정말 로그아웃하시겠어요?',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    onOk: () => {
      initLoginStatus();
    },
  });
  const chagePasswordModal = useModal({
    cancelText: '취소',
    closable: true,
    onOk: () => {
      serverAPI
        .patch('/user/reset-password', { password: nextPasswordRef.current.value })
        .then(response => {
          setMessageText(response.data.result);
          chagePasswordModal.setIsPending(false);
          passwordChangeMessage.toast();
        })
        .catch(error => {
          if (error.data) {
            setMessageText(error.data.result);
            passwordChangeMessage.toast();
          } else {
            console.log(error);
          }
        });
    },
  });
  const passwordChangeMessage = Message();

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

  function goRoute(route) {
    if (route === selectedItem) return;
    window.scrollTo(0, 0);
    navigate(route);
  }

  const renderUserImage = () => {
    return user ? (
      <UserImageWrapper>
        <UserImage
          src={`https://avatars.githubusercontent.com/${user.githubId}`}
          onClick={userMenu.toggle}
        />
      </UserImageWrapper>
    ) : (
      <UserImageWrapper>
        <UserImage src={DefaultProfile} />
      </UserImageWrapper>
    );
  };

  return (
    <TopBarContainer isScroll={isScroll}>
      {passwordChangeMessage.render({
        children: (
          <div style={{ fontSize: 15, fontWeight: 400 }}> ✅&nbsp;&nbsp;&nbsp;{messageText}</div>
        ),
      })}
      {logoutModal.render()}
      {chagePasswordModal.render({
        children: (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Input ref={nextPasswordRef} placeholder={'변경할 비밀번호'} />
          </div>
        ),
      })}
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
          <>
            {renderUserImage()}
            <div style={{ position: 'absolute', right: 0, margin: 10, marginTop: 64 }}>
              <userMenu.render>
                <Button
                  onClick={() => {
                    chagePasswordModal.show();
                  }}
                >
                  비빌번호 변경
                </Button>
                <Button
                  color={'red'}
                  onClick={() => {
                    userMenu.hide();
                    logoutModal.show();
                  }}
                >
                  로그아웃
                </Button>
              </userMenu.render>
            </div>
          </>
        ) : (
          <TopBarButton active={!isLoggedIn} onClick={() => navigate('/login')}>
            로그인
          </TopBarButton>
        )}
      </TopBarRight>
    </TopBarContainer>
  );
};

export default React.memo(TopBar);
