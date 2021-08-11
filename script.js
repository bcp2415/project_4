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
    return result;
}

function displayVowels(result) {
    console.log(`displayVowels function called. Value of result is ${result}.`);
    resultDisplay.innerHTML = `The number of vowels in your text is ${result}.`;
}

function clearText() {
    textEntry.value = "";
    textEntry.focus();
}

// event listener on Count the Vowels! button:
countVowelsBtn.addEventListener("click", function() {
    var result = countVowels();
    displayVowels(result);
});

// event listener on clear txt button:
clearTxtBtn.addEventListener("click", function() {
    clearText();
});