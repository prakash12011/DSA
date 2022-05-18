function reverseArray( arr, start, end ) {
  var newArr = [];

  while( start <= end ) {
    newArr[start] = arr[end]
    newArr[end]   = arr[start]
    start++;
    end--;
  }
  
  return (typeof arr === 'string') ? newArr.join('') : newArr;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const str = "Hello, JavaScript!";

const revArray  = reverseArray(array, 0, 9);
const revStr    = reverseArray(str, 0, 17);

console.log(revArray);
console.log(revStr);

