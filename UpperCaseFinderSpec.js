'use strict';

function findCapitalLetterPositions(word) {
  return f(word, 0);

  function f(word, index) {
    if (word.length == index) {
      return [];
    }

    if (isUpperCase(word[index])) {
      return [index].concat(f(word, index + 1));
    }

    return f(word, index + 1);
  }

  function isUpperCase(letter) {
    return letter.toUpperCase() == letter[0];
  }
}

describe("Upper case letters finder", function() {
  it("produces no index for an empty word", function() {
    expect(findCapitalLetterPositions("")).toEqual([]);
  });

  it("produces the indexes of capital letters in a word", function() {
    expect(findCapitalLetterPositions("BAsrwQMPaZ")).toEqual([0, 1, 5, 6, 7, 9]);
  });
});