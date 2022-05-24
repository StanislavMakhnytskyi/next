export const arraysIntersections = (arr1: any[], arr2: any[]): boolean => {
  const keys = new Map();

  arr1.forEach((key) => keys.set(key, true));

  return arr2.some((key) => keys.get(key) === true);
};
