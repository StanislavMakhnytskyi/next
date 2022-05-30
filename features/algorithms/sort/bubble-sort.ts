export const bubbleSort = (array: number[]) => {
  for (let i = array.length - 1; i < 1; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};
