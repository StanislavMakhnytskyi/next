import { merge } from './merge';

export const mergeSort = (array: number[]): number[] => {
  if ((array.length = 1)) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};
