import Modal from '@/components/common/Modal';
import S from './GoogleLoginModal.style';
import GoogleLogoIcon from '@/assets/icons/google-logo.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { VStack } from '@/components/common/Stack';
import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

interface GoogleLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GoogleLoginModal = ({ isOpen, onClose }: GoogleLoginModalProps) => {
  const { getGoogleLoginUrl, setIsAuthenticated } = useAuth();
  const handleGoogleLogin = () => {
    window.open(getGoogleLoginUrl(), '_blank', 'width=500,height=600');
  };

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
          <Modal.Subtitle>로그인 후에 기능을 이용할 수 있어요</Modal.Subtitle>
        </VStack>
        <S.GoogleLoginButton onClick={handleGoogleLogin}>
          <img src={GoogleLogoIcon} alt="Google" width={24} height={24} />
          <span style={{ color: 'var(--color-title-text)', fontSize: '16px', fontWeight: '500' }}>
            Google 계정으로 계속하기
          </span>
        </S.GoogleLoginButton>
      </VStack>
    </Modal>
  );
};

export default GoogleLoginModal;
