import { HStack, VStack } from '@/components/common/Stack';
import Line from '@/components/common/Line';
import S from './CourseFilterPanel.style';

type CourseType = 'DEADLINE' | 'DAILY' | null;

interface CourseFilterPanelProps {
  courseType: CourseType;
  setCourseType: (type: CourseType) => void;
  sortType: 'popular' | 'difficulty';
  setSortType: (type: 'popular' | 'difficulty') => void;
}

const CourseFilterPanel = ({
  courseType,
  setCourseType,
  sortType,
  setSortType,
}: CourseFilterPanelProps) => {
  const toggleCourseType = (type: Exclude<CourseType, null>) => {
    if (courseType === type) {
      // 현재 선택된 타입을 다시 클릭하면 선택 해제
      setCourseType(null);
    } else {
      // 다른 타입 선택
      setCourseType(type);
    }
  };

  return (
    <VStack gap={16}>
      <VStack gap={16}>
        <S.TypeFilterButton
          onClick={() => toggleCourseType('DEADLINE')}
          style={{
            backgroundColor: courseType === 'DEADLINE' ? 'var(--color-blue)' : 'var(--color-white)',
            color: courseType === 'DEADLINE' ? 'var(--color-white)' : 'var(--color-sub-text)',
          }}
        >
          Deadline
        </S.TypeFilterButton>
        <S.TypeFilterButton
          onClick={() => toggleCourseType('DAILY')}
          style={{
            backgroundColor: courseType === 'DAILY' ? 'var(--color-blue)' : 'var(--color-white)',
            color: courseType === 'DAILY' ? 'var(--color-white)' : 'var(--color-sub-text)',
          }}
        >
          Daily
        </S.TypeFilterButton>
      </VStack>

      <Line width="100%" color="var(--color-black-10)" />

      <HStack gap={8} style={{ padding: 2 }}>
        <S.SortButton
          onClick={() => setSortType('popular')}
          style={{
            backgroundColor: sortType === 'popular' ? 'var(--color-blue)' : 'var(--color-white)',
            color: sortType === 'popular' ? 'var(--color-white)' : 'var(--color-sub-text)',
          }}
        >
          인기순
        </S.SortButton>
        <S.SortButton
          onClick={() => setSortType('difficulty')}
          style={{
            backgroundColor: sortType === 'difficulty' ? 'var(--color-blue)' : 'var(--color-white)',
            color: sortType === 'difficulty' ? 'var(--color-white)' : 'var(--color-sub-text)',
          }}
        >
          난이도순
        </S.SortButton>
      </HStack>
    </VStack>
  );
};

export default CourseFilterPanel;
