import React from 'react';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import S from './CourseSelectModal.style';
import TierCircle from '@/components/service/TierCircle';
import { CourseInfo } from '@/types/course.types';
import { getTierByDifficulty, getTierNumberByDifficulty } from '@/utils/Tier';
import { toast } from 'sonner';

interface CourseSelectModalProps {
  isOpen: boolean;
  course: CourseInfo;
  onStart: () => Promise<void>;
  onClose: () => void;
  isLoading: boolean;
}

const CourseSelectModal: React.FC<CourseSelectModalProps> = ({
  isOpen,
  course,
  onStart,
  onClose,
  isLoading,
}) => {
  const handleStart = async () => {
    try {
      await onStart();
      toast.success('코스가 등록됐어요! 완주까지 응원할게요 😆');
    } catch (error) {
      console.error('코스 시작 중 오류 발생:', error);
      toast.error('코스 등록에 실패했어요. 다시 시도해 주세요. 😢');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isBackdropClickable={!isLoading}>
      <VStack alignItems="center" gap={24}>
        <VStack alignItems="center" gap={4}>
          <p style={{ color: 'var(--color-sub-text)', fontSize: '16px', fontWeight: '500' }}>
            선택한 코스
          </p>
          <S.CourseName>{course.name}</S.CourseName>
        </VStack>
        <S.CourseInfoContainer>
          {course.type === 'DEADLINE' && course.duration && (
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
                tier={getTierByDifficulty(course.difficulty.start)}
                number={getTierNumberByDifficulty(course.difficulty.start)}
              />
              <TierCircle
                tier={getTierByDifficulty(course.difficulty.end)}
                number={getTierNumberByDifficulty(course.difficulty.end)}
              />
            </HStack>
          </S.CourseInfoItem>
        </S.CourseInfoContainer>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" onClick={onClose} fullWidth disabled={isLoading}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleStart} fullWidth isLoading={isLoading}>
            시작하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default CourseSelectModal;
