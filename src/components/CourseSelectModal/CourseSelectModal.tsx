import React from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import S from './CourseSelectModal.style';
import TierCircle from '@/components/service/TierCircle';

interface CourseSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseSelectModal: React.FC<CourseSelectModalProps> = ({ isOpen, onClose }) => {
  const PROBLEM_COUNT = 100;

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  const handleStart = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack alignItems="center" gap={24}>
        <VStack alignItems="center" gap={4}>
          <p style={{ color: 'var(--color-sub-text)', fontSize: '16px', fontWeight: '500' }}>
            선택한 코스
          </p>
          <S.CourseName>작심삼일</S.CourseName>
        </VStack>
        <S.CourseInfoContainer>
          <S.CourseInfoItem>
            <S.CourseInfoName>총 문제 수</S.CourseInfoName>
            <p style={{ color: 'var(--color-content-text)', fontSize: '28px', fontWeight: 'bold' }}>
              {PROBLEM_COUNT}개
            </p>
          </S.CourseInfoItem>
          <S.CourseInfoItem>
            <S.CourseInfoName>난이도</S.CourseInfoName>
            <HStack gap={4}>
              <TierCircle tier="bronze" number={1} />
              <TierCircle tier="silver" number={3} />
            </HStack>
          </S.CourseInfoItem>
        </S.CourseInfoContainer>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" onClick={handleClose} fullWidth>
            닫기
          </Button>
          <Button variant="primary" onClick={handleStart} fullWidth>
            시작하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default CourseSelectModal;
