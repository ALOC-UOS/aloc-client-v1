import S from './ProblemList.styles';
import { HStack, VStack } from '../../../styles/Stack.styles';
import { useProblem } from '../../../hooks/useProblem';
import BronzeIcon from '../../../assets/bronze-small.png';
import SilverIcon from '../../../assets/silver-small.png';
import GoldIcon from '../../../assets/gold-small.png';
import MemberIcon from '../../../assets/member-icon.svg';
import RightArrowIcon from '../../../assets/right-arrow-in-blue-circle.svg';

export const ProblemListComponent = () => {
  const { problemList } = useProblem();
  console.log(problemList);
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
    <VStack style={{ width: '100%', gap: '16px' }}>
      {problemList.map(problem => (
        <S.ProblemItem key={problem.id}>
          <HStack style={{ gap: '4px' }}>
            <S.ProblemTier src={getTierIcon(problem)} />
            <S.ProblemName>
              {problem.id}. {problem.title}
            </S.ProblemName>
          </HStack>
          <HStack style={{ alignItems: 'center' }}>
            <S.Image src={MemberIcon} alt="member" width={16} height={16} />
            <S.SolvingCount>{problem.solvingCount}명</S.SolvingCount>
            <S.Image
              src={RightArrowIcon}
              alt="right-arrow"
              width={36}
              height={36}
              style={{ marginLeft: '8px' }}
              onClick={() => moveToProblemSite(problem)}
            />
          </HStack>
        </S.ProblemItem>
      ))}
    </VStack>
  );
};
