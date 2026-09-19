// Valid Palindrome (#125) — заодно первое касание two pointers
function isPalindrome(s: string) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (str.length === 0) {
    return true;
  }

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const s1 = 'A man, a plan, a canal: Panama';
const s2 = 'race a car';
const s3 = ' ';

console.log(isPalindrome(s1)); // true
console.log(isPalindrome(s2)); // false
console.log(isPalindrome(s3)); // true
