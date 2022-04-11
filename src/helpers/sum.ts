import { BASE, EASY, HARD, MEDIUM } from '../constants/sumScore';

export const sum = (difficulty: string, timer: number) => {
  switch (difficulty) {
    case 'hard':
      return BASE + timer * HARD;
    case 'medium':
      return BASE + timer * MEDIUM;
    default:
      return BASE + timer * EASY;
  }
};
