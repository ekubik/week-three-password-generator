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
var selectCharacterType;
var options;

// Assignment Code
var generateBtn = document.querySelector("#generate");

/*// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt(
    "Please enter desired password length. This should be between 8 and 128 characters"
  );
  if (passwordLength < 7 || passwordLength > 128) {
    var tryAgain = confirm("Please enter a valid password length");
    if (tryAgain === true) {
      generatePassword();
    }
  } else {
    var includeNumbers = confirm(
      "Would you like to include numerical characters?"
    );
    var includeLowerCaseAbc = confirm(
      "Would you like to include lower case letters?"
    );
    var includeUpperCaseAbc = confirm(
      "Would you like to include uppercase letters?"
    );
    var includeSpecialChar = confirm(
      "Would you like to include special characters (such as ! % & etc.) ? "
    );
    // define options variable for each user choice
    {
      if (
        !includeNumbers &&
        !includeLowerCaseAbc &&
        !includeUpperCaseAbc &&
        !includeSpecialChar
      ) {
        var selectCharacterType = confirm(
          "You must select at least one option"
        );
        if (selectCharacterType) {
          generatePassword();
        }
      } else if (
        includeNumbers &&
        includeSpecialChar &&
        includeUpperCaseAbc &&
        includeLowerCaseAbc
      ) {
        options = numbers.concat(lowerCaseAbc, upperCaseAbc, specialChar);
      } else if (
        includeNumbers &&
        includeSpecialChar &&
        includeLowerCaseAbc &&
        !includeUpperCaseAbc
      ) {
        options = numbers.concat(specialChar, lowerCaseAbc);
      } else if (
        includeNumbers &&
        includeSpecialChar &&
        !includeLowerCaseAbc &&
        includeUpperCaseAbc
      ) {
        options = numbers.concat(specialChar, upperCaseAbc);
      } else if (
        includeNumbers &&
        !includeSpecialChar &&
        includeLowerCaseAbc &&
        includeUpperCaseAbc
      ) {
        options = numbers.concate(upperCaseAbc, lowerCaseAbc);
      } else if (
        !includeNumbers &&
        includeSpecialChar &&
        includerLowerCase &&
        includeUpperCaseAbc
      ) {
        options = specialChar.concat(lowerCaseAbc, upperCaseAbc);
      } else if (
        includeNumbers &&
        includeSpecialChar &&
        !includeLowerCaseAbc &&
        !includeUpperCaseAbc
      ) {
        options = numbers.concat(specialChar);
      } else if (
        includeNumbers &&
        !includeSpecialChar &&
        !includeLowerCaseAbc &&
        !includeUpperCaseAbc
      ) {
        options = numbers.concat(upperCaseAbc);
      } else if (
        !includeNumbers &&
        includeSpecialChar &&
        includeLowerCaseAbc &&
        !includeUpperCaseAbc
      ) {
        options = specialChar.concat(upperCaseAbc);
      } else if (
        !includeNumbers &&
        !includeSpecialChar &&
        includeLowerCaseAbc &&
        includeUpperCaseAbc
      ) {
        options = lowerCaseAbc.concat(upperCaseAbc);
      } else if (
        !includeNumbers &&
        includeSpecialChar &&
        !includeLowerCaseAbc &&
        includeUpperCaseAbc
      ) {
        options = specialChar.concat(upperCaseAbc);
      } else if (
        includeNumbers &&
        !includeSpecialChar &&
        includeLowerCaseAbc &&
        !includeUpperCaseAbc
      ) {
        options = number.concat(lowerCaseAbc);
      } else if (includeNumbers) {
        options = numbers;
      } else if (includeSpecialChar) {
        options = specialChar;
      } else if (includeLowerCaseAbc) {
        options = lowerCaseAbc;
      } else if (includeUpperCaseAbc) {
        options = upperCaseAbc;
      }
    }
  }

  var newPassword;

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var password = options[Math.floor(Math.random() * options.length)];
    console.log(password);
    return password;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
