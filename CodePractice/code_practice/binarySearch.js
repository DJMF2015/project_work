function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  let result = binarySearch(arr, 7);
  console.log('Found prime at index ' + result);

  //find lowest and highest number in array

  const numbers = [11, 33, 101,189, 08, 45, 55, 143];
  const numbLength = numbers.length;
  let max = Infinity;
  let min = numbers.length;

  for (index = 0; numbLength > index; index++) {
    if (numbers[index] < max) {
      max = numbers[index];
    }
    if (numbers[index] > min) {
      min = numbers[index];
    }
  }
  console.log(min, max );
