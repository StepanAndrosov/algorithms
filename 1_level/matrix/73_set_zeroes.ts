// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// 1 1 1    1 0 1
// 1 0 1 →  0 0 0 →  [1,0,1],[0,0,0],[1,0,1]
// 1 1 1    1 0 1

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const ZERO = 0;

function setZeroes(matrix: number[][]): void {
  const zeroesRow = Array.from<number>({ length: matrix[0]?.length ?? 0 }).fill(
    ZERO,
  );
  const zeroesIndexes: number[] = [];
  const positions: number[] = [];

  matrix.forEach((mtrxItem, i) => {
    if (mtrxItem.includes(ZERO)) {
      matrix[i] = [...zeroesRow];
      zeroesIndexes.push(i);
      mtrxItem.forEach((num, j) => {
        if (num === ZERO && !positions.includes(j)) positions.push(j);
      });
    }
  });
  matrix.forEach((mtrxItem, i) => {
    if (!zeroesIndexes.includes(i)) {
      positions.forEach((position) => {
        mtrxItem[position] = ZERO;
      });
    }
  });
}

const matrx = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrx);
console.log(matrx);

const matrx2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(matrx2);
console.log(matrx2);

// Посмотреть решения
// function setZeroes(matrix: number[][]): void {
//   const m = matrix.length,
//     n = matrix[0].length;
//   const rows = new Array<boolean>(m).fill(false);
//   const cols = new Array<boolean>(n).fill(false);

//   for (let i = 0; i < m; i++)
//     for (let j = 0; j < n; j++)
//       if (matrix[i][j] === 0) rows[i] = cols[j] = true;

//   for (let i = 0; i < m; i++)
//     for (let j = 0; j < n; j++) if (rows[i] || cols[j]) matrix[i][j] = 0;
// }

// function setZeroes(matrix: number[][]): void {
//   const m = matrix.length, n = matrix[0].length;
//   let firstColZero = false;

//   // 1. Расставляем маркеры в первой строке/столбце
//   for (let i = 0; i < m; i++) {
//     if (matrix[i][0] === 0) firstColZero = true;
//     for (let j = 1; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[i][0] = 0; // маркер строки
//         matrix[0][j] = 0; // маркер столбца
//       }
//     }
//   }

//   // 2. Зануляем внутреннюю часть по маркерам (с 1, чтобы не затереть маркеры)
//   for (let i = 1; i < m; i++)
//     for (let j = 1; j < n; j++)
//       if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;

//   // 3. Первая строка — по маркеру matrix[0][0]
//   if (matrix[0][0] === 0)
//     for (let j = 0; j < n; j++) matrix[0][j] = 0;

//   // 4. Первый столбец — по отдельному флагу
//   if (firstColZero)
//     for (let i = 0; i < m; i++) matrix[i][0] = 0;
// }
