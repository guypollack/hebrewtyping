import { translateFromHebrew } from "./translationDictionaries.js";

export function populateKeyboard() {
  const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
  for (const elem of allHebrewLetters) {
      elem.parentElement.lastElementChild.innerHTML = translateFromHebrew[keyboardType][elem.innerHTML];
  }
}

export function lightUp(letter) {
  const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
  for (const elem of allHebrewLetters) {
    if (elem.innerHTML === letter) {
        elem.parentNode.style.backgroundColor = "MediumOrchid";
        //console.log(elem.parentNode.lastElementChild.innerHTML);
    }
  }
}

export function unlight(letter) {
  const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
  for (const elem of allHebrewLetters) {
    if (elem.innerHTML === letter) {
        elem.parentElement.setAttribute("style","background-color:gray");
    }
  }
}