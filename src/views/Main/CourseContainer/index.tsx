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

const CourseContainer = () => {
  const { isLoading, todayProblem, userCourses, getUserCourses, checkTodayProblem } =
    useUserCourses();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
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
