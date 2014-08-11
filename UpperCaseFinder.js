'use strict';

function findCapitalLetterPositions(word, index) {
  if (index === undefined) {
    return findCapitalLetterPositions(word, 0);
  }

  if (word.length == index) {
    return [];
  }

  if (isNotLetter(word[index]) || isNotUpperCase(word[index])) {
    return findCapitalLetterPositions(word, index + 1);
  }

  return [index].concat(
    findCapitalLetterPositions(word, index + 1)
  );

  function isNotUpperCase(letter) {
    return letter.toUpperCase() != letter[0];
  }

  function isNotLetter(char) {
    return !char.match(/[a-z]/i);;
  }
}

module.exports.findCapitalLetterPositions = findCapitalLetterPositions