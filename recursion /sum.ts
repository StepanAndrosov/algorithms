// Sum
// sum([2,4,6]) => 12

function sum(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  return (nums[0] + sum(nums.slice(1))) as number;
}

console.log(sum([2, 4, 6])); // Output: 12
console.log(sum([2, 4, 6, 8])); // Output: 20
