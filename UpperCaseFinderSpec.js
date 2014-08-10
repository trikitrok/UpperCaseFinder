'use strict';

var findCapitalLetterPositions = require('./UpperCaseFinder.js').findCapitalLetterPositions;

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