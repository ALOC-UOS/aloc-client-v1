import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ProblemContainer, ContentContainer, ProblemList, ProblemItem, ProblemInfoWrap, ProblemName, ProblemDifficulty, ProblemTags, ProblemTag, ProblemTagText, ProblemCorrect, ProblemCorrectNum, ProblemRightWrap, ProblemButton, WeekList, WeekItem, WeekTitle, AlgorithmName } from './style';
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

  function moveToBaekjoonSite(number) {
    window.open("https://www.acmicpc.net/problem/" + number, "_blank");
  };

  function loadProblemData(algorithmId) {
    let url = 'https://www.iflab.run/api/show/problem/' + algorithmId;
    axios.get(url)
      .then(response => {
        setProblemData(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };

  function loadAlgorithmList() {
    let url = 'https://www.iflab.run/api/show/algorithm';
    axios.get(url)
      .then(response => {
        setAlgorithmList(response.data);
        const algorithmId = response.data[0].algorithmId;
        setSelectedWeek(response.data[0].id);
        loadProblemData(algorithmId);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };
      
  function openSolvedUserList(id) {
    setIsOpenedModal(true);
    let url = 'https://www.iflab.run/api/show/problem/solved-user/' + id;
    axios.get(url)
      .then(response => {
        setSolvedMemberList(response.data);
      })
      .catch(error => {
        console.error('API 요청 중 오류 발생:');
      });
  };

  function selectWeek(week) {
    setSelectedWeek(week);
    const algorithmId = AlgorithmList.find((algorithm) => algorithm.id === week).algorithmId;
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
          { AlgorithmList.map((week, index) => (
            <WeekItem
              key={index}
              isActive={selectedWeek === week.id}
              onClick={() => selectWeek(week.id)}
            >
              <WeekTitle isActive={selectedWeek === week.id}>
                {week.id}주차
              </WeekTitle>
              <AlgorithmName isActive={selectedWeek === week.id}>
                {week.name}
              </AlgorithmName>
            </WeekItem>
          ))}
        </WeekList>
        <ProblemList>
          {ProblemData.map((problem, index) => (
            <ProblemItem key={index}>
              <ProblemInfoWrap>
                <ProblemName>
                  <ProblemDifficulty src={problem.difficulty < 6 ? Bronze : problem.difficulty < 11 ? Silver : problem.difficulty < 16 ? Gold : Platinum} />
                  {problem.id}. {problem.title}
                </ProblemName>
                <ProblemTags>
                  {JSON.parse(problem.tags).map((tag, index) => (
                    <ProblemTag key={index}>
                      <ProblemTagText># {tag.korean}</ProblemTagText>
                      <ProblemTagText>{tag.english}</ProblemTagText>
                    </ProblemTag>
                  ))}
                </ProblemTags>
              </ProblemInfoWrap>
              <ProblemRightWrap>
                <ProblemCorrect onClick={() => openSolvedUserList(problem.id)}>
                  맞힌 사람
                  <ProblemCorrectNum> {problem.solved}명</ProblemCorrectNum>
                </ProblemCorrect>
                <ProblemButton onClick={() => moveToBaekjoonSite(problem.id)}>
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
