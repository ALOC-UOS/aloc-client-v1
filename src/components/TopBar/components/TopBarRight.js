import S from '../style';
import { HStack } from '../../../styles/Stack.styles';
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
    <HStack style={{ gap: 40 }}>
      {TopBarItems.map((item, index) => (
        <S.TopBarItem
          key={index}
          selected={selectedItem === item.route}
          onClick={() => goRoute(item.route)}
        >
          {item.name}
          {item.route === '/shop' && shopUpdated && (
            <span style={{ color: 'red', marginLeft: 5 }}>•</span>
          )}
        </S.TopBarItem>
      ))}
      {isLoggedIn ? (
        <UserMenuConainer />
      ) : (
        <S.TopBarButton active={!isLoggedIn} onClick={() => navigate('/login')}>
          로그인
        </S.TopBarButton>
      )}
    </HStack>
  );
};
export default TopBarRight;
