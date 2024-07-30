import styled, { keyframes } from 'styled-components';
import { getDifficultyIcon } from '../../utils';
import { dummy } from './dummy';
import { serverAPI } from '../../api/axios';

// const data = dummy;

const getProblemList = async () => {
  await serverAPI
    .get('/weekly-problems')
    .then(res => {
      console.log(res.data.result);
      return res.data.result;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};
const data = getProblemList();

const handleProblemClick = id => {
  window.open(`https://www.acmicpc.net/problem/${id}`, '_blank');
};
const renderProblemList = () => {
  return Object.entries(data).map((problem, idx) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <ProblemItem
          delay={idx * 0.2}
          isSolved={problem.isSolved}
          onClick={() => handleProblemClick(problem.problemId)}
        >
          <ProblemDifficulty src={getDifficultyIcon(problem.problemDifficulty)} />
          <ProblemNumber>{problem.problemId}</ProblemNumber>
        </ProblemItem>
        {idx !== data.length - 1 && <HorizontalLine />}
      </div>
    );
  });
};

const MarathonProblemList = () => {
  return <ProblemListContainer>{renderProblemList()}</ProblemListContainer>;
};
export default MarathonProblemList;

const AppearProblemItem = opacity => keyframes`
 0% {
    opacity: 0;
  }
  20% {
    transform:scale(1.2);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: ${opacity};
  }
  `;
const AppearHorizontalLine = keyframes`
  0% {
    opacity: 0;
    transform:scale(0.5);
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProblemListContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 80%;
  bottom: 20%;
`;
const ProblemDifficulty = styled.img`
  width: 24px;
  height: 24px;
`;
const ProblemNumber = styled.div`
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.64px;
`;
const ProblemItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border: 1px solid #fff;
  border-radius: 50%;
  opacity: 0;
  animation: ${props => AppearProblemItem(props.isSolved ? '1' : '0.5')} 1.6s ease forwards;
  animation-delay: ${props => props.delay}s;
  &:hover {
    width: 80px;
    height: 80px;
    ${ProblemDifficulty} {
      transform: scale(1.2);
    }
    ${ProblemNumber} {
      transform: scale(1.2);
    }
  }
`;
const HorizontalLine = styled.hr`
  animation: ${AppearHorizontalLine} 3s ease forwards;
  border: 0;
  width: 26px;
  align: left;
  height: 1px;
  background: #fff;
`;
