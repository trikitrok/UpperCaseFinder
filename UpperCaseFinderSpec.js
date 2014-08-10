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
  it("an empty word contains no capital letters", function() {
    expect(findCapitalLetterPositions("")).toEqual([]);
  });

  it("finds the index of a word with one letter that is upper case", function() {
    expect(findCapitalLetterPositions("A")).toEqual([0]);
  });

  it("produces no index for a one letter word containing no capital letters", function() {
    expect(findCapitalLetterPositions("a")).toEqual([]);
  });

  it("produces the index of a capital letter not at the beginning of the word", function() {
    expect(findCapitalLetterPositions("aA")).toEqual([1]);
  });

  it("produces the indexes of a two capital letters word", function() {
    expect(findCapitalLetterPositions("BA")).toEqual([0, 1]);
  });
});