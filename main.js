import { translateToHebrew, translateFromHebrew } from "./modules/translationDictionaries.js";
import { wordList } from "./modules/wordList.js";
import { megilla } from "./modules/megilla.js";
import { selectAll, deselectAll, randomSelection, toggleEnglish, toggleKeyboard, toggleEnglishKeyboard, changeKeyboard } from "./modules/checkboxFunctions.js";
import { populateKeyboard, lightUp, unlight } from "./modules/keyboardCreationAndLighting.js";
import { submitKeypress } from "./modules/submitKeypress.js";
import { clearWords, createMistakesDict } from "./modules/startOfGameFunctions.js";
import { initialValues } from "./modules/initialValues.js";
import { findAllowedLetters, findForbiddenLetters, findAllowedWords } from "./modules/allowedLettersAndWords.js";
import { createRandomString, generateSuperscriptLetters, generateSentence } from "./modules/generateStringsAndLetters.js";
import { resetResults, resetMistakesHtml } from "./modules/resetFunctions.js";
import { printResults, cleanMistakesDict, printMistakes } from "./modules/endOfGameFunctions.js";

//Initialise variables
const { allLetters } = initialValues;
let { lettersCount, remainingLetters, englishOn, keyboardType, mistakes, mistakesDict, startTime, endTime } = initialValues;

//Add Keypress event listeners
document.body.addEventListener("keypress", function(event) {
    if (allLetters.includes(translateToHebrew[event.code])) {
        lightUp(translateToHebrew[event.code]);
    }
    if (remainingLetters.length != 0) {
        submitKeypress(event.code);
    }
});

document.body.addEventListener("keyup", function(event) {
    if (allLetters.includes(translateToHebrew[event.code])) {
        unlight(translateToHebrew[event.code]);
    }
});

//Add OnClick event listeners
document.getElementById("select-all-button").addEventListener("click", selectAll);
document.getElementById("deselect-all-button").addEventListener("click", deselectAll);
document.getElementById("random-selection-button").addEventListener("click", randomSelection);
document.getElementById("generate-button").addEventListener("click", () => {
  resetMistakes();
  generateSentence();
  generateSuperscriptLetters(keyboardType);
});
document.getElementById("QWERTY").addEventListener("click", () => {
  keyboardType = "QWERTY"
  changeKeyboard(keyboardType);
});
document.getElementById("QWERTZ").addEventListener("click", () => {
  keyboardType = "QWERTZ"
  changeKeyboard(keyboardType);
});
document.getElementById("AZERTY").addEventListener("click", () => {
  keyboardType = "AZERTY"
  changeKeyboard(keyboardType);
});
document.getElementById("toggle-english").addEventListener("click", toggleEnglish);
document.getElementById("toggle-keyboard").addEventListener("click", toggleKeyboard);
document.getElementById("toggle-english-keyboard").addEventListener("click", toggleEnglishKeyboard);


populateKeyboard(keyboardType);

function resetMistakes() {
  mistakes = 0;
  mistakesDict = createMistakesDict();
  resetMistakesHtml();
}