import S from './style';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import useUserCourse from './useUserCourse';
import { moveToProblemSite } from '@/utils/index';
import TodayProlemContainer from '../../TodayProlemContainer';
import { useLocation } from 'react-router-dom';
import { TodayProblem } from '@/types/problem.types';

const SilderContainer = () => {
  const { courseIndex, setCourseIndex, todayProblem, courseList } = useUserCourse();
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderItemRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleCourseClick = (index: number) => {
    if (courseIndex !== index) {
      setCourseIndex(index);
      return;
    }

    if (todayProblem) {
      moveToProblemSite(todayProblem.problemId);
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

  useLayoutEffect(() => {
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

  return (
    <S.SliderContainer>
      {courseList.map((course, index) => {
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
            onClick={() => handleCourseClick(index)}
          >
            <TodayProlemContainer
              courseName={course.name}
              problem={course.problems[course.problems.length - 1] as TodayProblem}
              onClick={() => handleCourseClick(index)}
            />
          </S.SliderItem>
        );
      })}
    </S.SliderContainer>
  );
};

export default SilderContainer;
