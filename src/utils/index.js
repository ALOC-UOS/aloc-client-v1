import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const getProblemTier = difficulty => {
  if (difficulty >= 1 && difficulty <= 5) return 'bronze';
  if (difficulty >= 6 && difficulty <= 10) return 'silver';
  if (difficulty >= 11 && difficulty <= 15) return 'gold';
  if (difficulty >= 16 && difficulty <= 20) return 'platinum';
  return 'unknown';
};

export const formatSolveTime = solvedAt => {
  const now = dayjs();
  const currentDate = now.format('YYYY-MM-DD');
  const solved = dayjs(`${currentDate} ${solvedAt}`, 'YYYY-MM-DD HH:mm:ss');

  const diffMinutes = now.diff(solved, 'minute');
  const diffSeconds = now.diff(solved, 'second');

  if (diffMinutes >= 60) {
    return solved.from(now); // "X시간 전"
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 전`;
  } else if (diffSeconds > 0) {
    return `${diffSeconds}초 전`;
  } else {
    return '방금 전';
  }
};
