import { useEffect } from 'react';
import S from './style';

export const BlackScreen = ({ isOpen, onClick }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <S.BlackScreenContainer isOpen={isOpen} onClick={onClick} />;
};
