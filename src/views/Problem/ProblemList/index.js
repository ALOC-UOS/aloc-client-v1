import S from './ProblemList.styles';
import { HStack, VStack } from '../../../styles/Stack.styles';
import { useProblem } from '../../../hooks/useProblem';
import BronzeIcon from '../../../assets/bronze-small.png';
import SilverIcon from '../../../assets/silver-small.png';
import GoldIcon from '../../../assets/gold-small.png';
import MemberIcon from '../../../assets/member-icon.svg';
import RightArrowIcon from '../../../assets/right-arrow-in-blue-circle.svg';
import EmptyProblemIcon from '../../../assets/empty-problem-icon.svg';

export const ProblemListComponent = () => {
  const { problemList, fetchSolvedUserList } = useProblem();
  const getTierIcon = problem => {
    if (problem.difficulty < 6) {
      return BronzeIcon;
    }
    if (problem.difficulty < 11) {
      return SilverIcon;
    }
    return GoldIcon;
  };

  const moveToProblemSite = problem => {
    window.open(`https://www.acmicpc.net/problem/${problem.id}`);
  };

  return (
    <VStack style={{ width: '100%', height: 'fit-content', gap: '16px' }}>
      {problemList.length === 0 ? (
        <S.EmptyContainer>
          <img src={EmptyProblemIcon} alt="empty-problem" width={64} height={64} />
          <S.EmptyTitle>설정에 맞는 문제 목록이 없어요</S.EmptyTitle>
        </S.EmptyContainer>
      ) : (
        <>
          {problemList.map((problem, index) => (
            <S.ProblemItem key={problem.id} delay={index}>
              <HStack style={{ gap: '4px' }}>
                <S.ProblemTier src={getTierIcon(problem)} />
                <S.ProblemName>
                  {problem.id}. {problem.title}
                </S.ProblemName>
              </HStack>
              <HStack style={{ alignItems: 'center' }}>
                <S.Image src={MemberIcon} alt="member" width={16} height={16} />
                <S.SolvingCount onClick={() => fetchSolvedUserList(problem.id)}>
                  {problem.solvingCount}명
                </S.SolvingCount>
                <S.Image
                  src={RightArrowIcon}
                  alt="right-arrow"
                  width={36}
                  height={36}
                  style={{ marginLeft: '16px' }}
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
