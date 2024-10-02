import S from '../style';
import { HStack } from '../../../styles/Stack.styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginState from '../../../hooks/useLoginState';
import UserMenuConainer from './UserMenuContainer';
import { TopBarItems } from '../constants';
import { goRoute } from '../utils';

const TopBarRight = () => {
  const [selectedItem, _] = useState(window.location.pathname);
  const { isLoggedIn } = useLoginState();
  const navigate = useNavigate();

  useEffect(() => {
    const shopChecked = localStorage.getItem('shopChecked');
    if (shopChecked === null) {
      // shopChecked 항목이 없으면 false로 초기화
      localStorage.setItem('shopChecked', 'false');
    }
  }, []);

  return (
    <HStack style={{ gap: 40 }}>
      {TopBarItems.map((item, index) => (
        <S.TopBarItem
          key={index}
          selected={selectedItem === item.route}
          onClick={() => goRoute(item.route, selectedItem, navigate)}
        >
          {item.name}
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
