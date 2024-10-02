import S from './ProblemList.styles';
import { HStack, VStack } from '../../../styles/Stack.styles';
import { useProblem } from '../../../hooks/useProblem';
import MemberIcon from '../../../assets/member-icon.svg';
import ActiveMemberIcon from '../../../assets/active-member-icon.svg';
import RightArrowIcon from '../../../assets/right-arrow-in-blue-circle.svg';
import Season2Logo from '../../../assets/logo-season2.png';
import { tierStyleConfig } from '../../../styles/tierStyleConfig';
import { getProblemTier } from '../../../utils';

export const ProblemListComponent = () => {
  const { problemList, fetchSolvedUserList, selectedProblemId, selectedSeason } = useProblem();

  const moveToProblemSite = problem => {
    window.open(`https://www.acmicpc.net/problem/${problem.problemId}`);
  };

  return (
    <VStack style={{ width: '100%', height: 'fit-content', gap: 16 }}>
      {problemList.length === 0 ? (
        <S.EmptyContainer>
          <img src={Season2Logo} alt="empty-problem" width={64} height={64} />
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
              <HStack style={{ gap: 4 }}>
                <S.ProblemTier
                  src={tierStyleConfig[getProblemTier(problem.difficulty)]?.icon.small}
                />
                <S.ProblemName>
                  {problem.problemId}. {problem.title}
                </S.ProblemName>
              </HStack>
              <HStack style={{ alignItems: 'center' }}>
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
                  src={RightArrowIcon}
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
