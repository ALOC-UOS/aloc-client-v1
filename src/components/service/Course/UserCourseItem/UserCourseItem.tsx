import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { HStack, VStack } from '@/components/common/Stack';
import useModal from '@/hooks/useModal';
import useUserCourses from '@/hooks/useUserCourses';
import { UserCourse } from '@/types/course.types';
import { useState } from 'react';
import { toast } from 'sonner';
import { formatDeadline } from '@/utils/index';
import S from './UserCourseItem.style';

interface UserCourseItemProps {
  course: UserCourse;
}

const UserCourseItem = ({ course }: UserCourseItemProps) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const { isOpen, show, hide } = useModal();

  return (
    <>
      <S.UserCourseItem
        key={course.id}
        onClick={() => {
          setSelectedCourseId(course.id);
          show();
        }}
      >
        <S.CourseNameText>{course.name}</S.CourseNameText>
        <S.Badge>{formatDeadline(course.closedAt)}</S.Badge>
      </S.UserCourseItem>
      <CancelCourseModal isOpen={isOpen} courseId={selectedCourseId!} onClose={hide} />
    </>
  );
};

export default UserCourseItem;

interface CancelCourseModalProps {
  isOpen: boolean;
  courseId: string;
  onClose: () => void;
}

const CancelCourseModal = ({ isOpen, courseId, onClose }: CancelCourseModalProps) => {
  const { deleteCourse, isLoading } = useUserCourses();

  const handleClickClose = async () => {
    try {
      await deleteCourse(courseId);
      toast.success('코스가 취소됐어요. 다른 코스를 선택해보세요!');
      onClose();
    } catch (error) {
      console.error('코스 취소 중 오류 발생:', error);
      toast.error('코스 취소에 실패했어요. 다시 시도해보세요.');
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <VStack gap={24}>
        <VStack alignItems="flex-start" gap={4}>
          <Modal.Title>코스를 취소하시겠어요?</Modal.Title>
          <Modal.Subtitle>코스를 취소하면 처음부터 다시 시작해야 해요.</Modal.Subtitle>
        </VStack>
        <HStack gap={8} style={{ width: '100%' }}>
          <Button variant="secondary" fullWidth onClick={onClose}>
            닫기
          </Button>
          <Button variant="danger" fullWidth onClick={handleClickClose} isLoading={isLoading}>
            취소하기
          </Button>
        </HStack>
      </VStack>
    </Modal>
  );
};
