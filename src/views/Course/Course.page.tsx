import { useState } from 'react';
import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseItemList from './CourseItemList';
import CourseSelectModal from '@/components/service/Course/CourseSelectModal';
import GoogleLoginModal from '@/components/service/GoogleLoginModal';
import useModal from '@/hooks/useModal';
import { CourseInfo } from '@/types/course.types';
import ExceededModal from '@/components/service/Course/ExceededModal';
import useUser from '@/hooks/useUser';
import useCourse from '@/hooks/useCourse';
import useUserCourses from '@/hooks/useUserCourses';

type ModalType = 'login' | 'exceeded' | 'course';

const getModalType = (isLoggedIn: boolean, coursesCount: number): ModalType => {
  if (!isLoggedIn) return 'login';
  if (coursesCount >= 3) return 'exceeded';
  return 'course';
};

const CoursePage = () => {
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const { isOpen, show, hide } = useModal();
  const { userCourses } = useUserCourses();
  const { isLoading, selectedCourse, setSelectedCourse, addCourse } = useCourse();
  const { isLoggedIn } = useUser();

  const determineModalType = (): ModalType => {
    return getModalType(isLoggedIn, userCourses.length);
  };

  const handleCourseClick = (course: CourseInfo) => {
    setSelectedCourse(course);
    const modalType = determineModalType();
    setModalType(modalType);
    show();
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

  return (
    <>
      <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
        <Header title="코스 목록" />
        <CourseItemList onCourseClick={handleCourseClick} />
      </VStack>
      {modalType === 'login' && <GoogleLoginModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'exceeded' && <ExceededModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'course' && selectedCourse && (
        <CourseSelectModal
          isOpen={isOpen}
          course={selectedCourse}
          onStart={handleCourseStart}
          onClose={hide}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default CoursePage;
