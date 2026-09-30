// Given two strings ransomNote and magazine, return true
// if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote: string, magazine: string): boolean {
  let noteCopy = {} as Record<string, number>;
  for (const letter of ransomNote) {
    noteCopy[letter] = (noteCopy[letter] ?? 0) + 1;
  }
  let noteCount = ransomNote.length;

  for (let i = 0; i <= magazine.length - 1; i++) {
    if (!noteCount) return noteCount === 0;
    const letter = magazine[i];
    if (noteCopy[letter] > 0) {
      noteCopy[letter] = (noteCopy[letter] ?? 0) - 1;
      noteCount--;
    }
  }

  return noteCount === 0;
}

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
