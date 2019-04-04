/* eslint-disable complexity */
const split = arr => {
  const middle = Math.floor(arr.length - 1 / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
};

const merge = (
  arr1,
  arr2,
  sortFunc = function(a, b) {
    return a - b;
  }
) => {
  const result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    let first = arr1[0];
    let second = arr2[0];
    if (sortFunc(first, second) <= 0) {
      result.push(first);
      arr1.shift();
    } else {
      result.push(second);
      arr2.shift();
    }
  }
  arr1.length > 0 && result.push(...arr1);
  arr2.length > 0 && result.push(...arr2);
  arr1 = null;
  arr2 = null;

  return result;
};

const mergeSort = (arr, sortFunc) => {
  if (arr.length <= 1) return arr;

  const [left, right] = split(arr);

    return merge(mergeSort(left), mergeSort(right), sortFunc);

};
