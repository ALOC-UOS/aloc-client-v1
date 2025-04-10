import useUserCourses from '@/hooks/useUserCourses';
import S from './SolveCheckButton.style';
import useConfetti from '@/hooks/useConfetti';
import { toast } from 'sonner';

const SolveCheckButton = () => {
  const { show } = useConfetti();
  const { todayProblem, checkTodayProblem, isSolvingCheckLoading } = useUserCourses();

  const handleCheckTodayProblem = async () => {
    const response = await checkTodayProblem();

    if (response.isSolved) {
      show();
      const coinArray = response.coinResponseDtos;

      if (coinArray.length > 0) {
        coinArray.forEach((coin: any) => {
          toast.success('오늘의 문제를 풀어버렸어요! 🎉', {
            description: `코인: ${coin.addedCoin || 0}개`,
          });
        });
      }
      return;
    }

    toast.error('오늘의 문제를 풀지 않았네요... 😢');
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
