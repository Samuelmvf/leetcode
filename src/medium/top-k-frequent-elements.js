// https://leetcode.com/problems/top-k-frequent-elements/description/

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//   Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
//
// Constraints:
//   1 <= nums.length <= 105
//   -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
//
//

const topKFrequent = function(nums, k) {
  var countFrequencyMap = {};

  for (const num of nums) {
    if (countFrequencyMap[num] !== undefined)
      countFrequencyMap[num]++;
    else countFrequencyMap[num] = 1;
  }
  return Object.entries(countFrequencyMap).sort((a, b) => {
    return b[1] - a[1];
  }).slice(0, k).map(([k, _v]) => Number(k));
};

console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1,2,3,3,3,2,2,2,4,4,4,4,1,1,1,1], 3)); // [1,2,4]
