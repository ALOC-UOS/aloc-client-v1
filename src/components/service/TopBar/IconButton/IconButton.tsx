import React, { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import S from './IconButton.style';

interface IconButtonProps {
  icon: string | ReactNode;
  activeIcon?: string | ReactNode;
  route: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, activeIcon, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/';

  // 현재 경로가 버튼의 route와 일치하는지 확인
  const isCurrentRoute = location.pathname === route;

  // 아이콘 렌더링 함수
  const renderIcon = () => {
    const iconToRender = isCurrentRoute && activeIcon ? activeIcon : icon;

    if (typeof iconToRender === 'string') {
      return <img src={iconToRender} alt={`icon-${route}`} width={36} height={36} />;
    }
    return iconToRender;
  };

  const handleClick = () => {
    navigate(route);
  };

  return (
    <S.ButtonContainer onClick={handleClick} isMainPage={isMainPage} isActive={isCurrentRoute}>
      {renderIcon()}
    </S.ButtonContainer>
  );
};

export default IconButton;
