const a = [1, 2], b = [3, 4, 5];

function findMedianOfArray (arrA, arrB) {
  const m = a.length
  const n = b.length
  const mergedArr = a.concat(b);
  const medianIndex = (mergedArr[0] + mergedArr[mergedArr.length - 1]) / 2;

  const isEven = mergedArr.length % 2 == 0;

  console.log(mergedArr[0] + mergedArr[mergedArr.length - 1]);

  if ( !isEven ) {
    return mergedArr[medianIndex];
  } else {
    // let findLargestNumber = 
    return mergedArr[medianIndex];
  }
}

const res = findMedianOfArray(a, b);

console.log(res);