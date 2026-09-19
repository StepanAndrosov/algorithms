// Kth Largest Element in an Array (#215)

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 1) return nums[0];
  const arr = [...nums];
  const pivot = arr.pop() as number;
  console.log('arr after pop:', arr);
  const left = arr.filter((el) => el < pivot);
  const right = arr.filter((el) => el >= pivot);
  console.log('k:', k, 'pivot:', pivot, 'left:', left, 'right:', right);

  if (right.length === k) {
    right.sort((a, b) => a - b);
    console.log('right array sorted:', right);
    return right[0];
  } else if (right.length > k) {
    return findKthLargest(right, k);
  } else if (k === 1 && right.length === 0) {
    return pivot;
  } else {
    return findKthLargest(left, k - (right.length + 1));
  }
}
// k = 4, 3, 2, 3, 1, 2, 4, 5, 5, 6 ==> pivot = 6, left = [3, 2, 3, 1, 2, 4, 5, 5], right = [] => go next with left array with k = 4
// The next recursive call will be findKthLargest([3, 2, 3, 1, 2, 4, 5, 5], 4)

// k =4, pivot = 5, left = [3, 2, 3, 1, 2, 4], right = [5] => go next with left array with k = 3
// The next recursive call will be findKthLargest([3, 2, 3, 1, 2, 4], 3)

// k = 3,pivot = 4, left = [3, 2, 3, 1, 2], right = [] => go next with left array with k = 3
// The next recursive call will be findKthLargest([3, 2, 3, 1, 2], 3)

// pivot = 2, left = [1], right = [3, 3] => go next with left array with k = 3
// The next recursive call will be findKthLargest([1], 3)
// console.log('Starting test for [3, 2, 3, 1, 2]');
console.log(findKthLargest([3, 2, 3, 1, 2], 3));

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
