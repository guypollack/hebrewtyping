export function printResults() {
  endTime = Date.now();

      const timeTaken = Math.round((endTime-startTime) / 10) / 100;
      const lettersTyped = document.querySelectorAll(".letter").length;
      const lpm = Math.round(lettersTyped/timeTaken*60*100)/100;
      const wpm = Math.round(6/timeTaken*60*100)/100;

      document.getElementById("results-container").appendChild(document.createElement("h2")).appendChild(document.createTextNode("Results:"));

      document.getElementById("results-container").appendChild(document.createElement("h3")).appendChild(document.createTextNode(`Letters typed: ${lettersTyped}`));

      document.getElementById("results-container").appendChild(document.createElement("h3")).appendChild(document.createTextNode(`Time: ${timeTaken}s`));

      document.getElementById("results-container").appendChild(document.createElement("h3")).appendChild(document.createTextNode(`Letters per minute: ${lpm}`));

      document.getElementById("results-container").appendChild(document.createElement("h3")).appendChild(document.createTextNode(`Words per minute: ${wpm}`));
}

export function cleanMistakesDict() {
  for (const elem of Object.keys(mistakesDict)) {
      if (mistakesDict[elem] === 0) {
          delete mistakesDict[elem];
      }
  }
}

export function printMistakes() {
  const mistakesStatsContainer = document.getElementById("mistakes-stats-container");
  const mistakesStatsHeaderNode = document.createElement("h2");
  mistakesStatsContainer.appendChild(mistakesStatsHeaderNode);
  
  if (Object.keys(mistakesDict).length > 0) {
      const mistakesStatsHeaderText = document.createTextNode("Mistake Stats:")
      mistakesStatsHeaderNode.appendChild(mistakesStatsHeaderText);
      for (const elem of Object.keys(mistakesDict)) {
          let mistakeStatNode = document.createElement("h3");
          let mistakesStatText = document.createTextNode(`${elem} : ${mistakesDict[elem]}`)
          mistakesStatsContainer.appendChild(mistakeStatNode);
          mistakeStatNode.appendChild(mistakesStatText);
      }
  } else {
      const mistakesStatsHeaderText = document.createTextNode("No Mistakes!");
      mistakesStatsHeaderNode.appendChild(mistakesStatsHeaderText);
  }
}