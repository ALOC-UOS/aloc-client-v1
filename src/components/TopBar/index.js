import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopBarContainer, TopBarLeft, TopBarItem, TopBarButton } from './style';
import loginStatusAtom from '../../store/login/loginStatus';
import { useAtomValue } from 'jotai';

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
  const isLoggedIn = useAtomValue(loginStatusAtom);
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

  const checkTodaySolvedProblem = () => {
    let url = 'https://www.iflab.run/api2/problem/solved';
    axios.put(url);
    window.location.reload();
  };

  const navigate = useNavigate();
  function goRoute(route) {
    if (route === selectedItem) return;
    window.scrollTo(0, 0);
    navigate(route);
  }

  return (
    <TopBarContainer isScroll={isScroll}>
      <TopBarLeft>
        {TopBarItems.map((item, index) => (
          <TopBarItem
            key={index}
            selected={selectedItem === item.route}
            onClick={() => goRoute(item.route)}
          >
            {item.name}
          </TopBarItem>
        ))}
      </TopBarLeft>

      <TopBarButton active={isLoggedIn && active} onClick={() => checkTodaySolvedProblem()}>
        문제 풀었어요!
      </TopBarButton>

      <TopBarButton active={!isLoggedIn} onClick={() => navigate('/login')}>
        로그인
      </TopBarButton>
    </TopBarContainer>
  );
};

export default TopBar;
