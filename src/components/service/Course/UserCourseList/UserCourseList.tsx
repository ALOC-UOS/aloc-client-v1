import { VStack } from '@/components/common/Stack';
import UserCourseItem from '@/components/service/Course/UserCourseItem';
import useAuth from '@/hooks/useAuth';
import useUserCourses from '@/hooks/useUserCourses';
import GoogleLoginButton from '@/components/common/GoogleLogin/GoogleLoginButton';

const UserCourseList = () => {
  const { userCourses } = useUserCourses();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <VStack gap={8} style={{ minWidth: 240 }}>
        <p
          style={{
            color: 'var(--color-sub-text)',
            fontSize: '16px',
            fontWeight: '500',
          }}
        >
          로그인 후 코스를 선택할 수 있어요
        </p>
        <GoogleLoginButton />
      </VStack>
    );
  }

  if (userCourses.length === 0) {
    return (
      <VStack gap={8} style={{ minWidth: 240 }}>
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
    <VStack gap={8} style={{ minWidth: 240 }}>
      {userCourses.map((course) => (
        <UserCourseItem key={course.id} course={course} />
      ))}
    </VStack>
  );
};

export default UserCourseList;
