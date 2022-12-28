export function createRandomString() {
  const allowedLetters = findAllowedLetters();
  const stringLength = Math.floor(Math.random()*6) + 1;
  let randomString = "";
  let i = 1;
  while (i <= stringLength) {
      randomString += allowedLetters[Math.floor(Math.random()*allowedLetters.length)]
      i++;
  }
  return randomString;
}

export function generateSuperscriptLetters() {
  for (container of document.querySelectorAll(".letter-container")) {
      container.children[1].innerHTML = translateFromHebrew[keyboardType][container.children[0].innerHTML];
  }
}

export function generateSentence() {
  document.getElementById("generate-button").blur();
  clearWords();
  resetResults()
  resetMistakes();
  startTime = Date.now();

  let forbiddenLetters = findForbiddenLetters();
  let allowedWords = findAllowedWords(forbiddenLetters);
  let numberOfWords = 0;
  let numberOfLetters = 0;
  let wordArray = [];
  if (forbiddenLetters.length < 27) {
      const textContainer = document.getElementById("text-container");
      numberOfWords = 6;

      if (forbiddenLetters.length === 0) {
          let startIndex = Math.floor(Math.random()*megilla.length-numberOfWords)
          wordArray = megilla.slice(startIndex,startIndex+numberOfWords)
      } else {
          //let i = 1;
          for (let i = 1; i <= numberOfWords; i++) {
          let word = "";
          if (allowedWords.length >= numberOfWords/2) { // dividing by 2 to set a lower threshold for using real words
              word = allowedWords[Math.floor(Math.random()*allowedWords.length)];
          } else {
              word = createRandomString();
          }
          wordArray.push(word);
          //i++;
          }
      }

      for (word of wordArray) {
          let wordContainer = document.createElement("div");
          wordContainer.setAttribute("class","word");
          textContainer.appendChild(wordContainer);

          for (letter of word) {
              numberOfLetters++;
              let letterContainer = document.createElement("div");
              letterContainer.setAttribute("class","letter-container");
              letterContainer.setAttribute("id",numberOfLetters);
              let hebrewLetter = letter;
              let h1 = document.createElement("h1");
              h1.setAttribute("class","letter");
              h1.appendChild(document.createTextNode(hebrewLetter));
              let p = document.createElement("p");
              p.setAttribute("class","super");
              p.appendChild(document.createTextNode(""));
              letterContainer.appendChild(h1);
              letterContainer.appendChild(p);
              wordContainer.appendChild(letterContainer)
          }             
      }            
  } else {
      return;
  }
  lettersCount = document.querySelectorAll(".letter").length;
  remainingLetters = Array.from(document.querySelectorAll(".letter"));
  generateSuperscriptLetters();
  toggleEnglish();
}