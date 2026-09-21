// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums: number[]): number[] {
  const disappeared: number[] = [];

  const setNums = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (!setNums.has(i)) {
      disappeared.push(i);
    }
  }

  return disappeared;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
