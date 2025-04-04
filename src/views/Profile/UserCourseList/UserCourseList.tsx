import { VStack } from '@/components/common/Stack';
import UserCourseItem from '@/components/service/Course/UserCourseItem';
import { UserCourse } from '@/types/course.types';

interface UserCourseListProps {
  userCourses: UserCourse[];
}

const UserCourseList = ({ userCourses }: UserCourseListProps) => {
  return (
    <VStack gap={8}>
      {userCourses.map((course) => (
        <UserCourseItem key={course.id} course={course} />
      ))}
    </VStack>
  );
};

export default UserCourseList;
