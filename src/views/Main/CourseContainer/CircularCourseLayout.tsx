import { useState, useEffect, useRef } from 'react';
import CourseItem from '@/components/service/Course/CourseItem';

const CircularCourseLayout = ({ courses }: { courses: any[] }) => {
  // 화면 높이를 상태로 관리
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [rotationAngle, setRotationAngle] = useState(0);
  // 마우스가 CourseItem 위에 있는지 추적
  const [isHovering, setIsHovering] = useState(false);
  // 인터벌 ID를 저장하기 위한 ref
  const intervalRef = useRef<number | null>(null);

  // 자동 회전 애니메이션 시작/정지 제어
  useEffect(() => {
    // 마우스가 CourseItem 위에 없을 때만 회전
    if (!isHovering) {
      intervalRef.current = window.setInterval(() => {
        setRotationAngle((prev) => (prev - 0.2) % 360); // 천천히 회전
      }, 20);
    } else if (intervalRef.current) {
      // 마우스가 위에 있으면 회전 정지
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovering]);

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 원의 반지름을 화면 높이의 0.7배로 설정
  const radius = screenHeight * 0.7;
  const angleStep = 360 / courses.length;

  if (courses.length === 0) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', top: '50%', left: '100%' }}>
      {courses.map((course, index) => {
        const angle = index * angleStep;
        const itemAngle = angle + rotationAngle;
        const radian = (itemAngle * Math.PI) / 180;

        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);

        const visibilityRatio = (x + radius) / (radius * 2);
        const scale = visibilityRatio;
        const opacity = Math.pow(visibilityRatio, 5);

        return (
          <div
            key={course.id || index}
            style={{
              position: 'absolute',
              right: -240,
              top: 0,
              width: '280px',
              transform: `translate(calc(-50% + ${-x}px), calc(-50% + ${y}px))`,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.1s linear',
              scale: scale,
              opacity: opacity,
              zIndex: 1000 + Math.abs(x),
              pointerEvents: visibilityRatio > 0.5 ? 'auto' : 'none',
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <CourseItem course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default CircularCourseLayout;
