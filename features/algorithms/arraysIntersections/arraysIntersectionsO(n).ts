export const arraysIntersections = (
  arr1: Array<number | string>,
  arr2: Array<number | string>
): boolean => {
  const keys = {};

  arr1.forEach((key) => (keys[key] = true));

  return arr2.some((key) => keys[key] === true);
};
