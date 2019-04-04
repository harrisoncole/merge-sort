swap =  {
 swap (arr, idxA, idxB) {
    let temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
  }

}


const bubbleSort = arr => {
  let swaps;
  let counter = 0;
  do {
    swaps = 0;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      let j = i + 1;
      if (arr[i] > arr[j]) {
        swap.swap(arr, i, j);
        swaps++;
      }
    }
    counter++;
  } while (swaps > 0);
  return arr;
};
