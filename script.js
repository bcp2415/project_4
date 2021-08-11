// Set variables
var textEntry = document.querySelector("#textEntry");
var countVowelsBtn = document.querySelector("#countVowelsBtn");
var resultDisplay = document.querySelector("#resultDisplay");
var clearTxtBtn = document.querySelector("#clearTxtBtn");

// focus in textarea
textEntry.focus();

function countVowels() {
    // to be filled in
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