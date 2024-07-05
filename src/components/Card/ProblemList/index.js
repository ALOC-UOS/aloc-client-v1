import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    loadProblemData();
  }, []);

  function moveProblemPage(number) {
    window.open('https://www.acmicpc.net/problem/' + number, '_blank');
  }

  function loadProblemData() {
    let url = 'https://www.iflab.run/api/show/problem';
    axios
      .get(url)
      .then(response => {
        setProblemData(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
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
