/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

const solution = (arr) => {
  let noSwaps;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if(noSwaps) {
      break;
    }
  }

  return arr;
}