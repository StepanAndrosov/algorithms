// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1],
// then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -2^31 <= x <= 2^31 - 1
const minInteger = -Math.pow(2, 31);
const maxInteger = -minInteger;

function reverse(x: number): number {
  let num = x;
  let res = 0;

  while (num) {
    const decimal = num % 10;
    res = res * 10 + decimal;
    if (res > maxInteger || res < minInteger) return 0;
    num = Math.trunc(num / 10);
  }

  return res;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 (overflow)
