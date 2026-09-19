// Power of Two (#231)

// Когда вычитаешь 1 из n, все биты справа от самого младшего
// установленного бита (включая его самого) переворачиваются:
// младший 1 становится 0
// все нули справа от него становятся 1
// всё, что левее — не меняется
// Пример: n = 12 (1100 в двоичном виде)

//   n     = 1100
//   n - 1 = 1011
// Теперь n & (n-1):

//   1100
// & 1011
// ------
//   1000

// function isPowerOfTwo(n: number): boolean {
//   return n > 0 && (n & (n - 1)) === 0;
// }

// У степени двойки (1, 2, 4, 8, 16...) в двоичном виде ровно один установленный бит
// (0001, 0010, 0100, 1000...). Если обнулить этот единственный бит
// через n & (n-1), получится 0 — а значит проверка (n & (n-1)) === 0

function isPowerOfTwo(n: number): boolean {
  if (n === 0) return false;
  if (n === 1) return true;
  return n % 2 === 0 && isPowerOfTwo(n / 2);
}

// Стек вызовов для isPowerOfTwo(4):
// Рост стека (спуск, каждый вызов ждёт результат следующего):

// isPowerOfTwo(4)
//   4 % 2 === 0 → true, вызываем isPowerOfTwo(4 / 2)
//   │
//   └─ isPowerOfTwo(2)
//        2 % 2 === 0 → true, вызываем isPowerOfTwo(2 / 2)
//        │
//        └─ isPowerOfTwo(1)
//             n === 1 → return true   ← база рекурсии, дальше не идём
// Разворот стека (возврат значений наверх):

// isPowerOfTwo(1) → true
// isPowerOfTwo(2) → true && true → true
// isPowerOfTwo(4) → true && true → true
// Итог: isPowerOfTwo(4) → true.

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(3));
