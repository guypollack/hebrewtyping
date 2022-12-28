import { createMistakesDict } from "./startOfGameFunctions";

export const initialValues = {
  allLetters: ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת"],
  lettersCount: 0,
  remainingLetters: [],
  englishOn: false,
  keyboardType: "QWERTY",
  mistakes: 0,
  mistakesDict: createMistakesDict(),
  startTime: 0,
  endTime: 0
}