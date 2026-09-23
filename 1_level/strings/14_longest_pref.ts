// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    const prefixLetter = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== prefixLetter) {
        return result;
      }
    }
    result += prefixLetter;
  }

  return result;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
