export function findAllowedLetters() {
  let allowedLetters = [];
  for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
      if (box.checked === true) {
          allowedLetters.push(document.getElementById(`${box.id}-label`).innerHTML);
      }
  }
  return allowedLetters;
}

export function findForbiddenLetters() {
  return allLetters.filter(letter => !findAllowedLetters().includes(letter)); 
}

export function findAllowedWords(forbiddenLetters) {
  let allowedWords = [];
  for (word of wordList) {
      allowed = true;
      for (letter of word) {
          if (forbiddenLetters.includes(letter)) {
              allowed = false;
          }
      }
      if (allowed) {
          allowedWords.push(word);
      }
  }
  return allowedWords;
}