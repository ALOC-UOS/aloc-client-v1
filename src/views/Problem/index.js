import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  ProblemContainer,
  ContentContainer,
  ProblemList,
  ProblemItem,
  ProblemInfoWrap,
  ProblemName,
  ProblemDifficulty,
  ProblemTags,
  ProblemTag,
  ProblemTagText,
  ProblemCorrect,
  ProblemCorrectNum,
  ProblemRightWrap,
  ProblemButton,
  WeekList,
  WeekItem,
  WeekTitle,
  AlgorithmName,
} from './style';
import TopBar from '../../components/TopBar';
import ListModal from '../../components/ListModal';
import BlackScreen from '../../components/BlackScreen';
import Bronze from '../../assets/bronze-small.png';
import Silver from '../../assets/silver-small.png';
import Gold from '../../assets/gold-small.png';
import Platinum from '../../assets/platinum-small.png';

const Problem = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [ProblemData, setProblemData] = useState([]);
  const [SolvedMemberList, setSolvedMemberList] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [AlgorithmList, setAlgorithmList] = useState([]);

  useEffect(() => {
    loadAlgorithmList();
  }, []);

  function moveProblemPage(number) {
    window.open('https://www.acmicpc.net/problem/' + number, '_blank');
  }

  function loadProblemData(algorithmId) {
    let season = 2;
    let url =
      'https://www.iflab.run/api2/problems?season=' +
      season +
      '&course' +
      '=FULL' +
      '&algorithmId=' +
      algorithmId;
    axios
      .get(url)
      .then(response => {
        setProblemData(response.data.result);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  function loadAlgorithmList() {
    let url = 'https://www.iflab.run/api2/algorithm/2';
    axios
      .get(url)
      .then(response => {
        setAlgorithmList(response.data.result.algorithms);
        const algorithmId = response.data.result.algorithms[0].algorithmId;
        setSelectedWeek(response.data.result.algorithms[0].week);
        loadProblemData(algorithmId);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
        console.error(error);
      });
  }

  function openSolvedUserList(id) {
    setIsOpenedModal(true);
    let url = 'https://www.iflab.run/api2/problem/' + id + '/solved-users';
    axios
      .get(url)
      .then(response => {
        setSolvedMemberList(response.data.result);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  }

  function selectWeek(week) {
    setSelectedWeek(week);
    const algorithmId = AlgorithmList.find(algorithm => algorithm.week === week).algorithmId;
    loadProblemData(algorithmId);
  }

  function closeModal() {
    setIsOpenedModal(false);
  }

  return (
    <ProblemContainer>
      <TopBar />
      <ListModal
        isOpen={isOpenedModal}
        modalTitle="맞힌 사람 목록"
        memberListData={SolvedMemberList}
        closeModal={closeModal}
      />
      <BlackScreen isOpen={isOpenedModal} />
      <ContentContainer>
        <WeekList>
          {AlgorithmList.map(algorithm => (
            <WeekItem
              key={algorithm.week}
              isActive={selectedWeek === algorithm.week}
              onClick={() => selectWeek(algorithm.week)}
            >
              <WeekTitle isActive={selectedWeek === algorithm.week}>{algorithm.week}주차</WeekTitle>
              <AlgorithmName isActive={selectedWeek === algorithm.week}>
                {algorithm.name}
              </AlgorithmName>
            </WeekItem>
          ))}
        </WeekList>
        <ProblemList>
          {ProblemData.map((problem, index) => (
            <ProblemItem key={index}>
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
                <ProblemTags>
                  {problem.tags.map((tag, index) => (
                    <ProblemTag key={tag.id}>
                      <ProblemTagText># {tag.koreanName}</ProblemTagText>
                      <ProblemTagText>{tag.englishName}</ProblemTagText>
                    </ProblemTag>
                  ))}
                </ProblemTags>
              </ProblemInfoWrap>
              <ProblemRightWrap>
                <ProblemCorrect onClick={() => openSolvedUserList(problem.id)}>
                  맞힌 사람
                  <ProblemCorrectNum> {problem.solvingCount}명</ProblemCorrectNum>
                </ProblemCorrect>
                <ProblemButton onClick={() => moveProblemPage(problem.id)}>
                  문제 확인하기
                </ProblemButton>
              </ProblemRightWrap>
            </ProblemItem>
          ))}
        </ProblemList>
      </ContentContainer>
    </ProblemContainer>
  );
};

export default Problem;
