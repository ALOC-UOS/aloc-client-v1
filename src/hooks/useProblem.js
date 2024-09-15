import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { useState, useEffect } from 'react';

const API_URL_PREFIX = 'https://www.iflab.run/api2/';
const CURRENT_SEASON = 3;

//atom은 useState와 비슷하나 전역 상태관리가 가능
const selectedSeasonAtom = atom(CURRENT_SEASON);
const selectedCourseAtom = atom('FULL');
const algorithmListAtom = atom([]);
const selectedAlgorithmAtom = atom(null);
const problemListAtom = atom([]);
const solvedUserListAtom = atom([]);

export const useProblem = () => {
  const [selectedSeason, setSelectedSeason] = useAtom(selectedSeasonAtom);
  const [selectedCourse, setSelectedCourse] = useAtom(selectedCourseAtom);
  const [selectedAlgorithm, setSelectedAlgorithm] = useAtom(selectedAlgorithmAtom);
  const [selectedProblemId, setSelectedProblemId] = useState(null);
  const [algorithmList, setAlgorithmList] = useAtom(algorithmListAtom);
  const [problemList, setProblemList] = useAtom(problemListAtom);
  const [solvedUserList, setSolvedUserList] = useAtom(solvedUserListAtom);

  //useEffect: 컴포넌트 렌더링 된 이후에 특정 동작 수행하도록 함
  //AlgorithmList fetch해옴
  useEffect(() => {
    fetchAlgorithmList(selectedSeason);
  }, [selectedSeason]);

  //사용자가 새로운 알고리즘, 코스를 선택하면 문제를 다시 가져오고, 사용자 상태 초기화
  useEffect(() => {
    if (selectedAlgorithm && selectedCourse) {
      fetchProblemList();
      setSelectedProblemId(null);
      setSolvedUserList([]);
    }
  }, [selectedSeason, selectedAlgorithm, selectedCourse]);

  const fetchAlgorithmList = async season => {
    try {
      const url =
        season !== undefined
          ? `${API_URL_PREFIX}algorithm/${selectedSeason}`
          : `${API_URL_PREFIX}algorithm`;

      const response = await axios.get(url);
      const algorithms = response.data.result.algorithms;
      // console.log(algorithms);
      setAlgorithmList(algorithms);
      setSelectedAlgorithm(algorithms[0]);
    } catch (error) {
      console.error('알고리즘 목록을 가져오는 중 오류 발생:', error);
    }
  };

  const fetchProblemList = async () => {
    try {
      const url = `${API_URL_PREFIX}problems?season=${selectedSeason}&algorithmId=${selectedAlgorithm.algorithmId}&course=${selectedCourse}`;
      const response = await axios.get(url);
      setProblemList(response.data.result);
    } catch (error) {
      console.error('문제 목록을 가져오는 중 오류 발생:', error);
      setProblemList([]);
    }
  };

  const fetchSolvedUserList = async problemId => {
    try {
      const url = `${API_URL_PREFIX}problem/${problemId}/solved-users`;
      const response = await axios.get(url);
      setSolvedUserList(response.data.result);
      setSelectedProblemId(problemId);
    } catch (error) {
      console.error('해결한 사용자 목록을 가져오는 중 오류 발생:', error);
      return [];
    }
  };

  return {
    selectedSeason,
    setSelectedSeason,
    selectedCourse,
    setSelectedCourse,
    selectedAlgorithm,
    algorithmList,
    problemList,
    setSelectedAlgorithm,
    solvedUserList,
    fetchSolvedUserList,
    selectedProblemId,
  };
};
