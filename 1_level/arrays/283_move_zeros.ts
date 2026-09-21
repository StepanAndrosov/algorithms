// Move Zeroes (#283)

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

function moveZeroes(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }
  const diff = nums.length - k;
  // fast
  //  nums.splice(k, diff);
  //  const zeroes = new Array(diff).fill(0);
  //  zeroes.forEach((zero) => nums.push(zero));

  // save memory
  for (let j = k; j < nums.length; j++) {
    nums[j] = 0;
  }
  console.log(k);
  console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
