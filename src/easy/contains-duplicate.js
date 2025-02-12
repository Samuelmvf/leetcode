/*
CONTAINS DUPLICATE

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false

Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109

*/

const containsDuplicate = function(nums) {
  const setOfNums = new Set(nums);
  return setOfNums.size < nums.length
};

console.log("[1,2,3,1], output:", containsDuplicate([1,2,3,1])); // true
console.log("[1,2,3,4], output:", containsDuplicate([1,2,3,4])); // false
console.log("[1,1,1,3,3,4,3,2,4,2], output:", containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true