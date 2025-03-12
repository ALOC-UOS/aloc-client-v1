import React from 'react';
import { VStack } from '@/components/common/Stack';
import Modal from '@/components/common/Modal';
import GoogleLogoIcon from '@/assets/icons/google-logo.svg';
import S from './LoginRequiredModal.style';
interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginRequiredModal: React.FC<LoginRequiredModalProps> = ({ isOpen, onClose }) => {
  const onGoogleLogin = () => {};

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="center" gap={4}>
          <Modal.Title>로그인이 필요한 기능이에요</Modal.Title>
          <Modal.Subtitle>로그인 후에 코스를 선택해보세요</Modal.Subtitle>
        </VStack>
        <VStack alignItems="center" gap={8}>
          <S.GoogleLoginButton onClick={onGoogleLogin}>
            <img src={GoogleLogoIcon} alt="Google" width={24} height={24} />
            <span style={{ color: 'var(--color-title-text)', fontSize: '16px', fontWeight: '500' }}>
              Google 계정으로 계속하기
            </span>
          </S.GoogleLoginButton>
          <S.CloseTextButton onClick={handleClose}>닫기</S.CloseTextButton>
        </VStack>
      </VStack>
    </Modal>
  );
};

export default LoginRequiredModal;
