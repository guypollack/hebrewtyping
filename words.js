function translateToHebrew(letter) {
    switch (letter.toLowerCase()) {
        case "t":
            return "א";
        case "c":
            return "ב";
        case "d":
            return "ג";
        case "s":
            return "ד";
        case "v":
            return "ה";
        case "u":
            return "ו";
        case "z":
            return "ז";
        case "j":
            return "ח";
        case "y":
            return "ט";
        case "h":
            return "י";
        case "f":
            return "כ";
        case "l":
            return "ך";
        case "k":
            return "ל";
        case "n":
            return "מ";
        case "o":
            return "ם";
        case "b":
            return "נ";
        case "i":
            return "ן";
        case "x":
            return "ס";
        case "g":
            return "ע";
        case "p":
            return "פ";
        case ";":
            return "ף";
        case "m":
            return "צ";
        case ".":
            return "ץ";
        case "e":
            return "ק";
        case "r":
            return "ר";
        case "a":
            return "ש";
        case ",":
            return "ת";
        default:
            return letter;
    }
}

function findAllLetters() {
    return ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת"];
}

document.body.addEventListener("keypress", function(event) {
    if (findAllLetters().includes(translateToHebrew(event.key))) {
        lightUp(translateToHebrew(event.key));
    }
});

document.body.addEventListener("keyup", function(event) {
    if (findAllLetters().includes(translateToHebrew(event.key))) {
        unlight(translateToHebrew(event.key));
    }
});


function lightUp(letter) {
    const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
    for (elem of allHebrewLetters) {
        if (letter === elem.innerHTML) {
            elem.parentElement.setAttribute("style","background-color:MediumOrchid");
        }
    }
}

function unlight(letter) {
    const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
    for (elem of allHebrewLetters) {
        if (letter === elem.innerHTML) {
            elem.parentElement.setAttribute("style","background-color:gray");
        }
    }
}