import { HStack, VStack } from '@/components/common/Stack';
import S from './CourseItem.style';
import { CourseInfo } from '@/types/course.types';
import { getTierByDifficulty, getTierNumberByDifficulty } from '@/utils/Tier';
import Number from '@/components/service/TierCircle/Number';
import { tierStyleConfig } from '@/styles/tier.config';
import BookIcon from '@/assets/icons/book.svg';

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
        <S.CourseType>{course.type}</S.CourseType>
        <S.CourseName>{course.name}</S.CourseName>
      </VStack>
      <HStack gap={16} style={{ width: '100%' }}>
        <S.InfoContainer>
          <S.CourseLabel>문제 수</S.CourseLabel>
          <HStack gap={4} alignItems="center">
            <img src={BookIcon} alt="문제 수" width={24} height={24} />
            <S.CourseInfo>{course.totalProblemCount}개</S.CourseInfo>
          </HStack>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.CourseLabel>난이도</S.CourseLabel>
          <HStack alignItems="center" gap={4}>
            <VStack
              alignItems="center"
              justifyContent="center"
              style={{
                width: 24,
                height: 24,
                backgroundColor:
                  tierStyleConfig[getTierByDifficulty(course.difficulty.start)].color,
                borderRadius: '50%',
              }}
            >
              <Number
                number={getTierNumberByDifficulty(course.difficulty.start)}
                width={20}
                height={20}
              />
            </VStack>
            <hr style={{ width: 4, height: 2, backgroundColor: 'var(--color-sub-text)' }} />
            <VStack
              alignItems="center"
              justifyContent="center"
              style={{
                width: 24,
                height: 24,
                backgroundColor: tierStyleConfig[getTierByDifficulty(course.difficulty.end)].color,
                borderRadius: '50%',
              }}
            >
              <Number
                number={getTierNumberByDifficulty(course.difficulty.end)}
                width={20}
                height={20}
              />
            </VStack>
          </HStack>
        </S.InfoContainer>
      </HStack >
    </S.CourseItemContainer >
  );
};

export default CourseItem;
