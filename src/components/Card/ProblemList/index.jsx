import React, { useState } from 'react';
import {
  ProblemListContainer,
  ProblemItem,
  ProblemInfoWrap,
  ProblemName,
  ProblemDifficulty,
} from './style';
import Bronze from '../../../assets/bronze-small.png';
import Silver from '../../../assets/silver-small.png';
import Gold from '../../../assets/gold-small.png';
import Platinum from '../../../assets/platinum-small.png';

const ProblemList = () => {
  const [ProblemData, setProblemData] = useState([]);

  function moveProblemPage(number) {
    window.open('https://www.acmicpc.net/problem/' + number, '_blank');
  }

  return (
    <ProblemListContainer>
      {ProblemData.slice(1).map((problem, index) => (
        <ProblemItem key={index} onClick={() => moveProblemPage(problem.id)}>
          <ProblemInfoWrap>
            <ProblemName>
              <ProblemDifficulty
                src={
                  problem.difficulty < 6
                    ? Bronze
                    : problem.difficulty < 11
                      ? Silver
                      : problem.difficulty < 16
                        ? Gold
                        : Platinum
                }
              />
              {problem.id}. {problem.title}
            </ProblemName>
          </ProblemInfoWrap>
        </ProblemItem>
      ))}
    </ProblemListContainer>
  );
};

export default ProblemList;
