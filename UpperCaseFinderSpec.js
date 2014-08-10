'use strict';

function findCapitalLetterPositions(word) {
  return f(word, 0);

  function f(word, index) {
    if (word.length == index) {
      return [];
    }

    if(isNotLetter(word[index]) || isNotUpperCase(word[index])) {
      return f(word, index + 1);
    }

    return [index].concat(f(word, index + 1));
  }

  function isNotUpperCase(letter) {
    return letter.toUpperCase() != letter[0];
  }

  function isNotLetter(char) {
    return !char.match(/[a-z]/i);;
  }
}

describe("Upper case letters finder", function() {
  it("produces no index for an empty word", function() {
    expect(findCapitalLetterPositions("")).toEqual([]);
  });

  it("produces the indexes of capital letters in a word", function() {
    expect(findCapitalLetterPositions("BAsrwQMPaZ")).toEqual([0, 1, 5, 6, 7, 9]);
  });

  it("ignores characters that are not letters", function() {
   expect(findCapitalLetterPositions("3As5wQ6PaZ")).toEqual([1, 5, 7, 9]); 
  });
});