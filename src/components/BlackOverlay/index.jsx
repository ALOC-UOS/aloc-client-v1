import { useEffect } from 'react';
import S from './style';

export const BlackOverlay = ({ isOpen, onClick }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return <S.BlackOverlayContainer isOpen={isOpen} onClick={onClick} />;
};
