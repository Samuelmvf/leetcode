// Products of Array Except Self
// Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].
//
//   Each product is guaranteed to fit in a 32-bit integer.
//
//   Follow-up: Could you solve it in
// O(n)
// O(n) time without using the division operation?
//
//   Example 1:
//
// Input: nums = [1,2,4,6]
//
// Output: [48,24,12,8]
// Example 2:
//
// Input: nums = [-1,0,1,2,3]
//
// Output: [0,-6,0,0,0]
// Constraints:
//
//   2 <= nums.length <= 1000
//   -20 <= nums[i] <= 20

const productExceptSelf = function(nums) {
  const zeroIndexes = []
  const totalResult = nums.reduce((acc, num, _index) => {
    if (num === 0) {
      zeroIndexes.push(_index);
      return acc
    }
    return num * acc
  }, 1);

  if (zeroIndexes.length > 1)
    return new Array(nums.length).fill(0);

  return nums.map((num, i) => {
    let newValue = totalResult / num;
    if (zeroIndexes.some(zeroInd => zeroInd === i)) {
      newValue = totalResult
    } else if (zeroIndexes.length) {
      newValue = 0;
    }
    return newValue;
  })
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))
console.log(productExceptSelf([0,2,3,4]))
