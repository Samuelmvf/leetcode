/*
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

const isValidAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sortS = s.split("").sort().join("");
  const sortT = t.split("").sort().join("")

  return sortS === sortT;
};

console.log("Output: ", isValidAnagram("anagram", "nagaram")) // true
console.log("Output: ", isValidAnagram("rat", "car")) // false
