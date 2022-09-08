function kthMinMax( arr, kMin, kMax ) {
  arr.sort((a, b)=> a - b);
  return {
    min: `${kMin} Minimum Number is ${arr[kMin - 1]}`,
    max: `${kMax} Maximum Number is ${arr[arr.length - kMax]}`,
  }
}

const array = [0, 2, 5, 1, 3, 4, 6, 10, 7, 8, 9];

const output = kthMinMax(array, 2, 2);

console.log(output);