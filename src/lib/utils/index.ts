import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { linkNames } from '@/lib/constants/linkNames';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const getProblemTier = (difficulty: number) => {
  if (1 <= difficulty && difficulty <= 5) return 'bronze';
  if (6 <= difficulty && difficulty <= 10) return 'silver';
  if (11 <= difficulty && difficulty <= 15) return 'gold';
  if (16 <= difficulty && difficulty <= 20) return 'platinum';

  return 'bronze'; // Todo: 추후에 bronze말고 unknown이든 추가해야함.
};

export const formatSolveTime = (solvedAt: string) => {
  return dayjs(solvedAt).fromNow();
};

export const formatDeadline = (deadline: string) => {
  const now = dayjs();
  const deadlineDate = dayjs(deadline);

  const diffInDays = deadlineDate.diff(now, 'day');
  if (diffInDays >= 1) {
    return `${diffInDays}일 전`;
  }

  const diffInHours = deadlineDate.diff(now, 'hour');
  return `${diffInHours}시간 전`;
};

export const moveToProblemSite = (problemId: number) => {
  window.open(`${linkNames.baekjoon.problem}${problemId}`, '_blank');
};

export const moveToBaekjoonProfileSite = (baekjoonId: string) => {
  window.open(`${linkNames.baekjoon.profile}${baekjoonId}`);
};
