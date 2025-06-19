import { HStack, VStack } from '@/components/common/Stack';
import Line from '@/components/common/Line';
import S from './CourseFilterPanel.style';
import { CourseType, SortType } from '@/types/course.types';

interface CourseFilterPanelProps {
  courseType: CourseType | null;
  setCourseType: (type: CourseType | null) => void;
  sortType: SortType;
  setSortType: (type: SortType) => void;
}

const CourseFilterPanel = ({
  courseType,
  setCourseType,
  sortType,
  setSortType,
}: CourseFilterPanelProps) => {
  const toggleCourseType = (type: CourseType) => {
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
          isSelected={courseType === CourseType.DEADLINE}
          onClick={() => toggleCourseType(CourseType.DEADLINE)}
        >
          Deadline
        </S.TypeFilterButton>
        <S.TypeFilterButton
          isSelected={courseType === CourseType.DAILY}
          onClick={() => toggleCourseType(CourseType.DAILY)}
        >
          Daily
        </S.TypeFilterButton>
      </VStack>

      <Line width="100%" color="var(--color-black-10)" />

      <HStack gap={8} style={{ padding: 2 }}>
        <S.SortButton
          isSelected={sortType === SortType.POPULAR}
          onClick={() => setSortType(SortType.POPULAR)}
        >
          인기순
        </S.SortButton>
        <S.SortButton
          isSelected={sortType === SortType.DIFFICULTY}
          onClick={() => setSortType(SortType.DIFFICULTY)}
        >
          난이도순
        </S.SortButton>
      </HStack>
    </VStack>
  );
};

export default CourseFilterPanel;
