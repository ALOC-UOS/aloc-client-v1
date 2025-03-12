import { useState } from 'react';
import S from './Course.style';
import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseItem from './CourseItem';
import CourseSelectModal from '@/components/service/Course/CourseSelectModal';
import LoginRequiredModal from '@/components/service/Course/LoginRequiredModal';
import useModal from '@/hooks/useModal';
import { CourseInfo } from '@/types/course.types';
import { dummyCourseList } from '../../dummy/Course';
import ExceededModal from '@/components/service/Course/ExceededModal';

type ModalType = 'login' | 'exceeded' | 'course';

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [userCourses, setUserCourses] = useState<CourseInfo[]>([]);
  const { isOpen, show, hide } = useModal();

  const isSignIn = true;

  const getModalType = (): ModalType => {
    if (!isSignIn) {
      return 'login';
    }
    if (userCourses.length > 3) {
      return 'exceeded';
    }

    return 'course';
  };

  const handleCourseClick = (course: CourseInfo) => {
    const modalType = getModalType();
    setSelectedCourse(course);
    setModalType(modalType);
    setUserCourses([...userCourses, course]);
    console.log(userCourses.length);
    show();
  };

  return (
    <>
      <VStack gap={24} style={{ padding: '72px 40px', minHeight: '100dvh' }}>
        <Header title="코스 목록" />
        <S.ContentContainer>
          {dummyCourseList.map((course) => (
            <CourseItem key={course.id} course={course} onClick={() => handleCourseClick(course)} />
          ))}
        </S.ContentContainer>
      </VStack>
      {modalType === 'login' && <LoginRequiredModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'exceeded' && <ExceededModal isOpen={isOpen} onClose={hide} />}
      {modalType === 'course' && (
        <CourseSelectModal isOpen={isOpen} course={selectedCourse} onClose={hide} />
      )}
    </>
  );
};

export default CoursePage;
