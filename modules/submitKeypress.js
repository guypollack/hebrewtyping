import { translateToHebrew } from "./translationDictionaries.js";
import { printResults, cleanMistakesDict, printMistakes } from "./endOfGameFunctions.js";

export function submitKeypress(key) {
  if (translateToHebrew[key] === remainingLetters[0].innerHTML) {
      document.getElementById(`${lettersCount-remainingLetters.length+1}`).style.backgroundColor = "aquamarine";
      remainingLetters.shift();
  } else {
      if (letter != " ") {
          mistakes++;
          document.getElementById("mistakes").innerHTML = `Mistakes: ${mistakes}`;
          mistakesDict[remainingLetters[0].innerHTML]++
      }
  }
  
  if (remainingLetters.length === 0) {
      printResults();
      cleanMistakesDict();
      printMistakes();
  }
}