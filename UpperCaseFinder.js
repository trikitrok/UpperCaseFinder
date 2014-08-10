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

module.exports.findCapitalLetterPositions = findCapitalLetterPositions