import { getDifficultyIcon } from '../../utils';
import { serverAPI } from '../../api/axios';
import { useEffect, useState } from 'react';
import {
  ProblemListContainer,
  ProblemDifficulty,
  ProblemNumber,
  ProblemItem,
  HorizontalLine,
} from './style';

const MarathonProblemList = () => {
  const [problemList, setProblemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProblemList();
      setProblemList(result);
    };
    fetchData();
  }, []);

  const getProblemList = async () => {
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
    return problemList.map((problem, idx) => (
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
        {idx !== problemList.length - 1 && <HorizontalLine />}
      </div>
    ));
  };

  return <ProblemListContainer>{renderProblemList()}</ProblemListContainer>;
};

export default MarathonProblemList;
