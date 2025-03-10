import { HStack, VStack } from '@/components/common/Stack';
import S from './CourseItem.style';
import TierCircle from '@/components/service/TierCircle';
import { CourseInfo } from '@/types/course.types';
import { getTierByDifficulty, getTierNumberByDifficulty } from '@/utils/Tier';

interface CourseItemProps {
  course: CourseInfo;
  onClick: () => void;
}

const CourseItem = ({ course, onClick }: CourseItemProps) => {
  if (!course) {
    return null;
  }

  return (
    <S.CourseItemContainer onClick={onClick}>
      <VStack alignItems="flex-start" gap={4}>
        <S.CourseTypeLabel>{course.type}</S.CourseTypeLabel>
        <S.CourseName>{course.name}</S.CourseName>
        <S.CourseInfo>{course.totalProblemCount}문제</S.CourseInfo>
      </VStack>
      <HStack>
        <TierCircle
          tier={getTierByDifficulty(course.difficulty.start)}
          number={getTierNumberByDifficulty(course.difficulty.start)}
          size="large"
          style={{ marginRight: -8 }}
        />
        <TierCircle
          tier={getTierByDifficulty(course.difficulty.end)}
          number={getTierNumberByDifficulty(course.difficulty.end)}
          size="large"
          style={{ boxShadow: '-4px 0px 4px rgba(0, 0, 0, 0.25)' }}
        />
      </HStack>
    </S.CourseItemContainer>
  );
};

export default CourseItem;
