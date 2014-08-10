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

  it("produces the index of a capital letter in a one letter word", function() {
    expect(findCapitalLetterPositions("A")).toEqual([0]);
  });

  it("produces no index for a one letter word containing no capital letters", function() {
    expect(findCapitalLetterPositions("a")).toEqual([]);
  });

  it("produces the index of a capital letter not at the beginning of the word", function() {
    expect(findCapitalLetterPositions("aA")).toEqual([1]);
  });

  it("produces the indexes of several capital letters in a word", function() {
    expect(findCapitalLetterPositions("BAsrwQMPaZ")).toEqual([0, 1, 5, 6, 7, 9]);
  });
});