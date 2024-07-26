import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const API_URL_PREFIX = 'https://www.iflab.run/api2/';
const CURRENT_SEASON = 2;

const selectedCourseAtom = atom('FULL');
const algorithmListAtom = atom([]);
const selectedAlgorithmAtom = atom(null);
const problemListAtom = atom([]);
const solvedUserListAtom = atom([]);

export const useProblem = () => {
  const [selectedCourse, setSelectedCourse] = useAtom(selectedCourseAtom);
  const [algorithmList, setAlgorithmList] = useAtom(algorithmListAtom);
  const [selectedAlgorithm, setSelectedAlgorithm] = useAtom(selectedAlgorithmAtom);
  const [problemList, setProblemList] = useAtom(problemListAtom);
  const [solvedUserList, setSolvedUserList] = useAtom(solvedUserListAtom);

  useEffect(() => {
    fetchAlgorithmList(CURRENT_SEASON);
  }, []);

  useEffect(() => {
    if (selectedAlgorithm && selectedCourse) {
      fetchProblemList();
    }
  }, [selectedAlgorithm, selectedCourse]);

  const fetchAlgorithmList = async season => {
    try {
      const url =
        season !== undefined
          ? `${API_URL_PREFIX}algorithm/${season}`
          : `${API_URL_PREFIX}algorithm`;

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
      const url = `${API_URL_PREFIX}problem/season/${CURRENT_SEASON}/algorithmId/${selectedAlgorithm.algorithmId}/course/${selectedCourse}`;
      const response = await axios.get(url);
      setProblemList(response.data.result);
    } catch (error) {
      console.error('문제 목록을 가져오는 중 오류 발생:', error);
      setProblemList([]);
    }
  };

  const fetchSolvedUserList = async problemId => {
    try {
      const url = `${API_URL_PREFIX}problem/solved-user/${problemId}`;
      const response = await axios.get(url);
      setSolvedUserList(response.data.result);
    } catch (error) {
      console.error('해결한 사용자 목록을 가져오는 중 오류 발생:', error);
      return [];
    }
  };

  return {
    selectedCourse,
    setSelectedCourse,
    selectedAlgorithm,
    algorithmList,
    problemList,
    setSelectedAlgorithm,
    solvedUserList,
    fetchSolvedUserList,
  };
};
