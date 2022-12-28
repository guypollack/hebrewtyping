import { translateToHebrew, translateFromHebrew } from "./modules/translationDictionaries";
import { wordList } from "./modules/wordList";
import { megilla } from "./modules/megilla";
import { selectAll, deselectAll, randomSelection, toggleEnglish, toggleKeyboard, toggleEnglishKeyboard, changeKeyboard } from "./modules/checkboxFunctions";
import { populateKeyboard, lightUp, unlight } from "./modules/keyboardCreationAndLighting";
import { submitKeypress } from "./modules/submitKeypress";
import { clearWords, createMistakesDict } from "./modules/startOfGameFunctions";
import { initialValues } from "./modules/initialValues";
import { findAllowedLetters, findForbiddenLetters, findAllowedWords } from "./modules/allowedLettersAndWords";
import { createRandomString, generateSuperscriptLetters, generateSentence } from "./modules/generateStringsAndLetters";
import { resetResults, resetMistakes } from "./modules/resetFunctions";
import { printResults, cleanMistakesDict, printMistakes } from "./modules/endOfGameFunctions";


//Add Keypress events

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

//Initialise variables

const { allLetters } = initialValues;
let { lettersCount, remainingLetters, englishOn, keyboardType, mistakes, mistakesDict, startTime, endTime } = initialValues;

populateKeyboard();