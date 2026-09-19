function _quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];

  let left = arr.filter((num) => num < pivot);
  let right = arr.filter((num) => num > pivot);
  console.log(`Pivot: ${pivot}, Left: ${left}, Right: ${right}`);
  let sorted = [...quickSort(left), pivot, ...quickSort(right)];
  console.log(sorted);

  return sorted;
}

_quickSort([3, 2, 1, 4]);
