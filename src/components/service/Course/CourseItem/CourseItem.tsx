import { HStack, VStack } from '@/components/common/Stack';
import S from './CourseItem.style';
import { CourseInfo } from '@/types/course.types';
import { getTierByDifficulty, getTierNumberByDifficulty } from '@/lib/utils/Tier';
import Number from '@/components/service/TierCircle/Number';
import { tierStyleConfig } from '@/styles/tier.config';
import BookIcon from '@/assets/icons/book.svg';
import CourseSelectModal from '@/components/service/Course/CourseSelectModal';
import GoogleLoginModal from '@/components/common/GoogleLogin/GoogleLoginModal';
import ExceededModal from '@/components/service/Course/ExceededModal';
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import useUserCourses from '@/hooks/useUserCourses';
import useModal from '@/hooks/useModal';
import ReactDOM from 'react-dom';
import { toast } from 'sonner';
import Label from '@/components/common/Label';
import CheckIcon from '@/assets/icons/check.green.svg';
import CancelIcon from '@/assets/icons/cancel.red.svg';
import LoadingIcon from '@/assets/icons/loading.blue.svg';

interface CourseItemProps {
  course: CourseInfo;
}

type ModalType = 'login' | 'exceeded' | 'course';

interface StateConfig {
  variant: 'success' | 'failed' | 'loading';
  text: string;
  type: 'icon' | 'circle';
  icon?: string;
}

const CourseItem = ({ course }: CourseItemProps) => {
  const { isAuthenticated } = useAuth();
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const { isOpen, show, hide } = useModal();
  const { isLoading, selectedCourse, setSelectedCourse, addCourse, userCourses } = useUserCourses();
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const getModalType = (isAuthenticated: boolean, coursesCount: number): ModalType => {
    if (!isAuthenticated) return 'login';
    if (coursesCount >= 3) return 'exceeded';
    return 'course';
  };

  const determineModalType = (): ModalType => {
    return getModalType(isAuthenticated, userCourses.length);
  };

  const handleModalClose = () => {
    hide();
    setIsAnimationComplete(false);
    setTimeout(() => {
      setModalType(null);
      setSelectedCourse(null);
      setIsAnimationComplete(true);
    }, 300);
  };

  const handleCourseStart = async () => {
    if (!selectedCourse) return;

    try {
      const result = await addCourse(selectedCourse.id);
      if (result.success) {
        setTimeout(() => {
          toast.success('코스가 등록됐어요! 완주까지 응원할게요 😆');
        }, 300);
      } else {
        console.error('코스 시작 실패:', result.error);
        toast.error(result.error);
      }
    } catch (error) {
      console.error('코스 시작 중 오류 발생:', error);
      toast.error('코스 등록에 실패했어요. 다시 시도해 주세요. 😢');
    } finally {
      handleModalClose();
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
    if (!isOpen && isAnimationComplete) return null;

    let modalContent = null;
    switch (modalType) {
      case 'login':
        modalContent = <GoogleLoginModal isOpen={isOpen} onClose={handleModalClose} />;
        break;
      case 'exceeded':
        modalContent = <ExceededModal isOpen={isOpen} onClose={handleModalClose} />;
        break;
      case 'course':
        if (selectedCourse) {
          modalContent = (
            <CourseSelectModal
              isOpen={isOpen}
              course={selectedCourse}
              onStart={handleCourseStart}
              onClose={handleModalClose}
              isLoading={isLoading}
            />
          );
        }
        break;
    }

    return modalContent ? ReactDOM.createPortal(modalContent, document.body) : null;
  };

  const renderStateLabel = () => {
    if (!isAuthenticated || !course.status || course.status === 'NOT_STARTED') return null;

    const stateConfig: Record<string, StateConfig> = {
      SUCCESS: {
        variant: 'success',
        text: '완주 성공',
        type: 'icon',
        icon: CheckIcon,
      },
      FAILED: {
        variant: 'failed',
        text: '실패',
        type: 'icon',
        icon: CancelIcon,
      },
      IN_PROGRESS: {
        variant: 'loading',
        text: '진행중',
        type: 'icon',
        icon: LoadingIcon,
      },
    };

    const config = stateConfig[course.status];
    if (!config) return null;

    const labelProps = {
      variant: config.variant,
      className: 'state-label',
      children: config.text,
      ...(config.type === 'icon'
        ? { type: 'icon' as const, icon: config.icon! }
        : { type: 'circle' as const }),
    };

    return <Label {...labelProps} />;
  };

  return (
    <>
      <S.CourseItemContainer onClick={onClick}>
        {renderStateLabel()}
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
