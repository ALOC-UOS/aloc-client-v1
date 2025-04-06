import { HStack, VStack } from '@/components/common/Stack';
import S from './CourseItem.style';
import { CourseInfo } from '@/types/course.types';
import { getTierByDifficulty, getTierNumberByDifficulty } from '@/utils/Tier';
import Number from '@/components/service/TierCircle/Number';
import { tierStyleConfig } from '@/styles/tier.config';
import BookIcon from '@/assets/icons/book.svg';
import CourseSelectModal from '@/components/service/Course/CourseSelectModal';
import GoogleLoginModal from '@/components/service/GoogleLoginModal';
import ExceededModal from '@/components/service/Course/ExceededModal';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import useUserCourses from '@/hooks/useUserCourses';
import useModal from '@/hooks/useModal';
import ReactDOM from 'react-dom';

interface CourseItemProps {
  course: CourseInfo;
}

type ModalType = 'login' | 'exceeded' | 'course';

const CourseItem = ({ course }: CourseItemProps) => {
  const { isAuthenticated } = useAuth();
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const { isOpen, show, hide } = useModal();
  const { isLoading, selectedCourse, setSelectedCourse, addCourse, userCourses } = useUserCourses();

  const getModalType = (isAuthenticated: boolean, coursesCount: number): ModalType => {
    if (!isAuthenticated) return 'login';
    if (coursesCount >= 3) return 'exceeded';
    return 'course';
  };

  const determineModalType = (): ModalType => {
    return getModalType(isAuthenticated, userCourses.length);
  };

  const handleCourseStart = async () => {
    if (!selectedCourse) return;

    try {
      const success = await addCourse(selectedCourse);
      if (success) {
        hide();
      }
    } catch (error) {
      console.error('코스 시작 중 오류 발생:', error);
      // 여기에 사용자에게 오류 메시지를 표시하는 로직 추가 가능
    }
  };

  if (!course) {
    return null;
  }

  const onClick = () => {
    setSelectedCourse(course);
    const newModalType = determineModalType();
    setModalType(newModalType);
    show();
  };

  const renderModal = () => {
    if (!isOpen) return null;

    let modalContent = null;
    switch (modalType) {
      case 'login':
        modalContent = <GoogleLoginModal isOpen={isOpen} onClose={hide} />;
        break;
      case 'exceeded':
        modalContent = <ExceededModal isOpen={isOpen} onClose={hide} />;
        break;
      case 'course':
        if (selectedCourse) {
          modalContent = (
            <CourseSelectModal
              isOpen={isOpen}
              course={selectedCourse}
              onStart={handleCourseStart}
              onClose={hide}
              isLoading={isLoading}
            />
          );
        }
        break;
    }

    return modalContent ? ReactDOM.createPortal(modalContent, document.body) : null;
  };
  return (
    <>
      <S.CourseItemContainer onClick={onClick}>
        <VStack alignItems="flex-start" gap={4}>
          <S.CourseType>{course.type}</S.CourseType>
          <S.CourseName>{course.name}</S.CourseName>
        </VStack>
        <HStack gap={16} style={{ width: '100%' }}>
          <S.InfoContainer>
            <S.CourseLabel>문제 수</S.CourseLabel>
            <HStack gap={4} alignItems="center">
              <img src={BookIcon} alt="문제 수" width={24} height={24} />
              <S.CourseInfo>{course.totalProblemCount}개</S.CourseInfo>
            </HStack>
          </S.InfoContainer>
          <S.InfoContainer>
            <S.CourseLabel>난이도</S.CourseLabel>
            <HStack alignItems="center" gap={4}>
              <VStack
                alignItems="center"
                justifyContent="center"
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor:
                    tierStyleConfig[getTierByDifficulty(course.difficulty.start)].color,
                  borderRadius: '50%',
                }}
              >
                <Number
                  number={getTierNumberByDifficulty(course.difficulty.start)}
                  width={20}
                  height={20}
                />
              </VStack>
              <hr style={{ width: 4, height: 2, backgroundColor: 'var(--color-sub-text)' }} />
              <VStack
                alignItems="center"
                justifyContent="center"
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor:
                    tierStyleConfig[getTierByDifficulty(course.difficulty.end)].color,
                  borderRadius: '50%',
                }}
              >
                <Number
                  number={getTierNumberByDifficulty(course.difficulty.end)}
                  width={20}
                  height={20}
                />
              </VStack>
            </HStack>
          </S.InfoContainer>
        </HStack>
      </S.CourseItemContainer>
      {renderModal()}
    </>
  );
};

export default CourseItem;
