import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import { linkNames } from '@/constants/linkNames';

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

export const moveToProblemProblemSite = (problemId: number) => {
  window.open(`${linkNames.baekjoon.problem}${problemId}`, '_blank');
};

export const moveToBaekjoonProfileSite = (baekjoonId: string) => {
  window.open(`${linkNames.baekjoon.profile}${baekjoonId}`);
};
