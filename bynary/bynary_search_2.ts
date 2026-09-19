// Поиск дна и слияние двух частей
// Squares of a Sorted Array (#977)
function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n);

  // 1. Бинарный поиск: индекс первого неотрицательного числа (дно долины)
  let lo = 0;
  let hi = n - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    console.log(`lo: ${lo}, hi: ${hi}, mid: ${mid}, nums[mid]: ${nums[mid]}`);
    if (nums[mid] < 0) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  // после цикла lo — индекс первого числа >= 0

  // 2. Слияние двух возрастающих частей
  let left = lo - 1; // 6, 5, 4, 3, 2, 1, 0
  let right = lo; //== 7, 8, 9, 10
  let k = 0;
  //===================== n = 12
  while (left >= 0 && right < n) {
    const leftSq = nums[left] ** 2; //== 1, 1, 16, 16, 25, 36, 49, 64, ___,
    const rightSq = nums[right] ** 2; // 0, 4,  4,  9, 81, __, __, __, 100,

    if (leftSq <= rightSq) {
      result[k++] = leftSq; //= 1, 16, 25, 36, 49, 64
      left--;
    } else {
      result[k++] = rightSq; // 0, 4, 9, 81, 100
      right++;
    }
  }
  // добить остатки одной из сторон
  while (left >= 0) result[k++] = nums[left--] ** 2; // 121
  while (right < n) result[k++] = nums[right++] ** 2;

  return result;
}

function test_sortedSquares() {
  //===========  0,  1,  2,  3,  4,  5,  6, 7, 8, 9, 10, 11
  const nums = [
    -11, -8, -7, -6, -5, -4, -1, 0, 2, 3, 9, 10, 12, 13, 14, 15, 16,
  ];
  //== result: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
  const result = sortedSquares(nums);
  console.log(`Got result: ${result}`);
}

test_sortedSquares();
