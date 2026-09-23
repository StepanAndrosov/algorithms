// Reverse String (#344)

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s: string[]): void {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    // обмен через временную переменную
    // const temp = s[start];
    // s[start] = s[end];
    // s[end] = temp;

    // без лишней переменной
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
}
const strArr1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(strArr1);
console.log(strArr1); // ["o","l","l","e","h"]

const strArr2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(strArr2);
console.log(strArr2); // ["h","a","n","n","a","H"]
