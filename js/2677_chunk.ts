// 2677. Chunk Array
// Given an array 'arr' and a chunk size 'size', return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size.
// The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// Please solve it without using lodash's _.chunk function.

// Example 1:
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Example 2:
// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

// Example 3:
// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

// Example 4:
// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: number[], size: number): number[][] {
  const res: number[][] = [];
  let piece: number[] = [];

  arr.forEach((item, idx) => {
    if ((idx + 1) % size === 0 || idx === arr.length - 1) {
      piece.push(item);
      res.push(piece);
      piece = [];
    } else {
      piece.push(item);
    }
  });

  return res;
}

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 9, 6, 3, 2];
const list3 = [8, 5, 3, 2, 6];
console.log(chunk(list1, 1));
console.log(chunk(list2, 3));
console.log(chunk(list3, 6));
console.log(chunk([], 1));
