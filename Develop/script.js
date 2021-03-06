//declare variables
var passwordLength;
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCaseAbc = [
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
var lowerCaseAbc = [
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
var options = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength;

function generatePassword() {
  //user inputs password length
  var passwordLength = prompt(
    "Please enter desired password length. This should be between 8 and 128 characters"
  );
  //if password length not between 8 and 128 characters, user directed to try again. if cancel (try Again === false), alert closed
  if (passwordLength < 8 || passwordLength > 128) {
    var tryAgain = confirm("Please enter a valid password length");
    if (tryAgain) {
      generatePassword();
    }
    //user selects types of characters that password should include
  } else {
    var includeNumbers = confirm(
      "Would you like to include numerical characters? (click OK for yes, CANCEL for no)"
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
    var options = [];
    //if no options selected
    if (
      !includeNumbers &&
      !includeLowerCaseAbc &&
      !includeUpperCaseAbc &&
      !includeSpecialChar
    ) {
      var selectCharacterType = confirm("You must select at least one option");
      if (selectCharacterType) {
        generatePassword();
      }
      //different options that can be selected by user. options variable made up of relevant combination of arrays
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
      includeLowerCaseAbc &&
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
      includeUpperCaseAbc
    ) {
      options = numbers.concat(upperCaseAbc);
    } else if (
      !includeNumbers &&
      includeSpecialChar &&
      includeLowerCaseAbc &&
      !includeUpperCaseAbc
    ) {
      options = specialChar.concat(lowerCaseAbc);
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
      options = numbers.concat(lowerCaseAbc);
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

  var password = [];
  // possible characters printed to console
  console.log(options);

  //generate random characters depending on user choice. loop code and push new character into array depending on selected password length
  for (var i = 0; i < passwordLength; i++) {
    var newPassword = options[Math.floor(Math.random() * options.length)];
    password.push(newPassword);
  }
  //join array items into string
  return password.join("");
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
