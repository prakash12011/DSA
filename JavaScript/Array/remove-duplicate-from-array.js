const array = [1, 1, 1, 0, 2, 2, 3, 3, 4, 8, 10];

// Method 1
Array.prototype.removeDuplicates = function() {
  const array = this;
  var directory = {}
  array.forEach(item => {
    if (!directory[item]) {
      directory[item] = true
    }    
  });
  let res = Object.keys(directory);

  console.log(res);
  return res;
}
const res = array.removeDuplicates();


// Method 2
const setRes = (arr) => [...new Set(arr)];

console.log(res);