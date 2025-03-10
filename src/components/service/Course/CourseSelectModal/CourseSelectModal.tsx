import React from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import S from './CourseSelectModal.style';
import TierCircle from '@/components/service/TierCircle';
import { CourseInfo } from '@/types/course.types';
import { getTier, getTierNumber } from '@/utils/Tier';

interface CourseSelectModalProps {
  isOpen: boolean;
  course: CourseInfo | null;
  onClose: () => void;
}

const CourseSelectModal: React.FC<CourseSelectModalProps> = ({ isOpen, course, onClose }) => {
  if (!course) {
    return null;
  }

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
          <S.CourseName>{course.name}</S.CourseName>
        </VStack>
        <S.CourseInfoContainer>
          {course.type === 'deadline' && course.duration && (
            <S.CourseInfoItem>
              <S.CourseInfoName>마감일</S.CourseInfoName>
              <p
                style={{ color: 'var(--color-content-text)', fontSize: '28px', fontWeight: 'bold' }}
              >
                {course.duration}일
              </p>
            </S.CourseInfoItem>
          )}
          <S.CourseInfoItem>
            <S.CourseInfoName>총 문제 수</S.CourseInfoName>
            <p style={{ color: 'var(--color-content-text)', fontSize: '28px', fontWeight: 'bold' }}>
              {course.totalProblemCount}개
            </p>
          </S.CourseInfoItem>
          <S.CourseInfoItem>
            <S.CourseInfoName>난이도</S.CourseInfoName>
            <HStack gap={4}>
              <TierCircle
                tier={getTier(course.difficulty.start)}
                number={getTierNumber(course.difficulty.start)}
              />
              <TierCircle
                tier={getTier(course.difficulty.end)}
                number={getTierNumber(course.difficulty.end)}
              />
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
