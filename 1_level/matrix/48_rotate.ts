// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// [1][2][3]    [7][4][1]
// [4][5][6] => [8][5][2]
// [7][8][9]    [9][6][3]

//========================== NEW SOLVE
// 1. Транспонирование + разворот строк — самый популярный вариант.

// Транспонировать: поменять местами m[i][j] ↔ m[j][i] для j > i, то есть только над диагональю, иначе каждая пара поменяется дважды.
// Развернуть каждую строку: row.reverse() или двумя указателями.

// 1 2 3    1 4 7    7 4 1
// 4 5 6 →  2 5 8 →  8 5 2
// 7 8 9    3 6 9    9 6 3

function rotate(matrix: number[][]): void {
  const N = matrix.length;
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < N; j++) {
      const cutRes = matrix[i].splice(0, 1);
      matrix[j].push(cutRes[0]);
    }
  }
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotate(matrix1);
console.log(matrix1); // [[7,4,1],[8,5,2],[9,6,3]]

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix2);
console.log(matrix2); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
