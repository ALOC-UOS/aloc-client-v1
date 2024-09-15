import S from './ProblemList.styles';
import { HStack, VStack } from '../../../styles/Stack.styles';
import { useProblem } from '../../../hooks/useProblem';
import BronzeIcon from '../../../assets/bronze-small.png';
import SilverIcon from '../../../assets/silver-small.png';
import GoldIcon from '../../../assets/gold-small.png';
import MemberIcon from '../../../assets/member-icon.svg';
import ActiveMemberIcon from '../../../assets/active-member-icon.svg';
import RightArrowIcon from '../../../assets/right-arrow-in-blue-circle.svg';
import Season2Logo from '../../../assets/logo-season2.png';

export const ProblemListComponent = () => {
  const { problemList, fetchSolvedUserList, selectedProblemId, selectedSeason } = useProblem();
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
    window.open(`https://www.acmicpc.net/problem/${problem.problemId}`);
  };

  return (
    <VStack style={{ width: '100%', height: 'fit-content', gap: '16px' }}>
      {problemList.length === 0 ? (
        <S.EmptyContainer>
          <img src={Season2Logo} alt="empty-problem" width={64} height={64} />
          {/* <S.EmptyTitle>설정에 맞는 문제 목록이 없어요</S.EmptyTitle> */}
          {selectedSeason === 1 ? (
            <S.EmptyTitle>시즌 1에는 HALF 코스가 없어요!</S.EmptyTitle>
          ) : (
            <S.EmptyTitle>
              그동안 수고하셨어요. <br /> 시즌 3로 만나요!
            </S.EmptyTitle>
          )}
        </S.EmptyContainer>
      ) : (
        <>
          {problemList.map((problem, index) => (
            <S.ProblemItem key={problem.id} delay={index}>
              <HStack style={{ gap: '4px' }}>
                <S.ProblemTier src={getTierIcon(problem)} />
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
