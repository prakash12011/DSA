const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Output [[7, 4, 1], [8, 5, 2], [9, 6, 3]];

function rotateArray(arr) {
  if (!arr.length) return false;
  
  var newArr = [];
  for (let i = arr.length - 1; i >= 0; i-- ) {
    var newInnerArr = [];
    for (let j = 0; j < arr[i].length; j++ ) {
      newInnerArr.unshift(arr[j][i]);
    }    
    
    newArr.unshift(newInnerArr)
  }
  
  return newArr;
}

const arr = rotateArray(array);

console.log(arr);