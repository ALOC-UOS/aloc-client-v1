import { useState } from 'react';
import { VStack } from '@/components/common/Stack';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button';
import UserProfileImage from '@/components/service/UserProfileImage';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [baekjoonId, setBaekjoonId] = useState('');
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    console.log('저장');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack alignItems="center" gap={24}>
        <VStack gap={4}>
          <Modal.Title>프로필 정보를 입력해주세요</Modal.Title>
          <Modal.Subtitle>알록 서비스를 이용하기 위해 필요해요</Modal.Subtitle>
        </VStack>
        <VStack alignItems="center" gap={8}>
          <UserProfileImage user={null} width={'160px'} height={'160px'} />
          <p
            style={{
              color: 'var(--color-blue)',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            사진 변경하기(선택)
          </p>
        </VStack>
        <VStack gap={16} style={{ width: '100%' }}>
          <Input
            value={baekjoonId}
            onChange={setBaekjoonId}
            label="백준 아이디"
            placeholder="백준 아이디를 입력해주세요"
            maxLength={16}
          />
          <Input
            value={nickname}
            onChange={setNickname}
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            maxLength={20}
          />
        </VStack>
        <VStack style={{ width: '100%' }}>
          <Button
            variant="primary"
            size="medium"
            fullWidth
            isLoading={isLoading}
            onClick={handleSave}
          >
            저장하기
          </Button>
        </VStack>
      </VStack>
    </Modal>
  );
};

export default ProfileModal;
