// Fibonacci Number (#509)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 0. 0
// 1. 1
// 2. 0+1 = 1
// 3. 1+1 = 2
// 4. 1+2 = 3
// 5. 2+3 = 5
// 6. 3+5 = 8
// 7. 5+8 = 13
// 8. 8+13 = 21
// 9. 13+21 = 34

// fib(4)
//  ├── fib(3)
//  │    ├── fib(2)
//  │    │    ├── fib(1) → база, возвращает 1
//  │    │    └── fib(0) → база, возвращает 0
//  │    └── fib(1) → база, возвращает 1
//  └── fib(2)
//       ├── fib(1) → база, возвращает 1
//       └── fib(0) → база, возвращает 0

function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const n1 = 2;
const n2 = 3;
const n3 = 4;
const n4 = 6;
const n5 = 1;
const n6 = 9;

console.log(fib(n1)); // 1
console.log(fib(n2)); // 2
console.log(fib(n3)); // 3
console.log(fib(n4)); // 8
console.log(fib(n5)); // 1
console.log(fib(n6)); // 34
