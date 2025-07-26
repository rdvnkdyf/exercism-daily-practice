//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, wordList) => {
  return wordList
    .filter((w) => w.toLowerCase() !== word.toLowerCase())
    .filter(
      (w) =>
        w.toLowerCase().split("").sort().join("") ===
        word.toLowerCase().split("").sort().join("")
    );
};
