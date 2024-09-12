import styled from 'styled-components';
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
import ProfileChangeModalChildren from './components/ProfileChangeModalChildren';
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
  const [shopUpdated, setShopUpdated] = useState(true);
  const { user, setUserInfo } = useUserState();
  const navigate = useNavigate();
  const nextPasswordRef = useRef();
  const [selectedFile, setselectedFile] = useState(null);
  const checkedNextPasswordRef = useRef();
  const [changePasswordFocus, setChangePasswordFocus] = useState(false);
  const [checkedChangePasswordFocus, setCheckedChangePasswordFocus] = useState(false);
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

  const profileChangeModal = useModal({
    description: '변경할 이미지를 올려주세요',
    cancelText: '취소',
    okText: '확인',
    closable: true,
    onOk: async () => {
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        await serverAPI.post('/images/upload/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const response = await serverAPI.get('/user');
        setUserInfo(response.data.result);
        setselectedFile(null);
      } catch (error) {
        console.log(error);
        if (error.code === 'ERR_NETWORK') {
          setMessageText('이미지 용량이 너무 커요!');
          passwordChangeMessage.toast();
        }
      }
    },
  });
  const changePasswordModal = useModal({
    cancelText: '취소',
    closable: true,
    onOk: () => {
      const nextPassword = nextPasswordRef.current.getValue();
      const checkedPassword = checkedNextPasswordRef.current.getValue();
      //비밀번호 검증
      if (nextPassword.length <= 3) {
        nextPasswordRef.current.focus();
        nextPasswordRef.current.setValue('');
        checkedNextPasswordRef.current.setValue('');
        nextPasswordRef.current.setPlaceholder('비밀번호는 4글자 이상이어야 합니다.');
        setChangePasswordFocus(true);

        return false;
      }
      if (nextPassword !== checkedPassword) {
        checkedNextPasswordRef.current.focus();
        checkedNextPasswordRef.current.setValue('');
        checkedNextPasswordRef.current.setPlaceholder('비밀번호가 일치하지 않습니다.');
        setCheckedChangePasswordFocus(true);
        return false;
      }
      serverAPI
        .patch('/user/reset-password', { password: nextPasswordRef.current.getValue() })
        .then(response => {
          setMessageText(response.data.result);
          setChangePasswordFocus(false);
          nextPasswordRef.current.setValue('');
          checkedNextPasswordRef.current.setValue('');
          nextPasswordRef.current.setPlaceholder('변경할 비밀번호');
          checkedNextPasswordRef.current.setPlaceholder('비밀번호 재입력');
          changePasswordModal.setIsPending(false);
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
    const shopChecked = localStorage.getItem('shopChecked');
    if (shopChecked === null) {
      // shopChecked 항목이 없으면 false로 초기화
      localStorage.setItem('shopChecked', 'false');
      setShopUpdated(true);
    }
    setShopUpdated(shopChecked === 'false');
  }, []);

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
    if (route === '/shop') {
      localStorage.setItem('shopChecked', 'true');
      setShopUpdated(false);
    }
    navigate(route);
  }

  const renderUserImage = () => {
    return user ? (
      <UserImageWrapper>
        <UserImage
          src={`https://www.iflab.run/files/user/profile/${user.profileImageFileName}`}
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
      {profileChangeModal.render({
        children: (
          <ProfileChangeModalChildren
            selectedFile={selectedFile}
            setselectedFile={setselectedFile}
          />
        ),
      })}
      {changePasswordModal.render({
        children: (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Input
              type={'password'}
              ref={nextPasswordRef}
              isFocused={changePasswordFocus}
              initialPlaceholder={'변경할 비밀번호'}
            />
            <Input
              type={'password'}
              ref={checkedNextPasswordRef}
              isFocused={checkedChangePasswordFocus}
              initialPlaceholder={'비밀번호 재입력'}
            />
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
            {item.route === '/shop' && shopUpdated && (
              <span style={{ color: 'red', marginLeft: '5px' }}>•</span>
            )}
          </TopBarItem>
        ))}
        {isLoggedIn ? (
          <>
            {renderUserImage()}
            <div style={{ position: 'absolute', right: 0, margin: 10, marginTop: 64 }}>
              {userMenu.render({
                children: (
                  <>
                    <Button
                      onClick={() => {
                        changePasswordModal.show();
                      }}
                    >
                      비밀번호 변경
                    </Button>
                    <Button
                      onClick={() => {
                        profileChangeModal.show();
                      }}
                    >
                      프로필 사진 변경
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
                  </>
                ),
              })}
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
