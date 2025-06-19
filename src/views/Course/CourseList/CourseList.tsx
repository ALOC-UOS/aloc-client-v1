import S from './CourseList.style';
import CourseItem from '@/components/service/Course/CourseItem';
import useCourses from '@/hooks/useCourses';
import LoadingIcon from '@/components/common/Icon/Loading';
import { VStack } from '@/components/common/Stack';
import { CourseType, SortType } from '@/types/course.types';

interface CourseListProps {
  courseType: CourseType | null;
  sortType: SortType;
  currentPage: number;
}

const CourseList = ({ courseType, sortType, currentPage }: CourseListProps) => {
  const { isLoading, courses } = useCourses({ courseType, sortType, currentPage });

  if (isLoading) {
    return (
      <S.CourseList style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <VStack gap={8}>
          <LoadingIcon />
          <S.Message>로딩중...</S.Message>
        </VStack>
      </S.CourseList>
    );
  }

  if (courses.length === 0) {
    return (
      <S.CourseList style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <S.Message>아직 생성된 코스가 없어요</S.Message>
      </S.CourseList>
    );
  }

  return (
    <VStack style={{ width: '100%' }}>
      <S.CourseList>
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </S.CourseList>
    </VStack>
  );
};

export default CourseList;
