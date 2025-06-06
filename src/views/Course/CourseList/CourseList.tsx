import S from './CourseList.style';
import CourseItem from '@/components/service/Course/CourseItem';
import useCourses from '@/hooks/useCourses';
import LoadingIcon from '@/components/common/Icon/Loading';
import { HStack, VStack } from '@/components/common/Stack';
import Button from '@/components/common/Button/Button';

const CourseList = () => {
  const { isLoading, courses, handlePageChange, totalPage, currentPage } = useCourses();

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
      <HStack alignItems="center" justifyContent="center" gap={8} style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPage }, (_, index) => {
          const pageNum = index + 1;
          const isActive = pageNum === currentPage;

          return (
            <Button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              variant={isActive ? 'primary' : 'text'}
              size="small"
            >
              {pageNum}
            </Button>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default CourseList;
