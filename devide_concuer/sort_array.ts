// Sort an Array (#912)

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique

function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  const pivot = nums[nums.length - 1];
  const left = nums.filter((el) => el < pivot);
  const right = nums.filter((el) => el > pivot);

  return [...sortArray(left), pivot, ...sortArray(right)];
}
