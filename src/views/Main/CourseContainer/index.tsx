import ProblemContentError from './SilderContainer/TodayProlemContainer/error';
import TierIcons from './TierIcons';
import { VStack } from '@/components/common/Stack';
import SilderContainer from './SilderContainer';
import useUserCourses from '@/hooks/useUserCourses';
import Background from './Background';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';
import SolveCheckButton from './SolveCheckButton';
import Confetti from '@/components/common/Confetti';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { pathname } from '@/constants/pathnames';

const CourseContainer = () => {
  const { isLoading, todayProblem, userCourses, getUserCourses, checkTodayProblem } =
    useUserCourses();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.baekjoonId) {
      getUserCourses();
    }
  }, [user]);

  if (isLoading) {
    return (
      <VStack
        alignItems="center"
        justifyContent="center"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100dvh',
          backgroundColor: 'var(--color-black)',
        }}
      />
    );
  }

  if (userCourses.length === 0) {
    return (
      <VStack
        alignItems="center"
        justifyContent="center"
        gap={32}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100dvh',
          backgroundColor: 'var(--color-black)',
        }}
      >
        <VStack alignItems="center" gap={8}>
          <p style={{ color: 'var(--color-white)', fontSize: 24, fontWeight: 'bold' }}>
            진행중인 코스가 존재하지 않아요.
          </p>
          <p style={{ color: 'var(--color-sub-text)', fontSize: 16, fontWeight: '500' }}>
            코스를 추가하고 문제를 풀어보세요!
          </p>
        </VStack>
        <Button variant="primary" onClick={() => navigate(pathname.COURSE_PAGE)}>
          코스 추가하기
        </Button>
      </VStack>
    );
  }

  if (!userCourses || !todayProblem) {
    return (
      <VStack
        alignItems="center"
        justifyContent="center"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100dvh',
          backgroundColor: 'var(--color-black)',
        }}
      >
        <ProblemContentError error={'error'} />
      </VStack>
    );
  }

  return (
    <>
      <Background color={todayProblem.tier.backgroundColor} />
      <TierIcons tier={todayProblem.tier} key={todayProblem.problemId} />
      <SilderContainer />
      <SolveCheckButton />
      <Confetti />
    </>
  );
};

export default CourseContainer;
