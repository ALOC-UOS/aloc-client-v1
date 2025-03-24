import ProblemContentError from '../TodayProlemContainer/error';
import TierIcons from '../TodayProlemContainer/TierIcons';
import { VStack } from '@/components/common/Stack';
import SilderContainer from './SilderContainer';
import useUserCourses from '@/hooks/useUserCourses';
import Background from './Background';

const CourseContainer = () => {
  const { isLoading, todayProblem, userCourses } = useUserCourses();

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
    </>
  );
};

export default CourseContainer;
