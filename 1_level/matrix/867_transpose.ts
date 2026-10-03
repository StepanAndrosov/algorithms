// 867. Transpose Matrix

// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
//
//  I
// [1][2][3]        [1][4][7]
// [4][5][6]  ===>  [2][5][8]
// [7][8][9]        [3][6][9]

// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

//  I               [1][4]
// [1][2][3]  ===>  [2][5]
// [4][5][6]        [3][6]

function transpose(matrix: number[][]): number[][] {
  const transposedMarix: number[][] = [];

  matrix.forEach((m) => {
    m.forEach((n, j) => {
      if (!transposedMarix[j]) transposedMarix.push([]);
      transposedMarix[j].push(n);
    });
  });

  return transposedMarix;
}

const trMtrx1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const trMtrx2 = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(transpose(trMtrx1));
console.log(transpose(trMtrx2));
