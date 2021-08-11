// Set variables
var textEntry = document.querySelector("#textEntry");
var countVowelsBtn = document.querySelector("#countVowelsBtn");
var resultDisplay = document.querySelector("#resultDisplay");
var clearTxtBtn = document.querySelector("#clearTxtBtn");

// focus in textarea
textEntry.focus();

function countVowels() {
    // read txt, turn into array
    var txtToCount = textEntry.value;
    var txtArray = Array.from(txtToCount);

    // count vowels across array
    let vowelCount = 0;
    var allVowels = txtArray.filter(
        (letter) =>
        letter == "a" ||
        letter == "A" ||
        letter == "e" ||
        letter == "E" ||
        letter == "i" ||
        letter == "I" ||
        letter == "o" ||
        letter == "O" ||
        letter == "u" ||
        letter == "U" ||
        letter == "y" ||
        letter == "Y"
    );
    var result = allVowels.length;
    console.log(result);
}

function displayVowels() {
    // to be filled in...
}

function clearText() {
    textEntry.value = "";
    textEntry.focus();
}

// event listener on Count the Vowels! button:
countVowelsBtn.addEventListener("click", function() {
    countVowels();
    displayVowels();
});

// event listener on clear txt button:
clearTxtBtn.addEventListener("click", function() {
    clearText();
});