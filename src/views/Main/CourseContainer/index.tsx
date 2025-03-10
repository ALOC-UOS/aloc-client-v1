import ProblemContentError from '../TodayProlemContainer/error';
import TierIcons from '../TodayProlemContainer/TierIcons';
import MarathonProblemList from '../TodayProlemContainer/MarathonProblemList';
import { VStack } from '@/components/common/Stack';
import SilderContainer from './SilderContainer';
import useUserCourse from './SilderContainer/useUserCourse';
import Background from './Background';

const CourseContainer = () => {
  const { todayProblem, courseList } = useUserCourse();

  if (!courseList || !todayProblem) {
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
