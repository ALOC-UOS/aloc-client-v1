import { useRef, useState } from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import UserProfileImage from '@/components/service/UserProfileImage';
import useUser from '@/hooks/useUser';
import S from './Profile.style';
import CoinIcon from '@/assets/icons/coin.svg';
import useUserCourses from '@/hooks/useUserCourses';
import TierCircle from '@/components/service/TierCircle';
import { getTierByUserRank, getTierNumberByUserRank } from '@/utils/Tier';
import Button from '@/components/common/Button';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/Modal';
import Input from '@/components/common/Input';

const ProfilePage = () => {
  const { user } = useUser();
  const { isOpen, show, hide } = useModal();
  const { userCourses } = useUserCourses();
  const [modalType, setModalType] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleClickButton = (type: string) => {
    setModalType(type);
    show();
  };

  if (!user) {
    return (
      <VStack
        style={{
          minHeight: '100dvh',
          backgroundColor: 'var(--color-black)',
        }}
      />
    );
  }

  return (
    <VStack
      style={{
        minHeight: '100dvh',
        backgroundColor: 'var(--color-black-50)',
      }}
    >
      <VStack style={{ flexGrow: 1, position: 'relative' }}>
        <header
          style={{
            zIndex: 1,
            backgroundColor: 'var(--color-black-50)',
            padding: '100px 0 24px',
          }}
        >
          <HStack alignItems="center" justifyContent="space-between" style={{ margin: '0 24px' }}>
            <HStack alignItems="center" gap={16}>
              <UserProfileImage user={user} width="100px" height="100px" />
              <S.NameText>{user.nickname}</S.NameText>
            </HStack>
            <HStack alignItems="center" gap={8}>
              <img src={CoinIcon} alt="coin" width="32px" height="32px" />
              <S.CoinText>{user.coin}개</S.CoinText>
            </HStack>
          </HStack>
        </header>
        <HStack
          alignItems="flex-start"
          gap={24}
          style={{
            zIndex: 1,
            minHeight: '100%',
            flexGrow: 1,
            backgroundColor: 'var(--color-black-75)',
            padding: '24px',
          }}
        >
          <S.CardContainer>
            <VStack
              alignItems="center"
              justifyContent="center"
              gap={8}
              style={{
                width: '192px',
                aspectRatio: '1 / 1',
                outline: '8px solid var(--color-black-50)',
                border: `4px solid ${user.profileBackgroundColor.color1}80`,
                borderRadius: '50%',
                backgroundColor: 'var(--color-black-50)',
              }}
            >
              <p
                style={{
                  color: `${user.profileBackgroundColor.color1}`,
                  opacity: 0.8,
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                연속 일수
              </p>
              <p
                style={{
                  color: `${user.profileBackgroundColor.color1}`,
                  fontSize: '40px',
                  fontWeight: 'bold',
                }}
              >
                {user.consecutiveSolvedDays}일
              </p>
            </VStack>
          </S.CardContainer>
          <S.CardContainer>
            <VStack
              alignItems="center"
              justifyContent="center"
              gap={8}
              style={{
                width: '192px',
                aspectRatio: '1 / 1',
                outline: '8px solid var(--color-black-50)',
                border: `4px solid ${user.profileBackgroundColor.color1}80`,
                borderRadius: '50%',
                backgroundColor: 'var(--color-black-50)',
              }}
            >
              <p
                style={{
                  color: `${user.profileBackgroundColor.color1}`,
                  opacity: 0.8,
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              >
                현재 티어
              </p>
              <TierCircle
                tier={getTierByUserRank(user.rank || 0)}
                number={getTierNumberByUserRank(user.rank || 0)}
                size="large"
              />
            </VStack>
          </S.CardContainer>
          <S.CardContainer>
            <p
              style={{
                color: 'var(--color-sub-text)',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}
            >
              진행중인 코스
            </p>
            {userCourses.length === 0 ? (
              <p
                style={{
                  color: 'var(--color-sub-text)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                진행중인 코스가 여기에 표시됩니다
              </p>
            ) : (
              <VStack gap={8}>
                {userCourses.map((course) => (
                  <VStack
                    key={course.id}
                    alignItems="flex-start"
                    gap={4}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      padding: '12px',
                      borderRadius: '16px',
                      minWidth: '280px',
                    }}
                    onClick={() => {
                      setSelectedCourseId(course.id);
                      handleClickButton('cancelCourse');
                    }}
                  >
                    <p
                      style={{
                        color: 'var(--color-blue)',
                        fontSize: '12px',
                        fontWeight: '500',
                        padding: '4px 8px',
                        border: '1px solid var(--color-blue)',
                        borderRadius: '24px',
                      }}
                    >
                      {course.type}
                    </p>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      gap={8}
                      style={{ width: '100%' }}
                    >
                      <p
                        style={{
                          color: 'var(--color-title-text)',
                          fontSize: '16px',
                          fontWeight: '500',
                        }}
                      >
                        {course.name}
                      </p>
                      <p
                        style={{
                          color: 'var(--color-sub-text)',
                          fontSize: '14px',
                          fontWeight: '500',
                        }}
                      >
                        {course.totalProblemCount}문제
                      </p>
                    </HStack>
                  </VStack>
                ))}
              </VStack>
            )}
          </S.CardContainer>
          <S.CardContainer>
            <p
              style={{
                color: 'var(--color-sub-text)',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '16px',
              }}
            >
              회원 정보
            </p>
            <VStack gap={8} style={{ minWidth: '200px' }}>
              <Button variant="secondary" onClick={() => handleClickButton('nickname')}>
                닉네임 변경
              </Button>
              <Button variant="secondary" onClick={() => handleClickButton('profileImage')}>
                프로필 사진 변경
              </Button>
              <Button variant="danger" onClick={() => handleClickButton('logout')}>
                로그아웃
              </Button>
              {/* <Button variant="danger">회원탈퇴</Button> */}
            </VStack>
          </S.CardContainer>
        </HStack>
      </VStack>
      {modalType === 'nickname' && <NicknameChangeModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'profileImage' && <ProfileImageChangeModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'logout' && <LogoutModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'cancelCourse' && (
        <CancelCourseModal isOpen={isOpen} courseId={selectedCourseId!} onClose={hide} />
      )}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--color-black-50)',
          filter: 'blur(100px)',
        }}
      >
        <UserProfileImage user={user} width="100%" height="100%" disabled={true} />
      </div>
    </VStack>
  );
};

export default ProfilePage;

interface NicknameChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NicknameChangeModal = ({ isOpen, onClose }: NicknameChangeModalProps) => {
  const { updateUser } = useUser();
  const [formData, setFormData] = useState({
    nickname: '',
  });

  const handleChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateUser({ baekjoonId: '', nickname: formData.nickname });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>닉네임 변경</Modal.Title>
          <Modal.Subtitle>새로운 닉네임을 입력해주세요.</Modal.Subtitle>
        </VStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Input
            value={formData.nickname}
            onChange={handleChange('nickname')}
            placeholder="닉네임을 입력해주세요"
            maxLength={16}
          />
        </HStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            닫기
          </Button>
          <Button variant="primary" fullWidth onClick={handleSave} disabled={!formData.nickname}>
            변경하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

interface ProfileImageChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileImageChangeModal = ({ isOpen, onClose }: ProfileImageChangeModalProps) => {
  const { user, isUploadingImage, updateProfileImage } = useUser();
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      onClose();
    } catch (error) {
      console.error('프로필 이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>프로필 사진 변경</Modal.Title>
          <Modal.Subtitle>새로운 프로필 사진을 업로드해주세요.</Modal.Subtitle>
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
        <Button variant="secondary" fullWidth onClick={onClose}>
          닫기
        </Button>
      </VStack>
    </Modal>
  );
};

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  const { logout } = useUser();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>로그아웃을 하시겠어요?</Modal.Title>
        </VStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            닫기
          </Button>
          <Button variant="danger" fullWidth onClick={logout}>
            로그아웃
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

interface CancelCourseModalProps {
  isOpen: boolean;
  courseId: string;
  onClose: () => void;
}

const CancelCourseModal = ({ isOpen, courseId, onClose }: CancelCourseModalProps) => {
  const { deleteCourse } = useUserCourses();

  const handleClickClose = async () => {
    try {
      await deleteCourse(courseId);
      onClose();
    } catch (error) {
      console.error('코스 삭제 중 오류 발생:', error);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>코스를 취소하시겠어요?</Modal.Title>
          <Modal.Subtitle>코스를 취소하면 처음부터 다시 시작해야 해요.</Modal.Subtitle>
        </VStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            닫기
          </Button>
          <Button variant="danger" fullWidth onClick={handleClickClose}>
            취소하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};
