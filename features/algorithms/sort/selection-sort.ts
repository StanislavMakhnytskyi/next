export const selectionSort = (array: number[]) => {
  let min = 0;

  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (i !== min) [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
};
