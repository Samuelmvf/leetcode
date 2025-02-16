// https://leetcode.com/problems/encode-and-decode-strings/description/

//Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
//
// Please implement encode and decode
//
// Example 1:
// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// Example 2:
// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]

// Constraints:
// 0 <= strs.length < 100
// 0 <= strs[i].length < 200
// strs[i] contains only UTF-8 characters.

const encodingSeparator = "#"

const encode = (strs) => {
  return strs.map((str) =>  str.length + encodingSeparator + str).join("");
}

const decode = (str) => {
  const result = []

  let i = 0;
  while (i < str.length) {
    let j = i;

    while (str[j] !== encodingSeparator) {
      if (str[j + 1] === encodingSeparator) {
        const wordLength = Number(str.substring(i, j + 1))
        const word = str.substring(j + 2, j + 2 + wordLength);
        result.push(word);
        i = j + 2 + wordLength
      }
      j++;
    }
  }

  return result;
}

let strings = ["Samuel","Maia","Verçosa","Ferreira"]

console.log(encode(strings));
console.log(decode(encode(strings)));

strings = ["Project","Chocolate","Risoto","Pasta"]

console.log(encode(strings));
console.log(decode(encode(strings)));
