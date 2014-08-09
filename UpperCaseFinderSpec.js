'use strict';

function findCapitalLetterPositions(word) {
  if(word.length === 0) {
    return [];    
  }

  if(word[0].toUpperCase() == word[0]) {
    return [0];
  }
  return [];
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
});