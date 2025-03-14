import S from './CourseItemList.style';
import { CourseInfo } from '@/types/course.types';
import CourseItem from './CourseItem';
import useCourses from '@/hooks/useCourses';

interface CourseItemListProps {
  onCourseClick: (course: CourseInfo) => void;
}

const CourseItemList = ({ onCourseClick }: CourseItemListProps) => {
  const { courses } = useCourses();

  if (courses.length === 0) {
    return (
      <S.CourseItemList style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <S.EmptyMessage>아직 생성된 코스가 없어요</S.EmptyMessage>
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
