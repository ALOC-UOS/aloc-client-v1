import { VStack } from '@/components/common/Stack';
import UserCourseItem from '@/components/service/Course/UserCourseItem';
import useUserCourses from '@/hooks/useUserCourses';

const UserCourseList = () => {
  const { userCourses } = useUserCourses();

  if (userCourses.length === 0) {
    return (
      <VStack gap={8}>
        <p
          style={{
            color: 'var(--color-sub-text)',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          진행중인 코스가 없습니다
        </p>
      </VStack>
    );
  }

  return (
    <VStack gap={8}>
      {userCourses.map((course) => (
        <UserCourseItem key={course.id} course={course} />
      ))}
    </VStack>
  );
};

export default UserCourseList;
