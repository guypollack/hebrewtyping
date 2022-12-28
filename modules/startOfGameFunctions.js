export function clearWords() {
  document.getElementById("text-container").innerHTML = "";
}

export function createMistakesDict() {
  let mistakesDict = {
      "א":"",
      "ב":"",
      "ג":"",
      "ד":"",
      "ה":"",
      "ו":"",
      "ז":"",
      "ח":"",
      "ט":"",
      "י":"",
      "כ":"",
      "ך":"",
      "ל":"",
      "מ":"",
      "ם":"",
      "נ":"",
      "ן":"",
      "ס":"",
      "ע":"",
      "פ":"",
      "ף":"",
      "צ":"",
      "ץ":"",
      "ק":"",
      "ר":"",
      "ש":"",
      "ת":""
  }
  for (elem of Object.keys(mistakesDict)) {
      mistakesDict[elem] = 0;
  }
  return mistakesDict;
}
