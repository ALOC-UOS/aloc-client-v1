import { Tier } from '@/types/tier.types';

export const getTierByDifficulty = (difficulty: number): Tier => {
  if (1 <= difficulty && difficulty <= 5) return 'bronze';
  if (6 <= difficulty && difficulty <= 10) return 'silver';
  if (11 <= difficulty && difficulty <= 15) return 'gold';
  if (16 <= difficulty && difficulty <= 20) return 'platinum';

  return 'bronze'; // Todo: 추후에 bronze말고 unknown이든 추가해야함.
};

export const getTierNumberByDifficulty = (difficulty: number): number => {
  /*
    1, 6, 11, 16은 5
    2, 7, 12, 17은 4
    3, 8, 13, 18은 3
    4, 9, 14, 19은 2
    5, 10, 15, 20은 1
  */
  const remainder = difficulty % 5;

  // 나머지에 따라 티어 번호 반환
  if (remainder === 1) return 5;
  if (remainder === 2) return 4;
  if (remainder === 3) return 3;
  if (remainder === 4) return 2;
  if (remainder === 0) return 1;

  // 유효하지 않은 난이도인 경우 기본값 반환
  return 1;
};

export const getTierByUserRank = (rank: number): Tier => {
  const tensDigit = Math.floor((rank % 100) / 10);

  if (tensDigit === 1) return 'bronze';
  if (tensDigit === 2) return 'silver';
  if (tensDigit === 3) return 'gold';
  if (tensDigit === 4) return 'platinum';

  return 'bronze';
};

export const getTierNumberByUserRank = (rank: number): number => {
  return rank % 10;
};
