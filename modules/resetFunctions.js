export function resetResults() {
  document.getElementById("results-container").innerHTML = "";
}

export function resetMistakes() {
  mistakes = 0;
  mistakesDict = createMistakesDict();
  document.getElementById("mistakes").innerHTML = "";
  if (findForbiddenLetters().length < 27) {
      document.getElementById("mistakes").innerHTML = "Mistakes: 0";
  }
  document.getElementById("mistakes-stats-container").innerHTML = "";
}