// Reverse String (#344)
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
/**
 Do not return anything, modify s in-place instead.
 */

// function reverseString(s: string[]) {
//   let start = 0,
//     end = s.length - 1;
//   if (s.length === 0) return;

//   while (start < end) {
//     let temp = s[start];
//     s[start] = s[end];
//     s[end] = temp;

//     start++;
//     end--;
//   }
// }

function reverseString(s: string[]) {
  function helper(start: number, end: number) {
    if (start >= end) return;
    [s[start], s[end]] = [s[end], s[start]];
    helper(start + 1, end - 1);
  }
  helper(0, s.length - 1);
}
const s = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s);

console.log(s);
