function generateNums(n: number, m: number, prefix?: number[]) {
  if (prefix === undefined) {
    prefix = [];
  }
  if (m === 0) {
    console.log(prefix);
    return;
  }
  for (let i = n; i >= 1; i--) {
    prefix.push(i);
    generateNums(i - 1, m - 1, prefix);
    prefix.pop();
  }
}

generateNums(2, 1); // Output: [3, 2, 1]
