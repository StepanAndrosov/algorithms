function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let copybed = flowerbed;
  let countFlowers = n;

  for (let i = 0; i <= copybed.length - 1; i++) {
    const left = i === 0 ? 0 : copybed[i - 1];
    const right = i === copybed.length - 1 ? 0 : copybed[i + 1];

    if (copybed[i] === 0 && left === 0 && right === 0) {
      copybed[i] = 1;
      countFlowers--;
    }
  }
  if (countFlowers <= 0) return true;

  return false;
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)); // false
