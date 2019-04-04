const split = arr => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
};
