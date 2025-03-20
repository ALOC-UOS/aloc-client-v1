import { useState, useEffect, useRef } from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button';
import UserProfileImage from '@/components/service/UserProfileImage';
import useUser from '@/hooks/useUser';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const { isLoading, user, updateUser, updateProfileImage, isUploadingImage } = useUser();
  const [formData, setFormData] = useState({
    baekjoonId: user?.baekjoonId || '',
    nickname: user?.nickname || '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      setFormData({
        baekjoonId: user.baekjoonId || '',
        nickname: user.nickname || '',
      });
    }
  }, [user]);

  const handleChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateUser({ baekjoonId: formData.baekjoonId, nickname: formData.nickname });
    onClose();
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageDelete = async () => {
    try {
      await updateProfileImage(null);
    } catch (error) {
      console.error('프로필 이미지 삭제 실패:', error);
      alert('이미지 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 이미지 파일 타입 체크
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    // 파일 크기 제한 (2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('파일 크기는 2MB 이하여야 합니다.');
      return;
    }

    try {
      await updateProfileImage(file);
    } catch (error) {
      console.error('프로필 이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack alignItems="center" gap={24}>
        <VStack gap={4}>
          <Modal.Title>프로필 정보를 입력해주세요</Modal.Title>
          <Modal.Subtitle>알록 서비스를 이용하기 위해 필요해요</Modal.Subtitle>
        </VStack>
        <VStack alignItems="center" gap={8}>
          <UserProfileImage
            user={user}
            width={'160px'}
            height={'160px'}
            disabled={true}
            isLoading={isUploadingImage}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <HStack gap={12}>
            <p
              style={{
                color: 'var(--color-blue)',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={handleImageClick}
            >
              {isUploadingImage ? '업로드 중...' : '사진 변경하기(선택)'}
            </p>
            {user?.profileImageFileName && (
              <p
                style={{
                  color: 'var(--color-red)',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
                onClick={handleImageDelete}
              >
                삭제하기
              </p>
            )}
          </HStack>
        </VStack>
        <VStack gap={16} style={{ width: '100%' }}>
          <Input
            value={formData.baekjoonId}
            onChange={handleChange('baekjoonId')}
            label="백준 아이디"
            placeholder="백준 아이디를 입력해주세요"
            maxLength={20}
          />
          <Input
            value={formData.nickname}
            onChange={handleChange('nickname')}
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            maxLength={16}
          />
        </VStack>
        <VStack style={{ width: '100%' }}>
          <Button
            variant="primary"
            size="medium"
            fullWidth
            isLoading={isLoading}
            onClick={handleSave}
            disabled={formData.baekjoonId.trim() === '' || formData.nickname.trim() === ''}
          >
            저장하기
          </Button>
        </VStack>
      </VStack>
    </Modal>
  );
};

export default ProfileModal;
