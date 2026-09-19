// Classical binary search algorithm implementation
// Binary Search (#704)
function search(nums: number[], target: number): number {
  let left = 0; // left pointer index 0
  let right = nums.length - 1; // right pointer last index of the array

  while (left <= right) {
    const center = Math.floor((left + right) / 2); // calculate the center index
    const guess = nums[center]; // get the value at the center index
    if (guess === target) {
      return center;
    }
    if (guess > target) {
      right = center - 1;
    }
    if (guess < target) {
      left = center + 1;
    }
  }
  return -1;
}

function test_search_1() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let target = 5;
  const result = search(nums, target);
  if (result !== 4) {
    console.log(`Test failed: expected 1, got ${result}`);
    return;
  }
  console.log(`Got result: id: ${result}, target: ${target}`);
}

function test_search_2() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let target = 6;
  const result = search(nums, target);
  if (result !== 5) {
    console.log(`Test failed: expected 5, got ${result}`);
    return;
  }
  console.log(`Got result: id: ${result}, target: ${target}`);
}

function test_search_3() {
  const nums = [1, 2, 3, 4, 5, 6, 8, 9];
  let target = 7;
  const result = search(nums, target);
  if (result !== -1) {
    console.log(`Test failed: expected -1, got ${result}`);
    return;
  }
  console.log(`Got result: ${result}, target: ${target}`);
}

// test_search_1();
// test_search_2();
// test_search_3();

// ==============================================================
//
// Search Insert Position (#35)
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let midIdx = 0;

  while (left <= right) {
    midIdx = Math.floor((left + right) / 2);
    const midValue = nums[midIdx];
    if (midValue === target) return midIdx;

    if (midValue < target) {
      left = midIdx + 1;
    }
    if (midValue > target) {
      right = midIdx - 1;
    }
  }
  return left;
}

function test_search_insert_1() {
  const nums = [1, 3, 5, 6];
  let target = 5;
  const result = searchInsert(nums, target);
  if (result !== 2) {
    console.log(`Test failed: expected 2, got ${result}`);
    return;
  }
  console.log(`Got result: id: ${result}, target: ${target}`);
}

function test_search_insert_2() {
  const nums = [
    1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
  ];
  let target = 2;
  const result = searchInsert(nums, target);
  if (result !== 1) {
    console.log(`Test failed: expected 1, got ${result}`);
    return;
  }
  console.log(`Got result: id: ${result}, target: ${target}`);
}

function test_search_insert_3() {
  const nums = [1, 3, 5, 6];
  let target = 7;
  const result = searchInsert(nums, target);
  if (result !== 4) {
    console.log(`Test failed: expected 7, got ${result}`);
    return;
  }
  console.log(`Got result: ${result}, target: ${target}`);
}

// test_search_insert_1();
test_search_insert_2();
// test_search_insert_3();
