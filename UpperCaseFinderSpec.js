'use strict';

function findCapitalLetterPositions(word) {
  if(word.length === 0) {
    return [];    
  }
  return [0];
}

describe("Upper case letters finder", function() {
  it("an empty word contains no capital letters", function() {
    expect(findCapitalLetterPositions("")).toEqual([]);
  });

  it("finds the index of a word with one letter that is upper case", function() {
    expect(findCapitalLetterPositions("A")).toEqual([0]);
  });


});