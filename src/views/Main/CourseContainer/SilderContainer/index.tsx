import S from './style';
import { useEffect, useState, useRef } from 'react';
import useUserCourses from '@/hooks/useUserCourses';
import { moveToProblemProblemSite } from '@/utils/index';
import TodayProlemContainer from '../../TodayProlemContainer';
import ProblemList from '../../ProblemList';
import { useLocation } from 'react-router-dom';
import { Problem } from '@/types/problem.types';

const SilderContainer = () => {
  const { courseIndex, setCourseIndex, todayProblem, userCourses } = useUserCourses();
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderItemRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleCourseClick = (index: number) => {
    if (courseIndex !== index) {
      setCourseIndex(index);
      return;
    }

    if (todayProblem) {
      moveToProblemProblemSite(todayProblem.problemId);
    }
  };

  const getPosition = (index: number) => {
    const distance = index - courseIndex;

    if (distance !== 0) {
      const direction = distance > 0 ? 1 : -1;

      const cardWidth = sliderItemRef.current?.clientWidth ?? 0;

      if (Math.abs(distance) === 1) {
        return direction * (windowWidth / 2 + 128);
      } else {
        return direction * (windowWidth / 2 + cardWidth);
      }
    }

    return 0;
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [location.pathname]);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  if (!userCourses || !todayProblem) {
    return null;
  }

  return (
    <S.SliderContainer>
      {userCourses.map((course, index) => {
        return (
          <S.SliderItem
            key={course.id}
            ref={sliderItemRef}
            isSelected={index === courseIndex}
            style={{
              transform: `translateX(${getPosition(index)}px) scale(${index === courseIndex ? 1 : 0.8})`,
              zIndex: index === courseIndex ? 10 : 5,
              opacity: index === courseIndex ? 1 : 0.5, // 멀리 있는 항목은 더 투명하게
            }}
          >
            <TodayProlemContainer
              courseName={course.name}
              problem={course.problems[course.problems.length - 1] as Problem}
              onClick={() => handleCourseClick(index)}
            />
            <ProblemList course={course} isVisible={courseIndex === index} />
          </S.SliderItem>
        );
      })}
    </S.SliderContainer>
  );
};

export default SilderContainer;
