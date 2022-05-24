export const arraysIntersections = (arr1: any[], arr2: any[]): boolean => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
};
