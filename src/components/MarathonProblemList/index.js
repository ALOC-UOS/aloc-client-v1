import { getDifficultyIcon } from '../../utils';
import { serverAPI } from '../../api/axios';
import { useEffect, useState } from 'react';
import lock from '../../assets/lock.svg';
import {
  ProblemListContainer,
  ProblemDifficulty,
  ProblemNumber,
  ProblemItem,
  HorizontalLine,
} from './style';

const DAYS_OF_WEEK = 7;
const MarathonProblemList = () => {
  const [problemData, setproblemData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getproblemData();
      setproblemData(result);
    };
    fetchData();
  }, []);

  const getproblemData = async () => {
    return await serverAPI
      .get('/weekly-problems')
      .then(res => {
        return res.data.result;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  const handleProblemClick = id => {
    window.open(`https://www.acmicpc.net/problem/${id}`, '_blank');
  };

  const renderProblemList = () => {
    const problemList = problemData.map((problem, idx) => (
      <div
        key={problem.problemId}
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <ProblemItem
          delay={idx * 0.2}
          isSolved={problem.isSolved}
          onClick={() => handleProblemClick(problem.problemId)}
        >
          <ProblemDifficulty src={getDifficultyIcon(problem.problemDifficulty)} />
          <ProblemNumber>{problem.problemId}</ProblemNumber>
        </ProblemItem>
      </div>
    ));
    const lockList = [];
    for (let i = 0; i < DAYS_OF_WEEK - problemData.length; i++) {
      const isLastItem = i === DAYS_OF_WEEK - problemData.length - 1;
      lockList.push(
        <div
          key={i + problemData.length}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <ProblemItem
            delay={problemData.length + (i + 1) * 0.2}
            isSolved={false}
            onClick={() => {}}
          >
            <ProblemDifficulty src={lock} />
          </ProblemItem>
          {!isLastItem && <HorizontalLine />}
        </div>
      );
    }
    return [...problemList, ...lockList];
  };

  //weekly
  // const renderProblemList = () => {
  //   return problemList.map((problem, idx) => (
  //     <div
  //       key={problem.problemId}
  //       style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
  //     >
  //       <ProblemItem
  //         delay={idx * 0.2}
  //         isSolved={problem.isSolved}
  //         onClick={() => handleProblemClick(problem.problemId)}
  //       >
  //         <ProblemDifficulty src={getDifficultyIcon(problem.problemDifficulty)} />
  //         <ProblemNumber>{problem.problemId}</ProblemNumber>
  //       </ProblemItem>
  //       {idx !== problemList.length - 1 && <HorizontalLine />}
  //     </div>
  //   ));
  // };

  return <ProblemListContainer>{renderProblemList()}</ProblemListContainer>;
};

export default MarathonProblemList;
