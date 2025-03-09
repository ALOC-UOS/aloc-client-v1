import { useState } from 'react';
import S from './Course.style';
import { VStack } from '@/components/common/Stack';
import Header from '@/components/common/Header';
import CourseItem from './CourseItem';
import CourseSelectModal from '@/components/service/Course/CourseSelectModal';
import LoginRequiredModal from '@/components/service/Course/LoginRequiredModal';
import useModal from '@/hooks/useModal';
import { CourseInfo } from '@/types/course.types';
import dummyCourseList from './dummyData';

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);
  const { isOpen, show, hide } = useModal();
  const isSignIn = true;

  const handleCourseClick = (course: CourseInfo) => {
    show();
    setSelectedCourse(course);
  };

  const renderModal = () => {
    if (isSignIn && selectedCourse) {
      return <CourseSelectModal isOpen={isOpen} course={selectedCourse} onClose={hide} />;
    }

    return <LoginRequiredModal isOpen={isOpen} onClose={hide} />;
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
      {renderModal()}
    </>
  );
};

export default CoursePage;
