import Bronze from '../assets/bronze-small.png';
import Silver from '../assets/silver-small.png';
import Gold from '../assets/gold-small.png';
import Platinum from '../assets/platinum-small.png';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const getDifficultyIcon = difficulty => {
  if (difficulty < 6) return Bronze;
  if (difficulty < 11) return Silver;
  if (difficulty < 16) return Gold;
  return Platinum;
};

export const getMemberRank = rank => {
  switch (rank / 10) {
    case 1:
      return 'bronze';
    case 2:
      return 'silver';
    case 3:
      return 'gold';
    default:
      return 'platinum';
  }
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
