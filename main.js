//Button/checkbox functions
function selectAll() {
    for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
        box.checked = true;
    }
}

function deselectAll() {
    for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
        box.checked = false;
    }
}

function randomSelection() {
    for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
        box.checked = [true,false][Math.floor(Math.random()*2)];
    }
}

function toggleEnglish() {
    const setting = document.getElementById("toggle-english").checked === true ? "visible" : "hidden";
    for (letter of document.querySelectorAll(".super")) {
        letter.style.visibility = setting;
    }
    const superEx = document.querySelector(".super-ex");
    superEx.style.visibility = setting;
    
}

function toggleKeyboard() {
    const keyboard = document.querySelector(".keyboard-container");
    const setting = document.getElementById("toggle-keyboard").checked === true ? "visible" : "hidden";
    keyboard.style.visibility = setting;
}

function toggleEnglishKeyboard() {
    const setting = document.getElementById("toggle-english-keyboard").checked === true ? "visible" : "hidden";
    for (letter of document.querySelectorAll(".keyboard-super")) {
        letter.style.visibility = setting;
    }
    const toggleKeyboardButton = document.getElementById("toggle-keyboard");
    if (toggleKeyboardButton.checked === false && document.getElementById("toggle-english-keyboard").checked === true) {
        toggleKeyboardButton.click();
    }
}

function changeKeyboard(type) {
    keyboardType = type;
    populateKeyboard();
    generateSuperscriptLetters();
    document.getElementById(type).blur();
}

//Translation functions

const translateToHebrew = {
    "QWERTY": {
        "t": "א",
        "c": "ב",
        "d": "ג",
        "s": "ד",
        "v": "ה",
        "u": "ו",
        "z": "ז",
        "j": "ח",
        "y": "ט",
        "h": "י",
        "f": "כ",
        "l": "ך",
        "k": "ל",
        "n": "מ",
        "o": "ם",
        "b": "נ",
        "i": "ן",
        "x": "ס",
        "g": "ע",
        "p": "פ",
        ";": "ף",
        "m": "צ",
        ".": "ץ",
        "e": "ק",
        "r": "ר",
        "a": "ש",
        ",": "ת"
    },
    "QWERTZ": {
        "t": "א",
        "c": "ב",
        "d": "ג",
        "s": "ד",
        "v": "ה",
        "u": "ו",
        "y": "ז",
        "j": "ח",
        "z": "ט",
        "h": "י",
        "f": "כ",
        "l": "ך",
        "k": "ל",
        "n": "מ",
        "o": "ם",
        "b": "נ",
        "i": "ן",
        "x": "ס",
        "g": "ע",
        "p": "פ",
        "ö": "ף",
        "m": "צ",
        ".": "ץ",
        "e": "ק",
        "r": "ר",
        "a": "ש",
        ",": "ת"
    },
    "AZERTY": {
        "t": "א",
        "c": "ב",
        "d": "ג",
        "s": "ד",
        "v": "ה",
        "u": "ו",
        "w": "ז",
        "j": "ח",
        "y": "ט",
        "h": "י",
        "f": "כ",
        "l": "ך",
        "k": "ל",
        "n": "מ",
        "o": "ם",
        "b": "נ",
        "i": "ן",
        "x": "ס",
        "g": "ע",
        "p": "פ",
        "m": "ף",
        ",": "צ",
        ":": "ץ",
        "e": "ק",
        "r": "ר",
        "q": "ש",
        ";": "ת"
    }         
}

/*
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
*/

const translateFromHebrew = {
    "QWERTY": {
        "א": "t",
        "ב": "c",
        "ג": "d",
        "ד": "s",
        "ה": "v",
        "ו": "u",
        "ז": "z",
        "ח": "j",
        "ט": "y",
        "י": "h",
        "כ": "f",
        "ך": "l",
        "ל": "k",
        "מ": "n",
        "ם": "o",
        "נ": "b",
        "ן": "i",
        "ס": "x",
        "ע": "g",
        "פ": "p",
        "ף": ";",
        "צ": "m",
        "ץ": ".",
        "ק": "e",
        "ר": "r",
        "ש": "a",
        "ת": ","
    },
    "QWERTZ": {
        "א": "t",
        "ב": "c",
        "ג": "d",
        "ד": "s",
        "ה": "v",
        "ו": "u",
        "ז": "y",
        "ח": "j",
        "ט": "z",
        "י": "h",
        "כ": "f",
        "ך": "l",
        "ל": "k",
        "מ": "n",
        "ם": "o",
        "נ": "b",
        "ן": "i",
        "ס": "x",
        "ע": "g",
        "פ": "p",
        "ף": "ö",
        "צ": "m",
        "ץ": ".",
        "ק": "e",
        "ר": "r",
        "ש": "a",
        "ת": ","
    },
    "AZERTY": {
        "א": "t",
        "ב": "c",
        "ג": "d",
        "ד": "s",
        "ה": "v",
        "ו": "u",
        "ז": "w",
        "ח": "j",
        "ט": "y",
        "י": "h",
        "כ": "f",
        "ך": "l",
        "ל": "k",
        "מ": "n",
        "ם": "o",
        "נ": "b",
        "ן": "i",
        "ס": "x",
        "ע": "g",
        "פ": "p",
        "ף": "m",
        "צ": ",",
        "ץ": ":",
        "ק": "e",
        "ר": "r",
        "ש": "q",
        "ת": ";"
    }         
}

/*
    function translateFromHebrew(letter,keyboard) {
        switch (keyboard) {
            case "QWERTY":
                switch (letter) {
                    case "א":
                        return "t";
                    case "ב":
                        return "c";
                    case "ג":
                        return "d";
                    case "ד":
                        return "s";
                    case "ה":
                        return "v";
                    case "ו":
                        return "u";
                    case "ז":
                        return "z";
                    case "ח":
                        return "j";
                    case "ט":
                        return "y";
                    case "י":
                        return "h";
                    case "כ":
                        return "f";
                    case "ך":
                        return "l";
                    case "ל":
                        return "k";
                    case "מ":
                        return "n";
                    case "ם":
                        return "o";
                    case "נ":
                        return "b";
                    case "ן":
                        return "i";
                    case "ס":
                        return "x";
                    case "ע":
                        return "g";
                    case "פ":
                        return "p";
                    case "ף":
                        return ";";
                    case "צ":
                        return "m";
                    case "ץ":
                        return ".";
                    case "ק":
                        return "e";
                    case "ר":
                        return "r";
                    case "ש":
                        return "a";
                    case "ת":
                        return ",";
                    default:
                        return letter;
                };
            case "QWERTZ":
                switch (letter) {
                    case "א":
                        return "t";
                    case "ב":
                        return "c";
                    case "ג":
                        return "d";
                    case "ד":
                        return "s";
                    case "ה":
                        return "v";
                    case "ו":
                        return "u";
                    case "ז":
                        return "y";
                    case "ח":
                        return "j";
                    case "ט":
                        return "z";
                    case "י":
                        return "h";
                    case "כ":
                        return "f";
                    case "ך":
                        return "l";
                    case "ל":
                        return "k";
                    case "מ":
                        return "n";
                    case "ם":
                        return "o";
                    case "נ":
                        return "b";
                    case "ן":
                        return "i";
                    case "ס":
                        return "x";
                    case "ע":
                        return "g";
                    case "פ":
                        return "p";
                    case "ף":
                        return "ö";
                    case "צ":
                        return "m";
                    case "ץ":
                        return ".";
                    case "ק":
                        return "e";
                    case "ר":
                        return "r";
                    case "ש":
                        return "a";
                    case "ת":
                        return ",";
                    default:
                        return letter;
                };
            case "AZERTY":
                switch (letter) {
                    case "א":
                        return "t";
                    case "ב":
                        return "c";
                    case "ג":
                        return "d";
                    case "ד":
                        return "s";
                    case "ה":
                        return "v";
                    case "ו":
                        return "u";
                    case "ז":
                        return "w";
                    case "ח":
                        return "j";
                    case "ט":
                        return "y";
                    case "י":
                        return "h";
                    case "כ":
                        return "f";
                    case "ך":
                        return "l";
                    case "ל":
                        return "k";
                    case "מ":
                        return "n";
                    case "ם":
                        return "o";
                    case "נ":
                        return "b";
                    case "ן":
                        return "i";
                    case "ס":
                        return "x";
                    case "ע":
                        return "g";
                    case "פ":
                        return "p";
                    case "ף":
                        return "m";
                    case "צ":
                        return ",";
                    case "ץ":
                        return ":";
                    case "ק":
                        return "e";
                    case "ר":
                        return "r";
                    case "ש":
                        return "q";
                    case "ת":
                        return ";";
                    default:
                        return letter;
                };    
        }
    }
}



function translateFromHebrew(letter,keyboard) {
    switch (keyboard) {
        case "QWERTY":
            switch (letter) {
                case "א":
                    return "t";
                case "ב":
                    return "c";
                case "ג":
                    return "d";
                case "ד":
                    return "s";
                case "ה":
                    return "v";
                case "ו":
                    return "u";
                case "ז":
                    return "z";
                case "ח":
                    return "j";
                case "ט":
                    return "y";
                case "י":
                    return "h";
                case "כ":
                    return "f";
                case "ך":
                    return "l";
                case "ל":
                    return "k";
                case "מ":
                    return "n";
                case "ם":
                    return "o";
                case "נ":
                    return "b";
                case "ן":
                    return "i";
                case "ס":
                    return "x";
                case "ע":
                    return "g";
                case "פ":
                    return "p";
                case "ף":
                    return ";";
                case "צ":
                    return "m";
                case "ץ":
                    return ".";
                case "ק":
                    return "e";
                case "ר":
                    return "r";
                case "ש":
                    return "a";
                case "ת":
                    return ",";
                default:
                    return letter;
            };
        case "QWERTZ":
            switch (letter) {
                case "א":
                    return "t";
                case "ב":
                    return "c";
                case "ג":
                    return "d";
                case "ד":
                    return "s";
                case "ה":
                    return "v";
                case "ו":
                    return "u";
                case "ז":
                    return "y";
                case "ח":
                    return "j";
                case "ט":
                    return "z";
                case "י":
                    return "h";
                case "כ":
                    return "f";
                case "ך":
                    return "l";
                case "ל":
                    return "k";
                case "מ":
                    return "n";
                case "ם":
                    return "o";
                case "נ":
                    return "b";
                case "ן":
                    return "i";
                case "ס":
                    return "x";
                case "ע":
                    return "g";
                case "פ":
                    return "p";
                case "ף":
                    return "ö";
                case "צ":
                    return "m";
                case "ץ":
                    return ".";
                case "ק":
                    return "e";
                case "ר":
                    return "r";
                case "ש":
                    return "a";
                case "ת":
                    return ",";
                default:
                    return letter;
            };
        case "AZERTY":
            switch (letter) {
                case "א":
                    return "t";
                case "ב":
                    return "c";
                case "ג":
                    return "d";
                case "ד":
                    return "s";
                case "ה":
                    return "v";
                case "ו":
                    return "u";
                case "ז":
                    return "w";
                case "ח":
                    return "j";
                case "ט":
                    return "y";
                case "י":
                    return "h";
                case "כ":
                    return "f";
                case "ך":
                    return "l";
                case "ל":
                    return "k";
                case "מ":
                    return "n";
                case "ם":
                    return "o";
                case "נ":
                    return "b";
                case "ן":
                    return "i";
                case "ס":
                    return "x";
                case "ע":
                    return "g";
                case "פ":
                    return "p";
                case "ף":
                    return "m";
                case "צ":
                    return ",";
                case "ץ":
                    return ":";
                case "ק":
                    return "e";
                case "ר":
                    return "r";
                case "ש":
                    return "q";
                case "ת":
                    return ";";
                default:
                    return letter;
            };    
    }
}

*/

//Keypress events
document.body.addEventListener("keypress", function(event) {
    window.alert(event.code); // change translations to .code
    window.alert(String.fromCharCode(event.code));
    if (allLetters.includes(translateToHebrew[keyboardType][event.key.toLowerCase()])) {
        lightUp(translateToHebrew[keyboardType][event.key.toLowerCase()]);
    }
    if (remainingLetters.length != 0) {
        submitKeypress(event.key);
    }
});

