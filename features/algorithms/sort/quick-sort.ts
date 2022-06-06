import { pivot } from './pivot';

export const quickSort = (array: number[], left = 0, right = 0): number[] => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};
