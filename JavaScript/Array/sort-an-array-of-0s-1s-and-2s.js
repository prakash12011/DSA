/*
* Time Complexity = O(n^2)
* This sort will work for Numeric sort
*/
function sortArrayInAccendingN2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('i', );
    for (let j = 0; j < arr.length; j++) {
      if( arr[j] > arr[i] ) {
        console.log(arr);
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}

/*
* Time Complexity = O(n)
* This sort will work for Numeric sort
*/
function sortArrayInAccendingN(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i+1] !== 'undefined' && arr[i] > arr[i+1] ) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }

  for (let i = arr.length; i > 0; i--) {
    if (typeof arr[i - 1] !== 'undefined' && arr[i] < arr[i-1] ) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
  }
  return arr;
}

const array = [0, 1, 0, 7, 2, 4, 3, 5, 6, 2, 8];

const res = sortArrayInAccendingN2(array);

console.log(res);