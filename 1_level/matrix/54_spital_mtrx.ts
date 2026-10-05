// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// 1, 2, 3      1 -> 2 -> 3
//                        |
// 4, 5, 6 ==>  4 -> 5    6  ==> 1,2,3,6,9,8,7,4,5
//              |         |
// 7, 8, 9      7 <- 8 <- 9

// Example 2:
// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// 1, 2, 3, 4      1 -> 2 -> 3 -> 4
//                                |
// 5, 6, 7, 8 ==>  5 -> 6 -> 7    8     ==> 1,2,3,4,8,12,11,10,9,5,6,7
//                 |              |
// 9, 10,11,12     9 <- 10 <-11 <-12

function spiralOrder(matrix: number[][]): number[] {
  const spiral: number[] = [];
  while (matrix.length > 0 && matrix[0][0] !== undefined) {
    // Steal the first row.
    console.log(matrix);
    const firstRow = matrix.shift();
    if (firstRow) spiral.push(...firstRow);
    // Steal the right items.

    matrix.forEach((row) => {
      const lastElem = row.pop();
      if (lastElem) spiral.push(lastElem);
    });
    // Turn the matrix over.
    matrix.reverse().map((row) => row.reverse());
  }

  return spiral;
}

const mtrxArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(mtrxArr1));
