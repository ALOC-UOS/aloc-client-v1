import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { useState, useEffect } from 'react';

const CURRENT_SEASON = 3;

const selectedSeasonAtom = atom(CURRENT_SEASON);
const selectedCourseAtom = atom('FULL');
const algorithmListAtom = atom([]);
const selectedAlgorithmAtom = atom(null);
const problemListAtom = atom([]);
const solvedUserListAtom = atom([]);

export const useAlgorithm = () => {
  const [selectedSeason, setSelectedSeason] = useAtom(selectedSeasonAtom);
  const [selectedCourse, setSelectedCourse] = useAtom(selectedCourseAtom);
  const [selectedAlgorithm, setSelectedAlgorithm] = useAtom(selectedAlgorithmAtom);
  const [selectedProblemId, setSelectedProblemId] = useState(null);
  const [algorithmList, setAlgorithmList] = useAtom(algorithmListAtom);
  const [problemList, setProblemList] = useAtom(problemListAtom);
  const [solvedUserList, setSolvedUserList] = useAtom(solvedUserListAtom);

  useEffect(() => {
    fetchAlgorithmList(selectedSeason);
  }, [selectedSeason]);

  useEffect(() => {
    if (selectedAlgorithm && selectedCourse) {
      fetchProblemList();
      setSelectedProblemId(null);
      setSolvedUserList([]);
    }
  }, [selectedSeason, selectedAlgorithm, selectedCourse]);

  const fetchAlgorithmList = async (season) => {
    try {
      const url = season !== undefined ? `/algorithm/${selectedSeason}` : '/algorithm';

      const response = await axios.get(url);
      const algorithms = response.data.result.algorithms;
      setAlgorithmList(algorithms);
      setSelectedAlgorithm(algorithms[0]);
    } catch (error) {
      console.error('알고리즘 목록을 가져오는 중 오류 발생:', error);
    }
  };

  const fetchProblemList = async () => {
    try {
      const response = await axios.get(
        `/problems?season=${selectedSeason}&algorithmId=${selectedAlgorithm.algorithmId}&course=${selectedCourse}`
      );
      setProblemList(response.data.result);
    } catch (error) {
      console.error('문제 목록을 가져오는 중 오류 발생:', error);
      setProblemList([]);
    }
  };

  const fetchSolvedUserList = async (problemId) => {
    try {
      const response = await axios.get(`/problem/${problemId}/solved-users`);
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
