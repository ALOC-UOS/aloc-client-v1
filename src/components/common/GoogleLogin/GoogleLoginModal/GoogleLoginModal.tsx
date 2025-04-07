import Modal from '@/components/common/Modal';
import S from './GoogleLoginModal.style';
import CloseIcon from '@/assets/icons/close.svg';
import { VStack } from '@/components/common/Stack';
import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import GoogleLoginButton from '../GoogleLoginButton';

interface GoogleLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleLoginModal = ({ isOpen, onClose }: GoogleLoginModalProps) => {
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    const handleGoogleLoginSuccess = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === 'google-login-success') {
        setIsAuthenticated(true);
        onClose();
        return;
      }

      if (event.data.type === 'google-login-error') {
        console.error('구글 로그인 실패:', event.data.error);
      }
    };

    window.addEventListener('message', handleGoogleLoginSuccess);
    return () => window.removeEventListener('message', handleGoogleLoginSuccess);
  }, [onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <S.CloseButton onClick={onClose}>
        <img src={CloseIcon} alt="닫기" width={24} height={24} onClick={onClose} />
      </S.CloseButton>
      <VStack gap={24}>
        <VStack gap={4}>
          <Modal.Title>로그인</Modal.Title>
          <Modal.Subtitle>로그인 후에 코스를 선택할 수 있어요</Modal.Subtitle>
        </VStack>
        <GoogleLoginButton />
      </VStack>
    </Modal>
  );
};

export default GoogleLoginModal;
