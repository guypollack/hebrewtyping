export function selectAll() {
  for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
      box.checked = true;
  }
}

export function deselectAll() {
  for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
      box.checked = false;
  }
}

export function randomSelection() {
  for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
      box.checked = [true,false][Math.floor(Math.random()*2)];
  }
}

export function toggleEnglish() {
  const setting = document.getElementById("toggle-english").checked === true ? "visible" : "hidden";
  for (letter of document.querySelectorAll(".super")) {
      letter.style.visibility = setting;
  }
  const superEx = document.querySelector(".super-ex");
  superEx.style.visibility = setting;
  
}

export function toggleKeyboard() {
  const keyboard = document.querySelector(".keyboard-container");
  const setting = document.getElementById("toggle-keyboard").checked === true ? "visible" : "hidden";
  keyboard.style.visibility = setting;
}

export function toggleEnglishKeyboard() {
  const setting = document.getElementById("toggle-english-keyboard").checked === true ? "visible" : "hidden";
  for (letter of document.querySelectorAll(".keyboard-super")) {
      letter.style.visibility = setting;
  }
  const toggleKeyboardButton = document.getElementById("toggle-keyboard");
  if (toggleKeyboardButton.checked === false && document.getElementById("toggle-english-keyboard").checked === true) {
      toggleKeyboardButton.click();
  }
}

export function changeKeyboard(type) {
  keyboardType = type;
  populateKeyboard();
  generateSuperscriptLetters();
  document.getElementById(type).blur();
}