import { useEffect, useState } from 'react';
import { getProblemTier, moveToProblemSite } from '@/utils/index';
import { serverAPI } from '@/api/axios';
import { tierStyleConfig } from '@/styles/tier.config';
import LockIcon from '@/assets/icons/lock.svg';
import S from './style';
import { Problem, SolvedProblem } from '@/types/problem.types';
import { HStack } from '@/components/Stack';

const DAYS_OF_WEEK = 7;
const MarathonProblemList = () => {
  const [problemData, setProblemData] = useState<SolvedProblem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProblemData();
      const resultWithTier = result.map((problem: Problem) => ({
        ...problem,
        tier: {
          backgroundColor: tierStyleConfig[getProblemTier(problem.difficulty)].backgroundColor,
          color: tierStyleConfig[getProblemTier(problem.difficulty)].color,
          icon: tierStyleConfig[getProblemTier(problem.difficulty)].icon,
        },
      }));
      setProblemData([
        ...resultWithTier,
        ...Array(DAYS_OF_WEEK - resultWithTier.length).fill(null),
      ]);
    };
    fetchData();
  }, []);

  const getProblemData = async () => {
    return await serverAPI
      .get('/daily-problems')
      .then((response) => {
        return response.data.result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const ProblemItem = ({ problem }: { problem: SolvedProblem | null }) => {
    if (!problem) {
      return (
        <S.ProblemItem isSolved={false} backgroundColor="transparent">
          <img src={LockIcon} alt="lock" width="18px" height="26px" />
        </S.ProblemItem>
      );
    }

    return (
      <S.ProblemItem
        isSolved={problem.isSolved}
        backgroundColor={problem.tier.backgroundColor}
        onClick={() => moveToProblemSite(problem.problemId)}
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

  //weekly
  // const renderProblemList = () => {
  //   return problemList.map((problem, index) => (
  //     <div
  //       key={problem.problemId}
  //       style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
  //     >
  //       <ProblemItem
  //         delay={index * 0.2}
  //         isSolved={problem.isSolved}
  //         onClick={() => handleProblemClick(problem.problemId)}
  //       >
  //         <ProblemDifficulty src={getDifficultyIcon(problem.problemDifficulty)} />
  //         <ProblemNumber>{problem.problemId}</ProblemNumber>
  //       </ProblemItem>
  //       {index !== problemList.length - 1 && <HorizontalLine />}
  //     </div>
  //   ));
  // };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      style={{
        position: 'absolute',
        top: '80%',
        bottom: '20%',
      }}
    >
      {problemData.map((problem, index) => (
        <>
          <S.ProblemItemWrapper key={index} delay={index * 0.2} disabled={!problem}>
            <ProblemItem problem={problem} />
          </S.ProblemItemWrapper>
          {index !== DAYS_OF_WEEK - 1 && <S.HorizontalLine delay={index * 0.1} />}
        </>
      ))}
    </HStack>
  );
};

export default MarathonProblemList;
