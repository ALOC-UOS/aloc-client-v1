import S from './ProblemList.styles';
import { HStack, VStack } from '../../../components/Stack';
import { useProblem } from '../../../hooks/useProblem';
import MemberIcon from '../../../assets/icons/member.svg';
import ActiveMemberIcon from '../../../assets/icons/active-member.svg';
import ArrowRightCircleFillBlueIcon from '../../../assets/icons/arrow.right.circle.fill.blue.svg';
import LogoDark from '../../../assets/images/logo.season2.dark.png';
import { tierStyleConfig } from '../../../styles/tier.config';
import { getProblemTier } from '../../../utils';

export const ProblemListComponent = () => {
  const { problemList, fetchSolvedUserList, selectedProblemId, selectedSeason } = useProblem();

  const moveToProblemSite = problem => {
    window.open(`https://www.acmicpc.net/problem/${problem.problemId}`);
  };

  return (
    <VStack gap={16} style={{ width: '100%', height: 'fit-content' }}>
      {problemList.length === 0 ? (
        <S.EmptyContainer>
          <img src={LogoDark} alt="empty-problem" width={64} height={64} />
          {selectedSeason === 1 ? (
            <S.EmptyTitle>
              시즌 1에는 <br />
              HALF 코스가 없어요!
            </S.EmptyTitle>
          ) : (
            <S.EmptyTitle>
              해당 알고리즘의
              <br /> 문제가 없어요!
            </S.EmptyTitle>
          )}
        </S.EmptyContainer>
      ) : (
        <>
          {problemList.map((problem, index) => (
            <S.ProblemItem key={problem.id} delay={index}>
              <HStack gap={4}>
                <S.ProblemTier
                  src={tierStyleConfig[getProblemTier(problem.difficulty)]?.icon.small}
                />
                <S.ProblemName>
                  {problem.problemId}. {problem.title}
                </S.ProblemName>
              </HStack>
              <HStack alignItems="center">
                <HStack
                  style={{ alignItems: 'center', cursor: 'pointer' }}
                  onClick={() => fetchSolvedUserList(problem.id)}
                >
                  <S.Image
                    src={problem.id === selectedProblemId ? ActiveMemberIcon : MemberIcon}
                    alt="member"
                    width={16}
                    height={16}
                  />
                  <S.SolvingCount>{problem.solvingCount}명</S.SolvingCount>
                </HStack>
                <S.Image
                  src={ArrowRightCircleFillBlueIcon}
                  alt="right-arrow"
                  width={36}
                  height={36}
                  style={{ marginLeft: 16 }}
                  onClick={() => moveToProblemSite(problem)}
                />
              </HStack>
            </S.ProblemItem>
          ))}
        </>
      )}
    </VStack>
  );
};
