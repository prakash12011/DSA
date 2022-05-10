const twoSum = function (nums, target) {
  const keys = [];
  for (let index = 0; index < nums.length; index++) {

    for (let j = 0; j < nums.length; j++) {
      if (nums[index] + nums[j] == target && index !== j) {
        keys.push(index);
        keys.push(j);

        return keys;
      }
    }
  }
};

const nums = [2, 7, 11, 15], target = 9;

twoSum(nums, target);