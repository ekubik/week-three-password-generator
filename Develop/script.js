//declare variables
var passwordLength;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseAbc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var upperCaseAbc = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChar = ["!", "#", "$", "%", "&", "*", "/", "?", "^", "_"];
var includeNumbers;
var includeLowerCaseAbc;
var includeUpperCaseAbc;
var includeSpecialChar;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt(
    "Please enter desired password length. This should be between 8 and 128 characters"
  );
  if (passwordLength < 7 || passwordLength > 128) {
    alert("Please enter a valid password length");
    prompt("Enter a password length between 8 and 128 characters");
  } else {
    var includeNumbers = confirm(
      "Would you like to include numerical characters?"
    );
    var includeLowerCaseAbc = confirm(
      "Would you like to include lower case letters?"
    );
  }
}
