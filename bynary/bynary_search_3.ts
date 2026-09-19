// First Bad Version (#278)
var solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    let left = 0;
    let right = n;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const isBad = isBadVersion(mid);
      console.log(
        `left: ${left}, right: ${right}, mid: ${mid}, isBad: ${isBad}`,
      );
      if (!isBad) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
};

var isBadVersion = function (version: number): boolean {
  return version >= 1702766719;
};

console.log(solution(isBadVersion)(2126753390));
