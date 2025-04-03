import S from './CourseItemList.style';
import { CourseInfo } from '@/types/course.types';
import CourseItem from './CourseItem';
import useCourses from '@/hooks/useCourses';
import LoadingIcon from '@/components/common/Icon/Loading';
import { VStack } from '@/components/common/Stack';

interface CourseItemListProps {
  onCourseClick: (course: CourseInfo) => void;
}

const CourseItemList = ({ onCourseClick }: CourseItemListProps) => {
  const { isLoading, courses } = useCourses();

  if (isLoading) {
    return (
      <S.CourseItemList style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <VStack gap={8}>
          <LoadingIcon />
          <S.Message>로딩중...</S.Message>
        </VStack>
      </S.CourseItemList>
    );
  }

  if (courses.length === 0) {
    return (
      <S.CourseItemList style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <S.Message>아직 생성된 코스가 없어요</S.Message>
      </S.CourseItemList>
    );
  }

  return (
    <S.CourseItemList>
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} onClick={() => onCourseClick(course)} />
      ))}
    </S.CourseItemList>
  );
};

export default CourseItemList;