document.body.addEventListener("keyup", function(event) {
    if (allLetters.includes(translateToHebrew[keyboardType][event.key.toLowerCase()])) {
        unlight(translateToHebrew[keyboardType][event.key.toLowerCase()]);
    }
});

//Keyboard populating and lighting functions
function populateKeyboard() {
    const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
    for (elem of allHebrewLetters) {
        elem.parentElement.lastElementChild.innerHTML = translateFromHebrew[keyboardType][elem.innerHTML].toUpperCase();
    }
}

function lightUp(letter) {
    const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
    for (elem of allHebrewLetters) {
        if (elem.innerHTML === letter) {
            elem.parentNode.style.backgroundColor = "MediumOrchid";
            //console.log(elem.parentNode.lastElementChild.innerHTML);
        }
    }
}

//document.getElementById("mistakes").parentElement.child

function unlight(letter) {
    const allHebrewLetters = document.querySelectorAll(".keyboard-letter");
    for (elem of allHebrewLetters) {
        if (elem.innerHTML === letter) {
            elem.parentElement.setAttribute("style","background-color:gray");
        }
    }
}

//Processing letter entry
function submitKeypress(letter) {
    if (translateToHebrew[keyboardType][letter] === remainingLetters[0].innerHTML) {
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

//End of game functions
function printResults() {
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

function cleanMistakesDict() {
    for (elem of Object.keys(mistakesDict)) {
        if (mistakesDict[elem] === 0) {
            delete mistakesDict[elem];
        }
    }
}

function printMistakes() {
    const mistakesStatsContainer = document.getElementById("mistakes-stats-container");
    const mistakesStatsHeaderNode = document.createElement("h2");
    mistakesStatsContainer.appendChild(mistakesStatsHeaderNode);
    
    if (Object.keys(mistakesDict).length > 0) {
        const mistakesStatsHeaderText = document.createTextNode("Mistake Stats:")
        mistakesStatsHeaderNode.appendChild(mistakesStatsHeaderText);
        for (elem of Object.keys(mistakesDict)) {
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

//Start of game functions
function clearWords() {
    document.getElementById("text-container").innerHTML = "";
}

function createMistakesDict() {
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

//Initialise variables
const allLetters = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ך","ל","מ","ם","נ","ן","ס","ע","פ","ף","צ","ץ","ק","ר","ש","ת"];

let lettersCount = 0;

let remainingLetters = [];

let englishOn = false;

let keyboardType = "QWERTY";

let mistakes = 0;

let mistakesDict = createMistakesDict();

let startTime = 0;

let endTime = 0;

populateKeyboard();

function findAllowedLetters() {
    let allowedLetters = [];
    for (box of document.querySelectorAll(".allowed-letters-boxes input[type='checkbox']")) {
        if (box.checked === true) {
            allowedLetters.push(document.getElementById(`${box.id}-label`).innerHTML);
        }
    }
    return allowedLetters;
}

function findForbiddenLetters() {
    return allLetters.filter(letter => !findAllowedLetters().includes(letter)); 
}

function findAllowedWords(forbiddenLetters) {
    let allowedWords = [];
    for (word of wordList) {
        allowed = true;
        for (letter of word) {
            if (forbiddenLetters.includes(letter)) {
                allowed = false;
            }
        }
        if (allowed) {
            allowedWords.push(word);
        }
    }
    return allowedWords;
}

function resetResults() {
    document.getElementById("results-container").innerHTML = "";
}

function resetMistakes() {
    mistakes = 0;
    mistakesDict = createMistakesDict();
    document.getElementById("mistakes").innerHTML = "";
    if (findForbiddenLetters().length < 27) {
        document.getElementById("mistakes").innerHTML = "Mistakes: 0";
    }
    document.getElementById("mistakes-stats-container").innerHTML = "";
}

function createRandomString() {
    const allowedLetters = findAllowedLetters();
    const stringLength = Math.floor(Math.random()*6) + 1;
    let randomString = "";
    let i = 1;
    while (i <= stringLength) {
        randomString += allowedLetters[Math.floor(Math.random()*allowedLetters.length)]
        i++;
    }
    return randomString;
}

function generateSuperscriptLetters() {
    for (container of document.querySelectorAll(".letter-container")) {
        container.children[1].innerHTML = translateFromHebrew[keyboardType][container.children[0].innerHTML].toUpperCase();
    }
}

function generateSentence() {
    document.getElementById("generate-button").blur();
    clearWords();
    resetResults()
    resetMistakes();
    startTime = Date.now();

    let forbiddenLetters = findForbiddenLetters();
    let allowedWords = findAllowedWords(forbiddenLetters);
    let numberOfWords = 0;
    let numberOfLetters = 0;
    if (forbiddenLetters.length < 27) {
        const textContainer = document.getElementById("text-container");
        numberOfWords = 6;
        let i = 1;
        while (i <= numberOfWords) {
            let word = "";
            if (allowedWords.length >= numberOfWords/2) { // dividing by 2 to set a lower threshold for using real words
                word = allowedWords[Math.floor(Math.random()*allowedWords.length)];
            } else {
                word = createRandomString();
            }
            let wordContainer = document.createElement("div");
            wordContainer.setAttribute("class","word");
            textContainer.appendChild(wordContainer);

            for (letter of word) {
                numberOfLetters++;
                let letterContainer = document.createElement("div");
                letterContainer.setAttribute("class","letter-container");
                letterContainer.setAttribute("id",numberOfLetters);
                let hebrewLetter = letter;
                let englishLetter = ""; //translateFromHebrew(hebrewLetter,keyboardType).toUpperCase();
                let h1 = document.createElement("h1");
                h1.setAttribute("class","letter");
                h1.appendChild(document.createTextNode(hebrewLetter));
                let p = document.createElement("p");
                p.setAttribute("class","super");
                p.appendChild(document.createTextNode(englishLetter));
                letterContainer.appendChild(h1);
                letterContainer.appendChild(p);
                wordContainer.appendChild(letterContainer)
            }            
            i++;
        }
    } else {
        return;
    }
    lettersCount = document.querySelectorAll(".letter").length;
    remainingLetters = Array.from(document.querySelectorAll(".letter"));
    generateSuperscriptLetters();
    toggleEnglish();
}

let wordList = ["של","את","על","לא","הוא","עם","כי","היה","זה","גם","ב","כל","ה","בין","או","אל","אך","יותר","היא","לאחר","אבל","ל","היו","עד","זו","הם","אשר","הייתה","בשנת","כך","רק","אף","ביותר","אני","עוד","רבים","כמו","בית","אם","זאת","שם","יש","מה","לי","כן","כ","לו","מספר","בו","העיר","מ","כדי","אותו","דבר","ו","בכל","אלו","שני","אלה","כאשר","אין","אמר","באופן","הברית","מן","שלא","ידי","לפני","הן","העולם","פי","במהלך","שלו","בה","מאד","ניתן","אז","בעל","אחרים","דרך","ולא","חלק","אותה","בן","בני","אולם","אחר","כמה","המאה","החל","נגד","אנשי","אותם","כלל","מנת","כיום","שונים","המלחמה","שנים","כבר","רב","בשל","בהם","גדול","להם","בעיקר","אלא","היום","במקום","שהיה","וכן","הרב","שבו","זמן","יכול","להיות","לה","יהודים","היהודים","נוספים","הים","ללא","מקום","חיים","המדינה","הארגון","אחרי","רבות","שהוא","שנה","בעלי","מתוך","תוך","ראש","מלחמת","אדם","מול","איש","בדרך","נוספת","שימוש","כגון","יום","באמצעות","מכן","במשך","ואף","לך","האדם","אתה","בשם","ועל","הממשלה","לכל","תחת","לעתים","הזה","מהם","למרות","אמרה","עצמו","שנות","כמעט","אינו","בנוסף","בידי","בעקבות","בעיר","לפי","בקרב","כפי","המשחק","מי","רוב","עבור","ואת","בעת","ארצות","למשל","הצבא","ההגנה","כלי","נוסף","באזור","טוב","בעולם","כוחות","בתוך","הארץ","פני","בארץ","והוא","הדבר","בלבד","כוח","בבית","מאז","החיים","ימים","לאורך","מים","הרבה","בלתי","עליו","אביב","מעל","הגדול","אי","הספר","פעם","ראו","בכך","נראה","לבין","ועד","כנגד","רבה","שבה","מדי","בסוף","המפלגה","במיוחד","שונות","המים","וגם","ככל","שהיו","בתקופה","אצל","עדיין","השנים","לכך","יהודי","ערך","עכשיו","החלו","בזמן","הכוחות","עץ","חיל","אפשר","בעוד","בתי","שלה","האי","באותה","גדולה","הגיע","יחד","למעשה","צבא","מעט","ועוד","שלהם","עלי","ביניהם","והן","ים","ובין","הכל","הרי","אינם","בתחילת","האדמה","המשפט","בצורה","סוף","זכה","מחוץ","בתקופת","פה","דומה","במסגרת","האימפריה","אנשים","מערכת","אולי","השמש","ספר","עניינים","שהיא","אינה","שנת","שלי","לראות","ולכן","בשנים","כתב","הקרב","קטן","ביום","מפני","לשם","תוכן","הכוח","הגיעו","בשנות","בארצות","הדרך","חיילים","תוכנית","הסרט","שוב","עקב","שהם","נעשה","לקראת","בהן","הזמן","מיליון","המלך","שכן","יהיה","המועצות","ממנו","קשה","עבר","אחרות","השלטון","צריך","חידק","היהודית","נמצא","הר","מבנה","החדשה","מכל","בפני","הקמת","אנחנו","קבוצת","שבהם","כולל","חיצוניים","ימי","הביניים","ברחבי","למעלה","מדינות","היהודי","יחסית","התנועה","האלים","מינים","אליו","החברה","ארץ","המבנה","הבית","המכונה","העם","משום","הצליחו","המרד","לתוך","יכולים","סביב","מותו","לב","עתה","מעבר","לדוגמה","האם","הצליח","מחדש","לארץ","העונה","ברית","לנו","קישורים","האלה","מזה","ראשי","עמד","תל","בצפון","לכן","ההנדסה","מבלי","לרוב","שבין","יד","פעולה","גוף","יחידות","שאני","בא","ידוע","ולאחר","תקופה","תקופת","אפילו","למצוא","קודם","לצד","הקהילה","הייתי","במאה","הגוף","מבחינה","יצא","שונה","שהייתה","אבן","לראשונה","למען","מזון","הפך","קו","הבחירות","בניין","שושלת","רקע","כזה","גדולים","קיבל","הספינה","עלה","יכולה","לבסוף","אזור","משנת","השימוש","הפעם","מיד","מין","וכי","אחרת","השנה","אותי","איך","המשיך","בעזרת","כתוצאה","נשק","איזה","האחרון","הגדולה","ליד","כלומר","שום","פחות","בראש","דם","חברת","פעמים","השם","להגיע","החלה","חומרים","היטב","העליון","קרב","נוספות","הקיסר","האוויר","מרכז","רוצה","מלחמה","מכיוון","שיש","כה","מאת","מטרים","היער","הלא","עליה","מצב","הכנסת","לעומת","תנועת","פעולות","מעולם","תמיד","מאות","שמו","מצד","בשלב","בלי","רוח","חדש","היחיד","בהמשך","ארגון","לעשות","חדשים","קצר","בעלות","בניגוד","פעילות","דגל","מסוימים","במשחק","במקביל","בעבר","בסיס","לבית","החדש","להשתמש","במספר","הקבוצה","קיים","המקום","וכך","ואילו","הנה","מאנית","היישוב","הזקנה","הנמלה","ואני","נכון","העץ","סמים","מאוחר","הבנק","באותו","לגבי","כלפי","בימי","הסדרה","חשוב","ובו","מטר","ואז","האחרים","אור","לידי","ישנם","מילים","ליצור","שטח","מורחב","אשכול","שאין","בגלל","ברור","גבוה","הדין","הכפר","העצים","הביא","השונים","העברית","המתמטיקה","ממש","עת","חדשה","הרימון","מת","והיא","בת","קשר","מדינת","אותן","עצמם","נחשב","התקופה","לעולם","העבודה","במידה","שוליים","זכויות","קרא","הגדולים","הלחימה","שאל","הזאת","מקור","חברי","דיוויזיות","מיני","בתל","שימש","ויותר","הביאו","במקומות","הנני","מפקד","שלאחר","מבין","ממנה","עצים","שינוי","הדגל","הדמוקרטיה","בכלל","עליהם","מכך","כמות","היסטוריה","אלי","קיימים","המדינות","מרכזי","ברחוב","האחרונות","ובכך","אומנם","כולם","להורג","קבוצות","להביא","השחקן","חייו","היתר","אנרגיה","העלייה","הבורים","תחילת","והם","האוכלוסייה","ביער","כולו","ידע","יצאו","כיוון","הערות","למנוע","מס","לקריאה","טען","חודשים","בזה","זהו","השאר","גבוהה","בתחום","מסוים","המין","יודע","הקרקע","העירייה","טיפול","נחל","אתם","שלום","גורמים","היחידה","מופיע","השטח","חוקי","הגדוד","וכל","לקבל","בשר","קיימת","פרסם","העכברה","אינני","בדיוק","שר","שאר","ילדים","יצאה","יתר","האל","בספורט","עבודה","לחלוטין","הפרוש","קטנים","נקודות","עצמה","חוסר","בהתאם","תהליך","עצמי","במצב","לבנות","כנראה","הטבע","העולמית","אכן","בזכות","קבוצה","דין","מוסדות","המדבר","השדרה","בנק","לזה","בפעם","לצאת","סמוך","חי","בנו","המצב","דולר","ממשלת","עולם","ספורט","הליברלית","החלבון","שעות","מתחת","בעלת","חזרה","לאור","עברה","הביאה","הגנרל","הגיעה","בחודש","צורך","משחק","תפקיד","אלוף","בדומה","תאי","די","בעיני","קטנה","במרכז","מהווה","יחסי","הפועל","אחדים","מיוחד","ראה","הנראה","לבן","תנועה","לאחד","העובדה","דרכים","לעיר","הפעולה","הפכה","במלחמה","העתיקה","דו","גדוד","חמצן","נא","פנים","מלא","לדעת","עמדו","אדום","בסופו","החוק","הראשי","השפעה","הקולנוע","גבי","לפחות","מדבר","מדינה","כיצד","מות","הבינלאומי","הנשק","בעברית","הוד","כעת","כמובן","משהו","נהרגו","הצדדים","דרום","בדרום","שמות","אוכל","בשביל","משם","מדובר","חזר","מקורות","מהן","מלבד","נתן","עניין","חשיבות","צורת","הצפון","האזור","העיקריים","העצמאות","נבחר","ברוב","והיה","הללו","החליט","מבנים","עמו","לשמור","מאשר","נשים","בטיפול","סנט","הממשל","המסע","ביקורת","הנדסה","הלאה","למדי","הגשם","במקרה","החוף","בנושא","האמנות","העכבישה","שבועות","לבצע","למקום","במטרה","מערב","הדרום","התיכון","מסע","כאן","חצי","באי","קבע","חוק","הגנה","הדם","ובהם","הנושא","שיטות","סוגי","תהילים","שעל","התהילה","המשיכו","גורם","תושבי","הנוצרים","הזהב","באזורים","דווקא","הפיסול","הנמלים","עושה","כסף","באמצע","שמה","יורק","רחוב","יצר","האזרחים","מגדל","שאינם","הצבאי","מרבית","השיר","הלילה","קול","ורק","מעין","במלחמת","במערב","מערבה","התוכנית","תה","הזקן","ערב","עין","משרד","מאחר","בתחילה","תנאי","החיילים","אביו","הקשר","למלחמה","תדיר","ענה","קל","טובה","הימים","לפעול","בניית","לשון","עשרות","המערבי","נבנה","המתקפה","המרכזי","תגיות","באמת","למה","התובע","הבא","יכלו","מסוג","נמצאים","כדור","הורה","ניסה","הדת","כיבוש","לשלטון","גילה","ציון","היצורים","שלנו","ושם","הסיפור","במהירות","בר","צעירים","לצורך","לטיפול","צוות","משמעות","מקומות","העבדות","חושי","שער","החולים","הטוב","לכיוון","מאחורי","תרופות","מסוימת","מעמד","בשטח","זכתה","המחקר","ולעתים","הרכבת","הרוח","לחיות","סיפור","אליה","בשנה","הינו","תוצאות","כולה","אורך","תבלינים","שלך","השעה","שעה","לעמוד","הצעיר","וזאת","מידע","הציבור","המצור","הפיקוד","צפון","מגוון","המקדש","ביחס","משמש","צורות","עמדה","נושא","חלקים","התבלינים","המוות","ייתכן","פרט","הקים","הפועלים","הצפוני","הדרומי","יכולת","השד","בטרם","הרגל","אינן","חד","פועל","רמת","נהר","מזרח","העולמי","העברי","תבוסת","בשעה","התבונה","יער","שמן","פרטים","שאינו","העיקרי","במדינות","פתאום","שיטת","זכו","הפוליטית","דוגמה","פרק","המילים","אוויר","לגמרי","התאריך","הצורך","יצורים","נמוך","כיכר","קרובות","ושל","ועדת","שניתן","השונות","לוחמים","בצורת","דמוקרטיה","נהגה","לתת","מראה","ההיסטוריה","נמצאת","פוליטית","צבאי","ניכר","משתמשים","השפה","במדבר","תיאר","כלום","שאלה","בצד","שכל","חדשות","לאומי","מסוגלים","ניסיון","משני","שלטון","כדוגמת","ניסו","אזרחים","קיבלו","החומה","הקומוניסטית","תיאורים","הסוכנות","התל","שנית","הקטן","כאלה","נפש","עומד","חיי","פתח","האחרונה","פרי","הבניין","מבחינת","לגרום","יצרו","אנו","האלבום","המחלה","תיאור","הקיבה","המערכת","גדולות","הביטחון","להקים","ספרו","סוג","לוחמי","אמצעי","פיתוח","אמרתי","מלכותך","הנער","אותך","העלים","הלך","עולה","האנשים","מסוגל","זכות","בניו","נמצאו","למספר","שהגיעו","אתר","למשחק","שבהן","פסק","עיקר","סגנון","נולד","הלוחמים","פעיל","בספרו","השלטונות","הציונית","מתוארת","ככה","יפה","תהיה","הציע","בנוגע","לסייע","עברו","נותרו","עצם","המרכז","התחנה","בבחירות","כללה","הפכו","לשימוש","כללי","הגטו","דיין","החולירע","קצת","לדבר","בעצם","רואה","קרוב","מתואר","מזג","גדל","אדמה","ועם","מלך","הצוות","מבני","יהדות","בחלק","ברמת","בסמוך","הצי","הנשיא","העיקרית","במזרח","מערכות","המודרנית","כוללת","לגילוי","הגדודים","לבי","היותר","ואחר","הצעירים","האחים","אליהם","לארצות","זאב","לשמש","חודש","המזון","המרכזית","בגיל","נוצר","ההר","ובמיוחד","המזרחי","בספר","בשפה","במצעד","מתארת","תחרויות","עיני","חושב","ברגע","באה","לאכול","החורף","מתאר","מספיק","סיום","אבא","מצפון","שינויים","זרים","הלבנה","הלאומי","דמויות","ביטוי","סדרת","וו","טנקים","הבירה","מועצת","שערים","העליונה","הפעילות","אילו","האיש","אשתו","דברים","במרחק","גרם","הפנים","הבאים","לתיאור","לשנות","אב","כלשהו","כבד","המורדים","התנגדות","בשימוש","החזה","תאים","אמרו","קטנות","תת","לתאר","מראש","לאי","שיר","המינים","בראשית","נפילת","כהגיית","כאילו","כמתואר","לבוא","להילחם","פשוט","מוצא","אמת","לחם","שירה","קווי","בחזית","נבנו","לאזור","עובדה","מחקר","אמנות","אלים","הוקם","אפוא","לאט","רגע","שיח","מהר","לעבור","עולים","הניצחון","חומר","המאבק","משפחת","גורן","התיאור","הביצים","אופן","עשה","עלו","התואר","המשטרה","הכחול","רגל","מעלה","מגיע","מצוי","הבלתי","טבעי","רשת","לגלות","אופי","להתמודד","חלקי","היסטורי","נהגו","גילוי","הכנסייה","סרטים","שירים","היצירה","מוזיאון","חמצני","ממני","תפוח","שאת","בתור","חזק","יחיד","במקרים","לאפשר","מגן","יצירתו","עיר","סימן","מדיניות","תואר","רימון","פיסול","המתארת","בי","רע","הודיע","העת","הלכה","עלתה","זכר","קולות","ארוכה","האחרונים","לטובת","הזו","המתארים","הגדולות","אפשרות","חבר","גן","קילומטרים","הוביל","בעצמו","בדבר","המתאר","שש","נשיא","תרבות","רבי","עשוי","המערכה","הגבול","להגן","מונה","הידוע","להלן","ליהודים","בדיקות","הפארק","ישב","בתיאור","וזה","רצה","כבוד","לומר","איננו","לעלות","ביקש","מלאה","משנה","ראשית","להפוך","תחילה","סדר","בבתי","מטעם","היות","הכולל","השריון","הרפובליקה","מבצע","ומתן","במים","נערך","הפירמידה","שדרות","ענתה","החוצה","אומר","הקיץ","עצי","אחדות","ואין","ואם","לשעבר","ישנה","והיו","כשהוא","כף","ויש","פנה","חסרי","רשמי","להקמת","פעל","בתהליך","רובם","היוו","סמל","קיימות","הפרק","בתואר","אורניום","ללכת","הענפים","חוץ","דעת","נשאר","הבתים","מעשה","לחזור","שב","להשיג","ארוך","הרעיון","הגידול","בים","ברזל","נותר","שפה","ההתקפה","הכיבוש","חלקם","ליצירת","שיטה","דמותו","בקול","השיב","העניין","הרחוב","עמוק","הדברים","בימים","החדשים","מילה","מחנה","אדמת","המספר","שגם","השיח","הטיפול","בגין","לחלק","החשובים","לחימה","להעביר","המטבח","הוחלט","החי","הכללי","נקרא","לכבוש","האויב","הצלב","משמעותי","התפתחות","האצולה","בתרבות","מקובל","אלקטרונים","למטה","ואמר","להן","היבשה","בלילה","סיפר","לעבר","צורה","הגורמים","להמשיך","שדה","הרגלים","הסכם","בעניין","טענו","לקרא","מעלות","מרד","לחץ","רשמית","הצבאית","מנהיגי","הוקמה","תום","לכנסת","הנגיף","שיהיה","באו","לעצמו","ברחובות","צעד","אישה","נשא","דקות","פרס","חום","בליגה","הצליחה","דרכו","ספרי","המקור","השתמשו","הגבוהה","המילה","הבאות","הבסיס","הפלישה","התרבות","שלב","היחס","המפעל","עברית","ירייה","ביצים","צריכה","ביחד","צעיר","בחיים","ענף","הצטרף","מאיר","לפיכך","ספרים","נוסעים","תחרות","ספינות","שיתוף","רחב","לשנת","אירוע","הוקמו","עולי","הוועד","המתים","רואים","משפחתו","לפגוע","הקשה","בעונה","הסביבה","כנסת","נאלץ","משמעותית","יחידת","תור","אודות","הופיע","בפארק","ניסיונות","נקודת","ריכוז","בתולדות","כחלק","ברמה","שנתיים","הביולוגיה","פחמן","הוסיף","הילדים","בבוקר","המשפחה","המשיכה","חומות","אחיו","דמות","צמחים","אש","מנהיג","כאמור","פגיעה","הפוליטי","נמוכה","המשטר","בנייה","המהפכה","תנועות","האתר","המקרא","הפטרוסלינון","הדלת","המלכה","יוצא","עלים","גשם","איננה","הברזל","בהרבה","טרם","השחקנים","הציג","האסלאם","דומים","בפיקודו","במבצע","דת","בפועל","התא","גידול","באוניברסיטת","העלילה","כזאת","השחורה","ילד","חייב","משפחה","נמשך","עסק","חבלה","הגבוה","תולדות","אירועים","האור","חופש","הידע","בהדרגה","ממוצא","כללו","בכוח","מתקופת","שימשו","גישה","בקרבת","מסוימות","ניכרת","המקורי","סרט","מאפיינים","ללמוד","עבודתו","פועלים","מולקולות","בודאי","האלון","למות","גבעת","מדוע","הנשים","חיות","כעבור","שחור","חסר","ממשלה","האמינו","מכונה","לעיל","כאחד","היחידות","השפעות","הראשית","בנות","בברית","חיילי","הצלחה","טוען","נפשי","נקבה","בערב","שזה","רעיון","המועצה","יוכל","משטר","הליגה","האדום","במדינה","באשר","אחוז","ביצע","בגטו","מנחם","חיידקים","לשוב","נפל","היד","פורסם","שיעור","הטובים","ראוי","מוות","לקח","נעשו","גל","נאלצו","סירב","מצויים","לוח","לפרוץ","לבעל","נכתב","המברק","שלטונו","בשבי","אזורים","ימינו","עליית","בסרט","עדויות","בעיות","חוזר","סוגים","יהודית","אווירניים","תודה","לכם","בעד","שקט","להישאר","להבין","המצוי","מצא","לאל","חדר","משפט","חברים","החוץ","הלבן","התרופות","מורכב","הגישה","במערכת","סרטן","היחסים","ציוד","חומרי","כפר","היכל","בעונת","משנות","האלקטרונים","האנזים","עמדתי","לבקש","אחריו","שאפשר","לשאת","להציג","שנערך","קשים","הלחם","החומר","הכללית","בכפר","בסגנון","ניצחון","תמורת","ולבסוף","פעלו","ענק","יין","לכוחות","תורה","אמנים","חברה","הדרומית","באתר","בהר","הנהר","לקרב","ציור","הערים","בהיסטוריה","עשויים","חוזה","בפעילות","נקבע","תופעה","הופיעו","האנושי","משתנה","מרוב","עיניו","שמש","הטובה","ואשר","קרן","חולים","משפחות","יכולות","להניח","קיבלה","בסדרה","הכלכלי","מחנות","יחידה","ידועים","ורבים","כחול","דרש","במילים","בגוף","החזית","שטחי","מדרום","לקיים","הידועים","עקרונות","יצירת","להצלחה","מהמאה","שימור","עקרון","המסורת","האנושית","הפרעות","החיל","מופיעה","הלווייתן","מצאתי","נשמע","יושב","יהיו","שיכול","התחתון","האחרות","איום","משחקים","מהלך","להוכיח","בסך","שנעשה","האב","ביניהן","למשך","לרבות","ובעיקר","הטבעי","סדרה","איתי","הטבח","המערב","נשלחו","בראשות","צבאית","פוליטי","החוקרים","התלמוד","עליך","הצעירה","לחשוב","לכתוב","מוקדם","לילה","שכבר","במחיר","מאמר","השוק","אמור","לתפקיד","שנקרא","בהצלחה","בסיפור","טוענים","מיוחדת","מידה","תקווה","ואחרים","חשובים","זהב","הינה","ביקר","מזו","מהיר","יימס","למדינה","לשחק","שירת","שלט","שהביא","המשחקים","הוראה","הרחובות","בחברה","קצינים","המקומיים","מתן","יסודות","לפיה","הנהגת","הבולטים","הסרטים","המנדט","אותנו","לקחת","הולך","נראתה","לנסות","נהרג","נבחרת","הנבחרת","זוהי","המסחר","הקו","העניק","לבני","קצב","המשך","מאפשר","מהווים","ומספר","המזרח","התקיים","הוציאה","העולים","הדרכים","דמוקרטית","גשר","טרור","נמשכה","נחשבת","המשלוח","צפונה","שכונה","פרוץ","הרומית","לים","קשרים","חזקה","אוכלוסיית","הטלוויזיה","שיחק","החלוקה","האקלים","הארגונים","ההסתדרות","פועלי","אופניים","מתרחשת","סיף","פירות","שאם","רעב","שהן","הקברות","קבלת","השלום","במחצית","נפלה","שלח","השחור","שלם","שהגיע","פרשת","ניתוח","שיא","בכמה","בגובה","טבע","מימי","מקומיים","מבוסס","ישירה","התנועות","מלח","סיוע","האיחוד","לצבא","חופשי","ירי","התושבים","ביצורים","שימשה","לספירה","הלאומית","נערכו","ההשפעה","תורת","ובשנת","משחקי","ישנן","פצצות","עיריית","חקר","זהה","נפוץ","נהוג","הקוטב","שאתה","הכרוב","ירד","קדימה","מבית","ואפילו","למוות","שבע","עמוד","עובר","לשלוח","האמת","בקיץ","הלב","מצאו","קשות","השערים","באליפות","בצבא","להגנה","פרץ","אישית","השתתפו","הכריז","יחס","לשחקן","הנוף","הנוער","בדיקה","הפדרלי","הקבוצות","נבנתה","ישיר","קצרה","מיוחדות","מסורת","מודרנית","פלוגות","איסור","יוצרים","תופעות","בשדרה","בנחל","הפילוסופיה","האנרגיה","אנאבוליים","אבידות","אנכי","הרחק","האביב","המטה","לגובה","הראש","מועד","לפנות","עליהן","לעזוב","ידועה","להסביר","תלוי","חייהם","הסתיים","ברוח","הודות","החלק","ההחלטה","בתים","נרחב","קרבות","פרטי","אזרחות","אזרח","חסרת","כוחו","השפעת","הדמות","בולט","רימונים","בירת","מאנשי","הנוצרית","גרסה","בסדרת","דוגמת","מבוססת","למעט","אישור","אוצר","המוסלמים","נוצרים","ייצור","ערבים","נעליים","הכלב","הצרצר","הביתה","נורא","בוקר","ציפור","קראו","הקטנים","שעבר","זוג","כשהם","בחדר","ספק","וחצי","ואלה","פתיחת","פתוח","עשו","חשש","אחראי","השופט","השאלה","הבין","השואה","נפץ","משמר","ישירות","חשובה","גברים","טענה","נודע","יסוד","לאדם","להשתתף","שערי","קבוע","חג","הציבורי","הסיבה","ספורטאים","אויב","ואנשי","הצפונית","ההתנגדות","שכלל","בספרות","המערבית","ביצוע","הקודש","עלייה","התפתחה","הקריירה","המודרני","הביטוי","אתרי","דגים","בשום","לספר","מגיעים","גבר","לעזור","קם","לחפש","הבאה","בחזרה","נכנס","חשבון","כתבי","כותב","גורל","מצליח","עונת","אימה","התקשורת","בתגובה","ממשיך","האפשרות","סיים","נרצחו","מעשי","ובעלי","כושר","העביר","המולדת","קיסר","בכיכר","במחלוקת","תושבים","אמצעים","אירועי","התנאים","התקיימו","פלוגת","יוצאי","להפיק","השירה","הבנייה","החמצן","קת","המרתון","השריקה","השיבה","נדמה","החלון","לו","לשים","החדר","פרחים","יודעים","שאף","למחצה","לפעמים","התברר","להוציא","להחזיק","אפשרי","במחנה","בתא","בסדר","בנה","למחרת","למצב","לסוף","ארוכים","דמוי","שחקן","פרסום","לקו","המוח","הקודם","נפגש","שנועדו","השיטה","הרבייה","הצטרפו","בייחוד","מבצר","והייתה","הובילה","כאל","מפלגת","הועברו","בתנאי","עולמית","נטל","המחתרת","נפרד","שיצר","הסנדק","הפירמידות","הרומח","רבייה","דעתי","הערב","רצון","לשיר","דברי","מסביב","למי","מנה","לבנה","בשעות","קנה","כזו","הקודמת","תלויה","נפלו","מלון","שלהן","חלב","הענק","ההצבעה","גזע","באש","לתקוף","לעסוק","לכאורה","ובה","שפעלו","שנותרו","פעמיים","המעבר","הקבר","הזוג","הסופר","דגן","בפרט","בבניית","צבע","התקפה","מקדש","שפת","האמונה","החינוך","עבודות","נפוצה","מחלות","חברתית","תחום","במבנה","בקבוצה","בפרק","אלמוגים","אלוהים","איתו","תכף","הקרמת","זחל","זקן","קן","קץ","ומה","ואחרי","הבריאות","עושים","שמע","מקומו","לטפל","דרכי","בהיר","ארגוני","נפתח","מתחיל","מושג","מקבל","מקרים","הזמנים","מחוז","להימנע","והחל","המספרים","בתום","מיוחדים","לימים","המפורסם","התנהגות","הזרים","הגורם","גודל","בסביבות","מצור","מפלגות","עבד","אנשיו","בכלי","הקרוי","החברתי","משתמש","תחנות","פעילותו","גטו","למים","להצביע","הבור","אתרים","האנדרטה","וכדומה","במחקר","החתול","שתן","האיגרוף","ביולוגיה","הטרופי","המעלות","בעצמי","צעקה","איפה","ראיתי","אתמול","רגלי","מקרה","מבקש","האפשר","עומדת","נסע","מעטים","השומר","גרמו","שקיבל","אסור","המידע","הקהל","בענף","מלחמות","לוחם","ערכו","אזורי","הלשון","הקשת","הטענה","הסדר","בשדה","בעיה","סלע","המבצר","סבר","קצין","היווה","בחירות","נוצרה","מרחק","פירוק","המציאות","מוסלמים","משקל","המבנים","העובדים","מימן","מסלול","פיתח","התחרות","בנוכחות","תהליכים","חלבונים","ישבתי","הכנימה","הבקר","לשבת","צריכים","מתים","מכתב","טובים","מתאים","שרק","ראשו","מתחילה","הישן","שחקני","עזר","כיס","היסוד","מסר","לעבוד","לעצור","והדבר","שרידי","התורה","הנמצא","בחצר","לייצר","להחזיר","תקשורת","התקבל","הופך","בדיקת","רעיונות","מתוכם","מוגבל","מזרחה","לח","שירי","שווה","פעולת","הדור","גיר","במאבק","בתנאים","בהקשר","נכשל","המפלגות","ששימשו","לצורכי","המבוסס","הקולות","מורשת","שנוצר","המוסלמי","הרוב","דופן","הופיעה","השירים","הרכב","רכבת","פתרון","כוללים","ההעתקים","והלח","צבי","פסלים","הקלאסית","אשרה","תרכובות","חומצות","האדון","לשמוע","נאה","הבר","רוצים","תועלת","קרה","הקיר","עלינו","כאלו","היינו","הספרים","בשעת","לשלם","שבוע","בקצה","בחורף","ידעו","להתקיים","החצר","מידי","מקומי","שחקנים","פרש","הקול","האמיתי","הסכסוך","בעיתון","ואל","ובהמשך","התהליך","הפרטים","האצבעות","דן","במסע","בקו","מטרות","מצוק","יתרון","ובהן","שמאל","ששימש","אישי","בשירה","בחייו","בהנהגת","ציד","האונייה","סמכות","שכללה","תעלת","שריון","צבאיים","התנגדו","הרקע","העמים","האוקיינוס","באוויר","וחלק","חזית","הדעות","הבינלאומית","הדתי","תוכניות","בתוכנית","מוקשים","מוצרי","חוקרים","הפסל","הנדסי","באותם","אגן","התאוריה","בשלהי","אוניברסיטת","המדעי","הורמון","בסמים","השחפת","הרגשתי","לישון","הלכתי","יכלה","שמא","הציגה","רחוק","צעדים","חבל","קלה","השדה","נראו","החלטה","דרכה","מעץ","מטה","לראש","הדיון","הרשות","לחוק","התקבלה","התעופה","סגן","מפתח","מסיבות","עוסק","עברי","האירועים","הכיר","בניסיון","סכום","משא","שילוב","שאלת","עזב","הועבר","הפיתוח","החשוב","במדינת","בבניין","דרומה","הקרבות","שטחים","הלוחם","חוקית","חברתי","היריב","מאבק","דעות","הטוענים","רחבה","נתפס","למד","הקומוניסטי","בקשר","סמך","נאמר","מחלוקת","ומשם","עשויה","המקומית","השוליים","הכלל","הטמפרטורה","גיל","בור","בארגון","ובית","קשרי","עתיד","במקור","בדרכים","היקוות","המוסד","זהות","מציין","יוצר","מאפשרת","ירוק","ובכל","הצהריים","ישר","פניו","אישר","מתו","לזמן","הסביר","שעליו","השער","הסמוך","ברציפות","לערוך","הצד","הסכים","בלב","בפתח","בצבע","נדיר","לציבור","הצדק","הנוכחי","בקלות","רכב","מוחלט","לתקופה","לפתח","לרגל","תמיכה","תמונה","פרקים","המטרה","התגלו","הנמצאים","גורמת","נותרה","צבאו","החופשית","שליטה","העברת","חתם","עמדות","ביטול","תקף","האזרח","לספק","בפעולות","לקבוע","שבט","מופיעים","מפקדת","זיהוי","השתתף","בתפקיד","התיישבות","המרחק","קיום","תחומים","הסגנון","בפרס","החומרים","האדונים","מחר","וכעת","המלכות","מפה","ודאי","הכסף","הפרחים","לילדים","הצהיר","מחשבה","לדבריו","בלא","כשהיא","הולכת","הקטנה","מוזיקה","מכה","מביא","מנסה","שאינה","התוצאה","בפי","לאתר","להישגים","להרוג","אינסולין","אורח","בתו","בשיטה","נטען","מתקדמים","מפעל","לאנשי","אמן","כלשהי","התרחש","גדלים","סיבה","הלאומנים","פלישה","בלחימה","תוכניתו","נעצרו","הוועדה","הסיבות","איחוד","אוכלוסייה","מאמץ","המלוכה","המקומי","באזורי","גדודי","במשקל","חלקית","האישי","החרב","בדמוקרטיה","מחלת","מהתקופה","מנגנון","לפעילות","ומאוחר","שחמט","אפקט","הינם","השתמש","הפילוסוף","ההיסטורי","הדמויות","רמות","ציורי","בדגל","הבימה","הציונות","רשימה","להפקת","אקלים","האוניברסיטה","מדעי","לימודיו","בתחרות","ארסנל","חן","והנה","חפץ","רעה","לבד","כליל","משרה","בתוכו","טעם","הכהן","העלה","נותן","ונראה","החולה","הגברים","לכבוד","עור","מגרש","לפתוח","ואולם","הגשר","רצח","שדות","עזרה","כהה","הוציא","הצמחים","הסמוכים","דור","נושאים","משרדי","מחסור","מגלה","קדם","אגם","המשורר","השרירים","העבר","הרשמי","בנשק","צור","נהג","נדרש","לניצחון","כבשו","קורבנות","החומות","גנרל","בוצעו","מפקדי","לכיבוש","תומכי","לשלוט","למטרות","הכיכר","מתח","חל","הקשרים","הכרזת","מתקדם","מחבר","לשינוי","לזהות","פסל","המונח","המקובל","הספרות","טלוויזיה","ממוצע","שזכה","שכבות","פגיעות","השפות","האש","הכתיבה","הבדלים","הריצה","מוזכר","מפלס","גופים","המאפיינים","גנטית","האלמוגים","הזבובים","בקרבי","צחק","מכיר","קולי","השמים","צילום","נמסר","שייך","במה","קוראים","באדמה","צמח","צר","נשארו","מהרה","שבאו","קלות","ענפי","שומר","שחורים","עסקים","זמני","שנייה","זכאי","התייחס","הטילו","וכאשר","חמור","אפשרית","אנושי","החליטה","הזכות","הדומה","במהרה","רד","מכאן","מסמר","לרב","לנוע","שהביאו","קשת","קרקע","פרצו","עלילה","אובדן","אוסף","כישלון","המזרחית","הבשר","דמיון","גול","סיפורים","נע","כשיר","תגבורת","השבויים","נסוגו","הרוגים","מטוסים","הקצינים","מפרץ","הוצאו","שפות","צו","מלכותו","הבמאי","ליברלית","ובראשם","ובנוסף","בשיתוף","להופיע","לבניית","קטע","המקומות","האמנים","לימודי","להבחין","תכונות","וזכה","פיצוץ","עבודת","אימונים","המתחם","הבינוני","העיוורים","יציאת","בתחומי","הפקת","האבל","אלבום","מרתון","המירוץ","הסיף","מאומה","הכבוד","הנסיכה","בהחלט","הקן","יבוא","תוכל","עשתה","השחרור","רצו","כתוב","הראה","יורד","לפניו","עוברים","הכריזה","הבעיה","נוח","יחדיו","לוותר","לחיים","פינוי","גופו","בכנסת","מנהל","להתייחס","דרומית","גבולות","מטרה","לשלב","לדרום","וידאו","שחרור","פגעו","איי","המוזיקה","המקרים","הקדוש","הכניסה","הספורט","בראיון","בצורות","בסביבה","מתקפה","הדיוויזיה","הביצורים","במחנות","החוקה","במערכה","לברית","החזיקו","עסקו","הידועה","בכיוון","ממלכת","מסמכים","ואילך","שקיבלו","עמם","טקס","פריצת","היסטוריים","הפגיעה","גרעין","ביצירת","מכיל","תחומי","תאוריה","שכתב","המסלול","הרבים","יישוב","הרובע","בתקופות","לפיתוח","קולנוע","בהשפעת","מדע","הטבעית","הדיפלומטיה","סופרים","מחקרים","הפסלים","בחקר","בסוג","שרירים","הזכר","שריקה","יודעת","חושבת","שמעתי","אומרת","איזו","הרעב","לפנים","יקרה","ויהי","קרונות","לאיש","מאמין","הנס","שמחה","רגליו","תפוחי","בצל","להכיר","לנהל","פונה","ביד","המחנה","חלקה","רשות","משכן","לציון","שוק","פינה","עורך","אביה","אבי","כראש","ביתו","ספינה","נוהגים","משמשת","לתמוך","להיכנס","שהפך","שהחל","שנערכו","עצמאית","איבדו","חזה","אסון","הוצגו","החוקי","הגמר","באמצעים","בחלקו","צהוב","כוחותיו","ההתקדמות","לקבלת","במרד","סחר","השמאל","נרחבים","שינה","כלכלי","טענות","מסיבה","שהוקם","האזורים","נפטר","מקרב","השפיעה","ברורה","ספרות","עמק","ביטחון","בחלקים","בהשוואה","רחבי","תמונות","תאוריות","חלקו","הקשורים","העוסקים","בימינו","סניף","יהודיים","הציוני","רבן","בולטת","נמנים","בממוצע","עלילת","בתחרויות","הטבעיים","סרטי","רכיבה","פשוטי","המכניקה","חייבת","אינך","מסודר","להאמין","הגבעה","שמנה","שקל","ניר","לשאול","הילד","התחיל","מזל","סעיף","מיץ","לאחרונה","אמיתי","לחדור","עוזר","המתאים","הלכו","השמן","הזכרים","בינתיים","בערך","ליל","להעלות","שורה","עונה","זרם","היקום","השקט","החלב","צדק","ארמון","המלח","הסתיימה","ציין","סופית","ממערב","מטרת","לחצות","לסיום","ולפיכך","שירו","שכבת","פשוטים","כינה","כספים","המכון","הופעת","הופעות","השראה","הפנימי","הכדור","הגזע","צד","סף","נמוכים","נוצרו","נכשלו","הצבאות","טבח","לסגת","השפלה","לרשות","פוליטיות","הרשמית","לממשלה","למטרה","השבטים","צבאות","ביצעו","בזירה","מאמצים","מכלל","התוצאות","סירבו","ניהול","מוחלטת","ואכן","שנקראה","הובילו","החליטו","בערים","רדיו","סייעו","מסוף","והפך","חינוך","חלוקת","חוקים","כנסיית","המושבה","השלב","האות","לנשים","תנאים","אימון","חברות","כללית","המשמש","הגן","בינלאומי","בנושאים","לאמנות","קבוצתו","עיקריים","המוזיאון","הפתיחה","בהיעדר","צלזיוס","נתונים","סילוק","במקורות","ריבוי","מכון","לוואי","ברשימת","לשפה","הבקיע","ריצה","החולד","עניתי","שאנחנו","השמיכה","השוטר","הקוקיה","הפרעוש","האיכר","הספסל","התפוח","הפשע","נמלים","לעצמי","העורך","היקר","הציפורים","ישבו","להטיל","שכר","בראשי","ילדי","עמוקה","הבוקר","ליום","לצפות","העדה","צל","מוסר","נעים","ושאר","ואחד","עומדים","אות","חוף","הרגיל","רגילה","נוטה","נכונה","מוכנים","יכולתו","וכלי","שמירה","המראה","הנמל","הנקבה","דלק","בשיר","לזו","לכדי","שעדיין","פירוש","פקודה","עצמאי","חלה","זוכה","כבדה","המדע","העין","הכלי","הטרור","הניסיון","גבול","במטבח","בשמו","בעבודה","רפואה","סיפורי","נלחמו","נהנה","שביתת","מאורע","המפקד","מלכתחילה","החוקים","רכוש","התקפות","בתמורה","בקרבות","להפסיק","שלל","חופשיים","המושבות","התקדמות","במקומו","נשלח","מיקום","חידוש","טווח","תיאטרון","תקדים","וכתוצאה","פרטיים","הובאו","החלטות","מתקיים","מוסד","לסרט","וניתן","קודש","עלול","אישים","מורכבת","מחלקת","מגורים","מבקרים","יצירות","לציין","ובעל","שנבנה","פגש","המושג","המשתתפים","העוסק","הגל","דוגמאות","במגוון","בהיותו","ניצב","עיוורים","המרי","מחלקה","ובייחוד","במקרא","משמשים","מציג","תרגום","בשיטות","באולימפיאדת","אורגניות","החשמלי","פעמי","השמיע","ביצה","באיזה","לגדול","ארוחת","בונה","וכמו","האוכל","מבט","וכמה","שעת","דיבר","שעברה","מקבלים","לנצח","פועלת","הבטיח","למלך","שירות","היכולת","סיכוי","מוכן","שורות","המחלקה","ההצלחה","ההסכם","הסיכוי","גרעיני","בהגנה","בדרכו","בטענה","נתנו","משטרה","מפגש","מאזור","לשיא","תוצאה","תכנן","שעברו","הסכמה","גרמה","במובן","סגור","הסובייטית","מטוסי","המחנות","הטנקים","אימפריית","פיקודו","ולמעשה","שנועדה","התגוררו","התנגד","הודו","ההרים","ליחידות","שהוקמה","הוראות","הפעיל","כשל","המדובר","השינוי","בשנית","מקלעים","מצע","לקבוצת","הקלעים","נועדה","מעורב","מחברי","מטבח","תפקידו","שימושים","עובדים","הפרשה","האנושות","הרחבה","בבסיס","אדריכל","פרעות","הפעולות","משימות","המרכזיים","הכלים","מסחרי","הוצאת","מאפייני","טמפרטורה","פותח","העשרה","הייסורים","האבולוציה","העצם","מהירות","לספורטאים","גדילי","מירוץ","מלאכותית","נגיף","ובכן","כמוני","המון","בריה","ושוב","השעון","החיות","הגברת","מספרים","לאנשים","איתם","המעשה","מונח","שים","מר","מסכים","ארצה","הלח","בשיא","משטרת","יערות","למרחק","ואולי","הסופרים","גביע","במעלה","ביתר","בחצי","ראשונה","רגיל","נזק","מתחילים","מגע","ירידה","קובע","עלולים","אבני","חנינה","ביקור","רצונו","סבל","ממזרח","משלו","משותף","יצור","לשכנע","לחקור","להתרחש","להשלים","שנמצא","קושי","פוליטיים","עוסקת","ערים","חומה","כמקום","כביש","המזרחיים","התחתונה","הקדושים","העיתון","גילו","רשימת","רגלים","סך","הקיפו","המגינים","ירו","הקונגרס","בשטחים","מתנדבים","שנועד","התפשטות","מנע","המשותף","המשבר","ההכנות","הסופית","ותחילת","פיקד","כבש","בציבור","מוגבלת","להעניק","עצמן","היוותה","בודד","נתפסו","מוצג","ימיים","לדגל","לבחור","שכללו","שנכתב","קומה","עיקריות","אורכו","החברתית","הכוללת","בקריירה","בעבודות","באמנות","ציר","נקראת","מצויה","שאינן","חייל","האסון","דיכוי","דתיים","במוזיאון","רחובות","הכפיפה","להר","אנושית","מתייחס","שירתו","הציבורית","עונות","אמו","הצורה","פילוסופיה","הביקורת","תבליטים","הגדילה","המושא","הגיבור","לקבוצה","חוקרת","החלבונים","הדקר","הגדילים","השלשול","העשב","משונה","קראה","תראה","ומיד","חיה","יבשה","לדברי","בבקשה","ציפורים","יוכלו","מותר","שבא","התפקיד","השבת","נפצעו","לעבודה","להתקדם","לבנים","נפתחה","נכבד","מחיר","מחצית","קרובים","האמין","נאום","נראית","מגדלים","מטעני","למסור","לנקוט","שעמד","קטעים","כלא","האיכרים","החזק","גדלה","במי","בעודו","נושאי","מאוחרים","ימין","לירות","לקחו","לסוג","שהצליח","עלות","עקבות","היחידים","הפרש","העל","הגומלין","הנשימה","דחה","גובה","בארמון","המפקדים","ניתנה","למרד","ובסופו","מהירה","חיו","ממדינות","לכיכר","הראשיים","סברו","לחומות","ותוך","שרשרת","הפוליטיים","דתית","דתי","בקנה","בענייני","סטודנטים","נתיב","לז","שמקורו","בשורות","בחירת","מחודשת","לזכות","תוכנן","כלכלית","הישיר","התפתחו","האינדיאנים","הבסיסי","הראשוני","בחודשים","בנוי","טבעית","ממשפחת","מוגדר","מזכיר","תפיסה","חיבור","המידה","המוקדמים","הכשרה","הסופי","דמויי","ברובע","נציגים","הרומאים","ביישוב","המקראי","קיומו","באר","עיסוק","בנקודה","התפיסה","הנושאים","גרסאות","מכילה","לתחייה","שריר","התייחסות","מקצועי","כמלך","המשמשים","עבודותיו","שחיה","היערן","הדב","הנך","נחמד","ועכשיו","המשוכה","להגיד","הפלוגה","בפנים","ידיד","לבו","שאמר","הירוק","בגדי","שתהיה","יקר","גמר","להראות","הכלא","דיווח","רחוקות","מחלה","לרדת","שבת","קורה","אלון","הסוהר","במשחקים","מכתבים","מהסוג","תגובה","שומן","שבר","איבד","אסף","הקודמים","הספיק","דיון","בכתב","להתחיל","תמך","וזו","שיצא","קהל","קריית","אזרחי","חצר","מפעלי","לחקר","לאסוף","להגיש","ואינו","שאותה","אמורה","ארוכות","אצבעות","אסטרטגי","המקרה","השמאלית","הקורא","האקדמיה","דיבור","בגדר","רצים","ניצחונות","נתון","נקבות","הגולה","דיביזיית","מתקפת","הסוחרים","קפטן","הפריצה","הנוצרי","חוקה","הקשים","רישום","שקדמה","שאותו","עוצמת","הוצאה","מתכת","מוצרים","מפלגה","מערבית","מגיל","לוחות","שיצאו","קהילת","התיאטרון","הפילוג","הזרם","בדרגת","ניצח","מקומית","למנות","פסיכולוגי","אחים","אספקת","המוסלמית","טבעיים","סוסים","נכתבו","מנזר","הממצאים","בשדרות","תחנת","תכנון","בריכת","התאמה","הציד","במדי","תוצר","ההבדלים","משיריו","ואלוף","הסימפוניה","הכחדה","השחמט","חומצה","בטמפרטורה","בועות","הנעליים","האינדוקציה","חלף","זבוב","לזאת","היית","מובן","לרוץ","העוברים","בשבילי","מוזר","לעוף","שמי","אגב","התחילה","דמי","לעת","מאכל","יוצאים","לחשוף","מסחר","ירדו","פרח","חייבים","סביבה","נשאו","לכמה","ובאופן","אירע","מחשש","מחזור","מרים","למסע","לאלה","תשומת","אילן","כבדים","מובהק","מפת","מצדו","יעילה","יאיר","יזם","למכור","להימלט","שהיוו","שהגיעה","קלע","חמורה","חול","אדיר","חדרו","אבו","כמויות","כהן","המתנגדים","המובילים","הולכים","החלוץ","הזכויות","הביע","הריכוז","הסדירה","גוש","בממשלה","ביערות","בודדים","בעץ","בסיום","בסכנת","רכבות","נמצאה","נקראה","נחשבים","המסדר","לגייס","הספינות","ממשל","משלחת","הקימו","בראשותו","נרחבת","משפטי","ספורים","יצרה","שמר","קהילה","חש","היכן","נעשתה","מסעות","שליט","חברתיים","כמקור","בקולנוע","נשיפה","נהרס","מיעוט","מדויק","למעמד","לאיחוד","התקיימה","התגלה","הגרסה","הניתן","בוגר","בפיתוח","בדמות","ציבור","נתונה","מאוחרת","מדרגות","ייחודי","למותו","לדעתו","וכו","עמה","עופות","זמנו","בולטים","קורס","בשמות","רשמיים","ממצאים","לפעולות","תוספת","דב","משבר","מאותה","משטח","למבנה","הקשורות","המבקרים","חנה","המקורות","רפואיים","המתמטי","פארק","ניסויים","השחייה","המרחבי","הורמונים","העופות","האלמוג","אפשרה","ידעתי","ואלך","והגזיר","אתן","חפצתי","באויר","שאתם","שכבו","לשכב","שמעו","ישבה","אנה","התסיסה","העלמה","לוקח","מכבי","ההיא","גבו","סביבו","פתחה","ברק","מאמן","קורא","ענפים","האחר","ריח","צפוי","מיליארד","מטוס","עלולה","אהבה","הפה","נסיון","מיום","התחילו","הארוך","הצבע","בידו","רמה","לעם","לחברה","להוביל","להרחיב","לבדוק","תצוגה","ואינם","שנמשך","זמנים","המחשבה","המצויים","דומות","דבריו","גבוהים","בלשון","בשלבים","בגודל","מכשולים","מצוין","למאבק","למרכז","תעופה","קרני","פתוחים","פס","איכות","חלונות","אחותו","המדיניות","התמוטט","התקבלו","הקרוב","העליונות","האמן","החיסון","בינה","בתנועה","בפיקוד","בעתיד","נשקם","נחשבו","למתקפה","תותחים","העקירה","צי","מלחים","לחמו","וכלל","קיצוני","למדינת","שבויים","חמושים","הועלו","רובים","נתקלו","לחוף","התומכים","שניסו","איים","אדמות","דרשו","בעיקרו","פעלה","עידן","אמונה","חטיבת","באוכלוסייה","ניהל","שהביאה","שנודע","הממלכה","מודל","ובעקבות","שפע","אישיים","חקירה","חזקים","המוכרים","השליט","הקושי","הרגליים","סביר","משמאל","אלמנטים","הממוצע","המשווה","הפרדה","האבן","הדגים","הציור","דיפלומטיה","בריכוז","סנטימטרים","נוסד","המצוק","במת","ליהודי","נציגי","אקצה","חיבר","הגופים","לבניין","התפתח","התרחשה","נובעת","ייצוג","עצמות","חזיר","האימה","ערכים","בטבע","הפרי","יצירותיו","לפיסול","התסריט","האקספרסיוניזם","בפיסול","ביצירה","הפותחת","אסורים","התרופה","עירויי","כמתאגרף","בביולוגיה","חשמלי","משחות","הקרחונים","מוטב","שמתי","זבובים","הביטו","בדעתי","ירוקים","החולות","מרגיש","לבה","החובל","שקלים","כביר","האמיתיים","מוכרח","מחסומים","חכם","כתבה","המלאה","למרגלות","אכלו","הישנה","באים","להכין","התעלה","בשבוע","בטקס","להוסיף","הלחץ","הסוסים","הנפש","בינוני","רוחות","נעשית","מעצמות","ידיים","לאחת","תלויים","תחושת","ובלתי","ובני","קמה","העתיד","הגיש","הציגו","הסכימו","במורד","בקצב","צדקה","סופה","משחת","מפעיל","מעמדו","מזרחית","מרחב","למין","לשנה","לעניין","להשתלט","לצדו","וטען","שליד","שוכן","שאלות","שנעשו","ערי","חיובית","זרעים","כלכלת","המלכותי","המחאה","הפסיק","הפסקת","העתידית","החלקים","החלפת","הכוכבים","בשילוב","בדרכם","סופי","מברק","ללחימה","לדון","כוחם","מצודת","שופטים","פרצה","אספקה","המבצע","הקומוניסטים","להגנת","השטחים","מסים","שהחלה","קיצוניים","פיקוד","היסטוריונים","העדיפו","בשטחי","נאמנים","מבצעים","חופי","העיקריות","נוקשה","עוררה","המערביים","האחראי","הצלחת","רכושם","נמנע","ממקום","לרכוש","שנחשב","אמצע","זיכרון","הסיפורים","ביצירתו","מנהרות","לימוד","להב","לגידול","תקופות","תפוצה","תפקידים","שפרסם","המקובלת","היותו","הוצע","הוצב","הפדרציה","הערך","האסלאמית","הבחירה","הצלחתו","הצורות","ביטויים","בריכות","נפוצים","הלגיון","בפינת","הסלע","הלאומיים","קפה","הצמחייה","מאידך","מייצרים","משתתפים","לגוף","קדומים","התזמורת","הצבעה","הפרט","עולמו","המיניות","בטלוויזיה","מחשב","בבדיקות","לווייתן","טורפים","גזי","קמתי","איכפת","כמוך","הערת","הזבוב","הגון","הרקבון","צלחתי","סליחה","אליך","עצה","כעין","הירוקים","בכבדות","צמחו","בבת","לקחה","פניה","הכי","הדר","בעלה","כמוהו","המסך","הרגע","באור","טובות","רץ","נעלי","למשפחה","שיכלו","אט","המפתח","בטוח","בראשו","טיפוס","נשמעו","מיון","מבוא","לאדמה","עיניהם","השיחה","הניתוח","לסגור","שהדבר","חמים","נתוני","נעשים","מציע","ואחת","שנראה","קרבה","חיזוק","המיוחד","המגדל","גג","בתוכה","ממשלתו","מעצר","מאמצי","מאחור","יצירה","לשרת","להתגבר","לדמות","לדרך","לטענת","ובדרום","שזו","קרקעית","קצרים","פתחו","עצמית","אליהן","כחולים","הליכה","הכרה","הברה","הנוסעים","גומי","בשאלה","נפתחו","נפט","נגזר","מושל","מרחבי","למרחקים","לייצור","לשפר","לשער","להבטיח","ויצרו","שיריו","שעליה","שנתן","קלים","פורסמו","פער","עוברת","עבורם","חששו","חפצים","המופיעים","הופכים","הוטל","הוצג","הרוחני","במציאות","במסלול","ביקורו","בתקווה","בשוק","בחוף","סל","נעצר","הסריסים","בידיהם","להתקפה","לנתק","הסמכות","הסובייטי","העמדות","הבינלאומיות","מסדר","למערב","העממית","בשאלת","בניצחון","לזירה","המודיעין","התעמולה","מיידית","כיבושה","היערות","החיצוניים","יעיל","שיצרו","שראו","המעמד","הוצבו","בניינים","ראשוני","נערכה","נכנסו","שהה","אוניות","כלים","המיעוט","החליף","בינלאומיים","באימפריה","בנמל","סכנה","נמל","נוסדה","נגדו","מכונות","תעמולה","אנדרטה","המקורית","האירוע","דאג","בנים","בנוסח","נמצאות","משותפת","מערך","לקידום","לפרסם","להבדיל","ובראשונה","שנערכה","אוכלוסיות","המיתוס","המועמדים","התבטא","האמיתית","החשובות","הרופאים","הצעות","הניסוי","הנקרא","בלדר","בתקופתו","בחיי","ציורים","הקיוסק","הנחלים","מהיהודים","הבונים","העבריים","במפעל","הרומי","הקדומה","ההלכה","קומות","האופניים","בנושאי","זהים","לפרק","תומך","וכלה","חברו","התחנות","השפיע","הרצון","ציבורית","מתחרים","ייחודית","המוביל","המשנה","היסודות","הבדל","הספירה","נייר","ניב","ניתנת","מסתרי","לקולנוע","דגושה","נהגית","נטיית","למדע","צאצאים","המתחרים","החייזרים","הרהיט","המולקולה","הגנים","צחוק","יושבת","באתי","מטילה","שבני","שצריך","נער","שעון","חולה","הבעל","הרצפה","הניחו","לעזרה","עוף","אימת","בקר","באביב","לעץ","קצה","אבד","המשמר","דעתו","מקלט","לבדו","אותיות","אפור","כולן","הודיעה","העדיף","מחאה","מגיעה","מספרת","מנהג","למקור","לקנות","לאות","להקל","תכלת","שמירת","קבורה","פיו","איה","המוני","האח","הסבר","במידת","בקשה","בפומבי","מלווה","יונקים","לעין","לעצמם","לזכר","להחליף","לבתי","ולשם","ואשתו","שמדובר","שי","שעשה","שכנו","קירות","קבועה","פגעה","איבדה","חומצת","המחבר","הישיבה","התעשייה","הוכרז","העירוני","האישה","הכנת","הגבוהים","בדם","ברשת","הכף","הגשרים","באנשי","הקורבנות","הציר","הסיוע","נהנו","לעומק","לחזית","צפונית","הישג","הפוליטיות","הפנימית","במפלגה","ביבשת","סיור","ממנהיגי","לתוכנית","עשויות","הקדושה","הבניינים","באיים","נפגעו","מודרניים","מנעו","לכתר","לנצל","היסטורית","האגדה","צדדית","מתפקידו","מוסלמי","מסורות","לתקופת","שערך","שהחלו","כשנה","הסיכון","הנחה","רצועת","נגרם","מוכר","ילדות","למפלגה","לארגון","ושימש","וכיום","ובנו","המהגרים","הקדיש","בתנועת","בוצע","ברובם","מילולי","מתון","מעורבות","מנגנוני","לעלייה","לכלי","להפעיל","ומוסדות","שמקורה","קברו","פרויקט","איור","אינדיאנים","העוסקת","ההבדל","בחירה","בחוק","בחריפות","סיירת","הזיהוי","יהודיות","יציאה","המוסדות","ישיבת","ליהדות","עפר","מצוות","הקיימת","מקובלת","מרכזיים","כיהן","הוכחה","הוספת","השפעתו","משאבים","מסעותיו","לאלו","והגיע","הגותו","היהדות","במילה","מתקיימים","שאנו","התחייה","בעידן","תרכובת","חלבון","ההחלפה","קרח","האיים","לזלול","שלכם","שולחן","שכחתי","שכבתי","זכרוני","הכלניות","הצדה","רוחי","קראתי","חשבתי","אדון","כבודו","הירוקה","בך","בתוכי","בשבילך","בריות","אחריה","חסד","הטילה","לבלי","עכבישים","רם","לאחור","ההוא","רושם","מכירה","מרחוק","ממה","יבש","לפתע","קר","אייר","אצלו","החדרים","דק","בוא","בקרוב","צעירה","ממילא","מלאים","מאמינים","לחייו","להביע","ולכל","התשובה","הקדמונים","הסערה","דלת","ומראה","חזרו","אסירים","הלבנים","גרוע","בקיצור","בקרקע","בכירים","בבני","ידם","שיוכל","שוות","פשוטה","אומרים","חשיפת","היצור","העור","החדשות","הגעת","הצעה","הנקבות","בשאר","סיכון","ניסתה","מיליוני","מתאימים","מקרי","מפנה","מראות","מסגרת","ידיעות","יסודי","למשפחת","לידיו","לתושבים","להתפתח","להשפיע","לבקר","לנושא","לנוכח","תורם","תשלום","תפילה","וכמעט","והביא","שלטו","שופט","פעולתו","עמודים","עצמאיים","אלימות","חופשית","אריה","המאפשר","המצודה","הירח","התותחים","הופעתו","הודיעו","השליטה","הקרח","האוצר","החזקה","האדומים","הדתית","הרבות","הציב","הנודע","הנקודות","הנבחרים","גלי","במדיניות","בענפי","טבעו","צליל","נובע","נכונות","נס","עבדות","המבצרים","התגבורת","הדייל","פרשים","אווירית","האבירים","כבדות","גרילה","התקווה","השאיר","בשלטון","הדרומיים","במתקפה","יומיים","לצפון","שלמות","שאנשי","הפרשים","הכלכלה","ההוצאה","בשורת","למלחמת","אזרחית","הורשו","החיצונית","הצו","מדיני","לפעולה","לבסס","ואלו","המנהיג","גשרים","מאלו","לתפוס","לשחרור","תוקף","פנימי","חרף","כמפקד","הוצא","הכלכלית","הצפוניים","הסחר","בל","נוחה","נוצרי","נקט","ממספר","מעיד","להתאים","תומכים","וביניהם","חריפה","היבשת","דגש","באורך","נוספו","נטייה","מחתרת","לביקורת","תערובת","שרף","אמירה","אלמוגי","המבוססת","המסחרי","היישובים","הלהב","הוצגה","הקרובה","הענקים","האומה","הכוונה","ההנהגה","הבסיסית","הנהלת","באסלאם","בנפרד","קלעי","ההבלגה","אחוזת","קרבית","לאומית","תיבות","תלמידי","עדות","שאותם","שאחד","אחוזי","הייחודי","מוצגים","לחזות","המנוע","הוויכוח","הקיים","מורכבות","תסיסה","קשריו","עולמי","אלוהי","הצופה","הקלפי","ביוגרפיה","סימון","למחקר","תמונת","צולם","אופקים","ההגייה","נמרוד","להקת","לביקורות","מתמטית","חיוביות","אקולוגיה","בסיבוב","השאול","הסיוף","גדילה","הנפוצים","הפחמן","קרחונים","ממך","מודה","עשיתי","שכב","ההשגחה","המעצר","למראה","ליער","שאי","מהו","לדאוג","ובכלל","הנפט","מעניין","מענה","להניע","שאלו","אוהב","המועד","בבכי","מלוא","מתושבי","לחדר","להפסקת","ודרך","אמון","זר","חצות","החזיר","הגוזלים","הניח","גב","צומחים","סר","נוהג","מלאכה","משל","משאר","מקורו","מאמרים","ישנו","וראה","שד","פרשה","אוטומטי","חשובות","חריף","התרשם","ההפרדה","הרעיונות","הצמח","גישור","במוח","ביקורות","בלוח","בכדור","רופא","צפויה","סחורות","מוביל","מוצלחת","משקה","יגאל","למדינות","לשתף","לפועל","לעומתם","לכוח","להצטרף","לדיון","ויכוח","ועליו","שלמים","שהתקיימה","שרידים","שנשא","עזבו","עבדים","איתן","אחריהם","אבות","כוכבי","כשהיה","התמונה","התייחסו","הושלמה","השופטים","הפיק","הערכות","האזרחית","הכוללים","הבניה","גנים","במכתב","באוניברסיטה","בגודלה","צורתו","נמנה","נכנע","המחלוקת","העקורים","העימות","הנגד","לוחמת","חציית","המאמץ","השושלת","החודשים","משמעותיים","לוחמה","תקפו","קרויה","מכרעת","למחנה","לביצוע","ונשים","שיט","שהוציא","הזדמנות","גורלו","גברה","בשפת","בפגישה","ניכרים","משפטית","מקביל","למניעת","חמוש","ארגונים","כוונה","המזכירים","ההמונים","הגיב","הגרעין","דורש","גדות","ניצחונו","משולש","תיקון","פופולרי","עז","חוקיות","חודשי","כאמצעי","כבסיס","הלימודים","הפעלת","האפיפיור","הרווחת","בהכרח","בנשים","טכנולוגיות","ממקור","מתמטיים","מתרחש","מועמד","משורר","מעשית","מערבי","מזרחי","מדרגת","מרכזית","למזרח","לשימור","לשתות","לקבוצות","לערך","לדמוקרטיה","ונחשב","שטרות","שנבנו","קשור","קדוש","פולחן","כינוי","כריתת","המרחב","התרבותי","השוואה","השגרירות","הפופולריות","הזיכרון","הצומח","במרבית","בורות","בשירות","בעיית","רישומים","נפרדים","ביהודי","לנחל","סמלים","עיתון","ראייה","המסמך","תלמידים","רכישת","הבאר","בשנותיו","וכיצד","שיקום","זנב","מסלולים","ושיטות","פרישתו","אימוני","חילוף","כמעין","היין","הושפע","הצופים","נולדה","נחש","העבודות","פילוסופים","ביכולתו","אבולוציה","השייכות","בילה","בתערוכה","המכירות","מתמטי","הרפואה","פסלי","מינית","בסרטן","לאלים","המדידה","הביולוגי","רקמות","הגנטי","חרקים","הארוחה","הבישול","מחשבות","ואמנם","ואביט","קיבה","עף","עט","אתכם","המלוה","המחרת","העופרת","החלותי","ביציע","רטן","צחקו","צרצר","במחשבות","בחוץ","רגעים","מצבי","קרבי","כדאי","הכרטיסים","יכולתי","עמל","אמי","חשבו","מכירים","פרסומת","השניה","הדלתות","גופי","גור","ברעב","מלמעלה","מזמן","מאליו","הביצה","באין","משלי","מחירי","מאלה","מכוסה","לענות","לביתו","לסיים","הקרובים","ההשקעה","מכירת","מסייע","מסביר","תכופות","שבכל","חשד","המאכלים","העולה","ממוגן","מסך","יק","ידו","לפרלמנט","לרוח","תחושה","שכבה","שבתוך","עמדתו","עשיר","אגדה","המלאכה","המוצא","השלבים","הרוחות","הרבנים","במגרש","בתוקף","בשער","בעין","ריצת","סגורה","משתנים","מעריכים","מחסה","למסקנה","לקום","לקדם","לבטל","לסדרת","ובמשך","ובשל","עטיפת","אמיתית","איטי","חלום","חוקרי","חוקר","אחיה","אחוזים","כשלון","כשר","ככלי","כהונתו","המודעות","המגן","היציאה","השוטרים","הפינוי","הפסידה","החליפה","ההוראה","הבולט","הבכיר","דווח","במרחב","בתחתית","בעומק","בהתנגדות","בהוצאת","בדעה","ספריו","נמלטו","נועד","נעורים","נטו","משוריינות","ארטילריה","הקונפדרציה","האספקה","מפציצים","קיסרי","בצי","להתקיף","המזוינת","פקידים","פקודת","פצועים","משטרו","בכוחות","להוות","שקדמו","שנמצאו","עצמאיות","אצילים","העבירו","ההנחה","במושבות","בהתקפה","מילימטרים","להשמיד","בכיבוש","רובי","נורו","נשמר","מודיעין","לחיל","להחליט","להבקיע","הקרויים","החשש","הסטודנטים","ביחידות","בגלוי","ציבורי","נדרשו","מייסד","מילולית","מקו","מחוזות","מדינית","מטענים","לפיו","וליצור","וחלקם","שעלתה","קודמות","פיגועי","כפולה","המוחלט","התגובה","הנסיך","סבו","נתגלו","נהרסו","מתוארים","מתקני","מועמדים","מכוסים","מהעיר","מנהרה","לבלתי","תעשיית","ובתי","שליחים","שזכו","קשורים","קהילות","עמודי","אופיינית","חשיבה","חזקות","כבית","המוקדמת","המוכר","המשפיעים","האופן","הכותרת","ההצעה","הסיום","הסיבוב","הנהרות","הנטייה","דורות","בעמק","טרופי","רומן","צפיפות","סיפק","סם","נאסר","מלב","הרבני","תהומי","שחקים","השדרות","בפרעות","גדי","סגירת","מבצעי","מאורעות","המנהרות","עתיקות","חבריו","המגורים","משקאות","מעיינות","התאחדות","רשויות","צינורות","מייצג","מושגים","לתרבות","לשרוד","תא","פלגת","גופם","בתחומים","בדיעבד","מנסים","ידועות","השימור","הקשור","בקלפי","ליברליות","מורה","יציבה","תאוריית","זיקה","לתואר","תפוצת","אמנותי","הכדורגל","בירה","נפח","השיגעון","מטפל","במאים","הגייה","הוריו","להיכל","סרטון","נגן","החזרה","הפואמה","לנוער","התופעות","הדומים","רוכב","המימן","החיידקים","הכדורסל","גלוקוז","גומלין","ברומח","רומח","סיבובים","לתחרות","פיזיולוגיה","מכילים","בטמפרטורות","חיזור","ירדתי","אצלי","כולנו","לבנין","וכה","שלשול","שזיפים","ענפיו","להציע","בשמש","בשלום","מלכת","מאין","חרושת","מתוק","לתוכה","פיה","עופרת","ציינו","נחתם","להודיע","ויאמר","הישנים","ההכרה","הס","דיברו","בכבוד","צמודה","משך","מנוחה","זכוכית","הזרעים","החרדים","הבגדים","הטובות","בדברים","מצליחים","לשדה","שהעניק","עונש","עצום","חלש","חופשיות","הידיעות","הידיעה","הולכי","השתנה","השחורים","האותיות","האנושיות","הסכנה","במקצת","בחר","נענה","נסיעה","משרת","מפורט","מהארץ","מטופל","מסודרים","להכריע","לרגלי","ומאז","ולו","ואחרות","והחלו","שלחו","שלטה","ששמו","שעלו","שכונתה","פוגע","פשרה","פנימית","עבודתם","חיפוש","איכרים","זוהר","חשיבותו","כפול","המוקדמות","היקף","התיק","התקדם","התפילה","השמרנית","החשובה","הכפרים","הרים","הרדיו","הנקראת","גורלם","גזר","במחלה","בינו","בשבת","בגופו","בבירור","בטעות","צבעים","סוד","סכנת","כקיסר","הקומוניזם","הכניעה","לנהר","בחבל","פיטר","פקידי","בשיאה","בהרים","נסיגה","לתאם","להעברת","כלכלה","המחוזות","הקיסרות","סבלו","מנתה","לגשר","והעיר","אבירי","סייעה","מאזן","מנקודת","לכת","והצבא","ובקרב","ששהו","שרדו","המהלך","הימי","הקתולית","העומד","בידם","ניווט","מודרני","מרביתם","למעבר","למבצע","וכוחות","ונתן","שקדם","חולקו","אחרית","כמאה","התפתחויות","האצילים","הרס","בעיתונות","סיבות","ניצלו","ממושך","מורכבים","מפקדים","מעורבים","מרגע","יחסים","למערכת","לתקשר","לתנאי","שלבים","שפעל","שרת","קיומה","עוצמה","חלקן","כונה","המורכבת","השכלה","גיוס","בוצעה","רובן","ראשונות","סבלה","נוסח","מקצועיים","לתרום","לחודש","שלטונות","שותף","שורשים","שעסק","שחלק","שהוביל","שריפת","פוטנציאל","פריצה","אופייני","כוכב","המאוחדת","המהווים","הפסקה","הדמוקרטי","במשפט","בלחץ","בתקשורת","בזמנו","בכמות","סרטו","נפילתו","נאלצה","הציוניות","ומגדל","צירים","יורדים","העיתונות","הארי","הריסת","קיבוץ","ממוקם","פעולותיו","המיוחדת","התאים","הציורים","הסברה","מאובנים","מספקים","תהליכי","עשור","ענקיים","המקהלה","בהשתתפות","מתבססת","מסה","לשמר","לפרס","שנכתבו","קשורה","קצרות","איגוד","חוקיים","חשמל","אטום","העתיק","הדורות","הנמוך","הנוכחית","גבוהות","בשונה","נמוכות","נבחרים","נצפה","הפרדת","גישתו","לקשר","שלד","חגי","ירקות","מילות","מתוקים","מסתיים","לתופעות","איטית","כשחקן","כחומר","המלון","חזרתו","עבורו","מקיים","מאכלים","סבון","מולקולת","ויטמין","התופעה","תוחלת","חממה","הבהאי","יצאתי","ואצא","והכל","ובזה","פרעוש","אחרתי","אכלתי","כפעם","הוספתי","השועל","הפרושים","הפרקליטות","האין","החתונה","הכפתורים","גליון","גדמי","במרוצה","בלבי","צעק","נמלה","לשום","תראו","עצמך","חלפו","בעצמך","בחור","בזאת","ברכי","רבע","נגמר","לחכות","להביט","לגשת","שבתי","חלון","אוהדי","כדבר","האבטלה","בשקט","בחדרי","יפים","חדרי","היריבה","הקואליציה","הכנפיים","ברוך","נופלים","מעורר","ישנים","אישום","חשב","חדל","הענף","הארוכים","הסוחר","דמעות","משפחתי","ליתר","לסדר","שעלה","שכמעט","התאבד","העז","האהבה","הארמון","הרפואי","הרף","נחת","מאסר","מגלים","להורות","שוחרר","שקע","פיל","התמרמרות","השלימו","הפסיקו","ההורים","גוזלים","בענפים","בזו","בד","רחוקה","נעלם","מוכרחים","מעצי","מנגד","למשוך","לסל","ומעבר","וגדל","וראש","וספר","שיוכלו","שארית","שניסה","פורסמה","עמוקות","זקוק","כרטיס","הודה","השבוע","האלופות","הנייר","בכלא","בריתו","מימין","מישור","מתקן","מועדון","מארץ","מגמה","מטען","מצבו","מצבם","מסופר","מסקנות","למתן","לתחילת","לכפר","לגור","לסביבה","תרומה","וללא","וקבע","ורז","שליח","שכך","שכם","שבמהלך","פתוחה","פסקו","עלילות","עדים","עצרו","עסוק","חמורות","אמה","חתול","אדומה","חדרים","חרב","כים","כלכליות","כתיבה","הושלך","הופצו","הפתוח","הפתרון","האיום","האישיים","האישית","האדיר","הארוכה","הזנב","הד","הבינו","הבחין","הבדיקות","הראו","דבש","במגדל","בביתו","רוחב","רפה","סימנים","סופר","סבורים","נישא","ניצחה","נוצות","נכנעו","נטה","מהחומה","לבורים","הפיצול","והורה","המלחמות","מיטב","המעורבות","שאריות","אווירי","המרידה","התביעה","הטיל","נייטרליות","מפשע","לרכז","והגיעו","העירוניים","מחלוקות","לכישלון","להכות","תחבורה","ודרום","שמדרום","שעשו","שריפה","עימות","זמנית","חבלים","כניסת","הימנית","הליך","הדעה","במדויק","סיפקו","ניהלו","ניצל","מודע","מפרש","יבשת","יציבות","לשאלה","לאוכלוסייה","תמכו","ומבנים","וציוד","שהיווה","שהובאו","חורבות","כמחצית","כשפה","המיוחדים","האטלנטי","הגבוהות","הנסיכויות","דרגה","גופות","גודלו","גרגרי","בעורף","ברצועת","ניסוי","נסגר","מתייחסים","מתייחסת","מסעו","מסחרית","ייסד","להגדיר","לראשות","תצפית","ומות","שבנה","עירוניים","איסוף","המצעד","ההיסטוריון","הרחב","הרכבות","במזון","ברובה","ברורים","ברבים","בסיפורים","רגילים","נייטרלי","נתיבי","נוף","נפרדת","להניף","לגטו","והאחות","ערוגות","חייליו","מחלקות","להנדסה","שכונת","רובה","מדברי","לחצים","תוצרת","זרוע","השכונה","הקמתו","ולמרות","כנסייה","מסוגים","ייסוד","תוואי","עיצוב","חקיקה","אחראית","בציור","מאגר","לתחום","קובעת","עוסקים","אימצה","זיהה","גדולי","במסורת","באותן","נהוגה","מאפשרים","מסמל","תלמידו","תופעת","ויין","המדוברת","התמודדות","העזר","הבשורה","דיוק","בעיצוב","בחולות","בגמר","נחושת","האוריינט","בשיטת","הקיימים","בפילוסופיה","המדעית","מתבטא","מובהקת","לפילוסופיה","ומקום","חברתיות","בעבודתו","לסדרה","אנדרטת","כתיבת","דרמה","סיפוריו","אולפני","סרטוני","ההפקה","מיוצר","הלוואי","לפירוט","הגדלת","דגי","תזונה","השורשים","הפסקול","האינטראקציות","בבעלי","ממריצים","להגדלת","קליפה","אסורות","התחרויות","רוכבים","תגובות","הבדיקה","מולקולה","מנות","זכרים","אלמוג","התחממות","מהרתי","חנקן","כשאני","התעסוקה","משים","ששם","אעשה","האופוזיציה","ראשיהם","מתה","מנוח","לסעוד","שמים","עכביש","חניון","כנפיים","הפחות","בצהריים","נשאה","נקי","יתן","וחזר","חור","אבדה","באלה","צרות","נפשו","להשיב","להסתפק","עשב","הרופא","ברכה","מאחד","לתא","לשלום","להסכים","וכדי","חורף","אונים","אבנים","השחר","הזרה","בוחן","ראיות","צאת","נעלמה","מומחים","מקומה","מרובה","ידידות","לשירה","ומי","ולפי","וכיוצא","שמרה","שיהיו","חליפות","חם","כשם","התפטרותו","הודעה","השרים","הפירות","הפלא","העיכול","דובר","בוטל","בקשת","בחומר","בראשה","נובל","נכנסה","מושבה","מוכרים","מעגל","מאותו","מחברת","מביניהם","מבקר","מסוגלת","יופי","למאה","לשוני","לפתור","לחתום","לחזק","להגביר","לרשותו","לסיפור","לסיבוב","ומוות","ומעט","ואמצעי","וגורם","שייכים","שלג","שאיפשר","שבועיים","שנפל","פתאומי","פסולת","עורר","עזבה","עצומה","זעירים","זרות","כוס","כפות","כרכים","המלא","המתיישבים","המהירות","המהווה","התנגדה","הקלה","הקטע","העיסוק","העלו","הבעלים","הראייה","דקר","במתכוון","ביקשה","בוודאות","בשורה","בשדות","בניתוח","רכש","ניצול","נאות","נחרצות","נגרמת","נסיבות","לקיסר","האווירית","הבריגדות","למחנות","לחיילים","עליונות","בוש","להכריז","התיקון","התקדמו","נכבשה","תמכה","שטחה","שנמשכה","התמיכה","רפורמות","מצוידים","מנו","לכינוי","תקיפה","ולנסות","וגרם","המקדשים","הוחלף","החקלאית","הראשונית","בגבהים","צבאיות","נאמנות","מקצוע","מסילת","קציני","אולטימטום","אחרון","המוסר","המעורבים","השיג","הפולחן","האידאולוגיה","בידיו","בפעולה","בסיסיות","סלילת","נלקח","מוקדמת","מעורבת","לבגרות","תפס","ותחמושת","וקיבל","וצפון","שמרו","שיפור","שורת","שקיבלה","שעסקו","שהציע","אושר","כלכליים","התערבות","התחתית","השגת","הקרויה","העוסקות","ההיסטורית","הגיוס","הבסיסיים","הרואים","הצטרפה","הנפוץ","דינו","דרמטית","בעוצמה","טנק","רשימות","סיפורו","סדיר","מקומיות","מקורה","מרכיבים","לתנועת","לערער","תפקידם","והפכו","שוטרים","שפורסם","קטעי","פריטים","עיקרי","עותקים","חוליות","כאתר","המתרחש","המולד","המוקדם","המורכב","היוצר","הלה","התמנה","התנהגותו","הפסיד","העשור","ההרס","הסמלים","דהיינו","דגם","בתוואי","בעיירה","בצעירותו","טור","צבעי","נחשף","מבתי","תש","הסניף","ביהודים","מתחם","ייעודו","דרור","באישור","שאול","בחיל","נציג","שירותים","שכונות","מכוניות","האדריכלים","הרמה","ופיתוח","אינתיפאדת","מידת","מופת","מספק","שילב","אגודת","היוצרים","השיא","הפלגה","הבורות","רבת","מובילים","מונע","מצומצם","לחלופין","לאותה","להתפתחות","תופס","ומכאן","אורגניזמים","ארצי","כדוגמה","היחסי","היבטים","הדמיון","בפרויקט","באירועים","הפרויקט","כללים","מתקיימת","מנגנונים","מצטרפים","פעלים","המושגית","הגאונים","צריכת","אנדרטאות","בתרגום","מתחום","קולט","התכונות","הפרעה","הסימנים","אליפות","בחמצן","במעבדה","נשימה","נשאי","לווייתנים","גרורות","נאכלו","מאתו","מכוער","מהוגן","יתכן","יען","ידידי","לפטפט","תואיל","וארגיש","ואנה","שהייתי","שטויות","עפו","זוכר","אהיה","זרחה"]
