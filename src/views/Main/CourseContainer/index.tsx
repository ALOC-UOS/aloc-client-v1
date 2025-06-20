import ProblemContentError from './SliderContainer/TodayProblemContainer/error';
import TierIcons from './TierIcons';
import { VStack } from '@/components/common/Stack';
import SliderContainer from './SliderContainer';
import useUserCourses from '@/hooks/useUserCourses';
import Background from './Background';
import SolveCheckButton from './SolveCheckButton';
import Confetti from '@/components/common/Confetti';
import Button from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { pathname } from '@/lib/constants/pathnames';
import { CourseInfo, CourseType, SortType } from '@/types/course.types';
import CircularCourseLayout from './CircularCourseLayout';
import { Dispatch, SetStateAction } from 'react';

interface CourseContainerProps {
  courses: CourseInfo[];
  isLoading: boolean;
  courseType: CourseType | null;
  sortType: SortType;
  currentPage: number;
  setCourseType: Dispatch<SetStateAction<CourseType | null>>;
  setSortType: Dispatch<SetStateAction<SortType>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CourseContainer = ({
  courses,
  isLoading,
  courseType,
  sortType,
  currentPage,
  setCourseType,
  setSortType,
  setCurrentPage,
}: CourseContainerProps) => {
  const { todayProblem, userCourses } = useUserCourses();
  const navigate = useNavigate();

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
      <>
        <Background color="var(--color-dark-blue)" />
        <VStack justifyContent="center" style={{ height: '100dvh' }}>
          <VStack
            alignItems="flex-start"
            justifyContent="center"
            gap={32}
            style={{
              position: 'relative',
              height: '100%',
              padding: '0 80px',
            }}
          >
            <VStack alignItems="flex-start" gap={24}>
              <h1
                style={{
                  color: 'var(--color-white)',
                  fontSize: 48,
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                }}
              >
                진행중인
                <br />
                코스가 없어요.
              </h1>
              <p
                style={{
                  color: 'var(--color-sub-text)',
                  fontSize: 24,
                  fontWeight: '500',
                }}
              >
                코스를 추가하고 문제를 풀어보세요!
              </p>
            </VStack>
            <Button
              variant="primary"
              onClick={() => navigate(pathname.COURSE_PAGE)}
              style={{ padding: '12px 24px', fontSize: 16 }}
            >
              코스 추가하기
            </Button>
          </VStack>
        </VStack>
        <CircularCourseLayout courses={courses} />
      </>
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
      <SliderContainer />
      <SolveCheckButton />
      <Confetti />
    </>
  );
};

export default CourseContainer;
