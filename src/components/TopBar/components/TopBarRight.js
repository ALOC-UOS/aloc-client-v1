import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginState from '../../../hooks/useLoginState';
import UserMenuConainer from './UserMenuContainer';

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

const TopBarRight = () => {
  const [selectedItem, _setSelectedItem] = useState(window.location.pathname);
  const [shopUpdated, setShopUpdated] = useState(true);
  const { isLoggedIn } = useLoginState();
  const navigate = useNavigate();

  useEffect(() => {
    const shopChecked = localStorage.getItem('shopChecked');
    if (shopChecked === null) {
      // shopChecked 항목이 없으면 false로 초기화
      localStorage.setItem('shopChecked', 'false');
      setShopUpdated(true);
    }
    setShopUpdated(shopChecked === 'false');
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

  return (
    <Container>
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
        <UserMenuConainer />
      ) : (
        <TopBarButton active={!isLoggedIn} onClick={() => navigate('/login')}>
          로그인
        </TopBarButton>
      )}
    </Container>
  );
};
export default TopBarRight;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const TopBarItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.subText};
  cursor: pointer;
  user-select: none;
  &:hover {
    color: ${props => props.theme.titleText};
  }
  ${props =>
    props.selected &&
    css`
      color: ${props => props.theme.primary};
      &:hover {
        color: ${props => props.theme.primary};
      }
    `}
`;

const TopBarButton = styled.div`
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => props.theme.primary};

  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
