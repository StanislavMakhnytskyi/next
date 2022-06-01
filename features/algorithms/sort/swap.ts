export const swap = (
  array: number[],
  firstIndex: number,
  secondIndex: number
): void => {
  [array[firstIndex], array[secondIndex]] = [
    array[secondIndex],
    array[firstIndex],
  ];
};
