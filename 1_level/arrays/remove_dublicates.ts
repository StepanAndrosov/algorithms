// Remove Duplicates from Sorted Array (#26)
function removeDuplicates(nums: number[]): number {
  const uniqueNums = new Set(nums);
  console.log(`Unique numbers: ${[...uniqueNums]}`);

  let i = 0;
  for (const value of uniqueNums) {
    nums[i] = value;
    i++;
  }
  nums.length = uniqueNums.size;

  return uniqueNums.size;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const testRemoveDuplicates = () => {
  removeDuplicates(nums);
  console.log(`After removing duplicates: ${nums}`);
};

testRemoveDuplicates();
