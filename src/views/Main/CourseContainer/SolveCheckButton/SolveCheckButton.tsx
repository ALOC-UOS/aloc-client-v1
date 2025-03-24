import useUserCourses from '@/hooks/useUserCourses';
import S from './SolveCheckButton.style';
import useConfetti from '@/hooks/useConfetti';

const SolveCheckButton = () => {
  const { show } = useConfetti();
  const { todayProblem, checkTodayProblem, isSolvingCheckLoading } = useUserCourses();

  const handleCheckTodayProblem = async () => {
    const isSolved = await checkTodayProblem();

    if (isSolved) {
      show();
    }
  };

  if (!todayProblem || todayProblem.status === 'SOLVED') {
    return null;
  }

  return (
    <S.AnimationContainer>
      <S.SolveCheckButton onClick={handleCheckTodayProblem}>
        <S.Text>문제를 풀어버렸어요!</S.Text>
        {isSolvingCheckLoading && <S.LoadingSpinner />}
      </S.SolveCheckButton>
    </S.AnimationContainer>
  );
};

export default SolveCheckButton;
