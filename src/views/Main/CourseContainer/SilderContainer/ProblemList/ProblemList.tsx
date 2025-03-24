import { moveToProblemProblemSite } from '@/utils/index';
import LockIcon from '@/assets/icons/lock.svg';
import CloseIcon from '@/assets/icons/close.svg';
import S from './ProblemList.style';
import { Problem } from '@/types/problem.types';
import { HStack } from '@/components/common/Stack';
import { UserCourse } from '@/types/course.types';

const ProblemList = ({ course, isVisible }: { course: UserCourse; isVisible: boolean }) => {
  return (
    <HStack
      alignItems="center"
      justifyContent="flex-start"
      style={{
        position: 'absolute',
        top: 'calc(100% + 48px)',
        left: '50%',
        transform: 'translateX(-50%)',
        overflow: 'scroll',
        width: '644px',
        padding: 12,
        opacity: isVisible ? 1 : 0,
        userSelect: isVisible ? 'auto' : 'none',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {Array.from({ length: course.totalProblemCount }, (_, index) => {
        const problem = course.problems[index] || null;
        return (
          <HStack key={index} alignItems="center">
            <S.ProblemItemWrapper
              delay={index * 0.2}
              disabled={!problem || problem.status === 'CLOSED'}
            >
              <ProblemItem problem={problem} />
            </S.ProblemItemWrapper>
            {index !== course.totalProblemCount - 1 && <S.HorizontalLine delay={index * 0.1} />}
          </HStack>
        );
      })}
    </HStack>
  );
};

export default ProblemList;

const ProblemItem = ({ problem }: { problem: Problem | null }) => {
  if (!problem) {
    return <LockedProblemItem />;
  }

  if (problem.status === 'CLOSED') {
    return <ClosedProblemItem />;
  }

  return (
    <S.ProblemItem
      isSolved={problem.status === 'SOLVED'}
      backgroundColor={problem.tier.backgroundColor}
      onClick={() => moveToProblemProblemSite(problem.problemId)}
    >
      <img
        src={problem.tier.icon.small}
        alt="tier"
        width="24px"
        height="24px"
        style={{ zIndex: 1 }}
      />
      <S.ProblemNumber>{problem.problemId}</S.ProblemNumber>
    </S.ProblemItem>
  );
};

const LockedProblemItem = () => (
  <S.ProblemItem isSolved={false} backgroundColor="transparent">
    <img src={LockIcon} alt="lock" width="36px" height="36px" />
  </S.ProblemItem>
);

const ClosedProblemItem = () => (
  <S.ProblemItem isSolved={false} backgroundColor="transparent">
    <img src={CloseIcon} alt="close" width="36px" height="36px" />
  </S.ProblemItem>
);
