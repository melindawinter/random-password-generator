// Assign global variables
var generateBtn = document.querySelector("#generate");
// Special characters
var specialChar = ["@", "#", "$", "%", "^", "&", "*"];
// Lower case letters
var lowerCase = [
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
// Upper case letters
var upperCase = [
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
//Numbers
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//End global variables

// Start functions here

//This function collects the data the user puts in through a prompt and confirms
function getOptions() {
  var passwordLengthChoice = parseInt(
    prompt(
      "How long would you like your password to be? Choose between 8 and 128 characters."
    )
  );
  if (passwordLengthChoice < 8) {
    alert("Please pick a longer password. Click the button again.");
    return;
  }
  if (passwordLengthChoice > 128) {
    alert("Please pick a shorter password. Click the button again");
    return;
  }

  var specialCharChoice = confirm("Would you like to use special characters?");
  var lowerCaseChoice = confirm("Would you like to use lower case letters?");
  var upperCaseChoice = confirm("Would you like to use upper case letters?");
  var numArrayChoice = confirm("Would you like to use numbers?");

  if (
    specialCharChoice === false &&
    lowerCaseChoice === false &&
    upperCaseChoice === false &&
    numArrayChoice === false
  ) {
    alert("You must pick at least one option. Click the button again.");
    return;
  }

  var userChoices = {
    specialCharChoice: specialCharChoice,
    lowerCaseChoice: lowerCaseChoice,
    upperCaseChoice: upperCaseChoice,
    numArrayChoice: numArrayChoice,
  };
  console.log(userChoices);
  return userChoices;
}

// This function chooses items from the user input arrays
function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomSelection = arr[randomIndex];
  return randomSelection;
}

// This function takes the information given by the user and generates the password
function generatePassword() {
  var passwordOptions = getOptions();
  var finalPassword = [];
  var chosenArrays = [];
  var chosenCharOptions = [];

  if (passwordOptions.specialCharChoice) {
    chosenArrays = chosenArrays.concat(specialChar);
    chosenCharOptions.push(getRandomItem(specialChar));
  }
  if (passwordOptions.lowerCaseChoice) {
    chosenArrays = chosenArrays.concat(lowerCase);
    chosenCharOptions.push(getRandomItem(lowerCase));
  }
  if (passwordOptions.upperCaseChoice) {
    chosenArrays = chosenArrays.concat();
    chosenCharOptions.push(getRandomItem(upperCase));
  }
  if (passwordOptions.numArrayChoice) {
    chosenArrays = chosenArrays.concat(numArray);
    chosenCharOptions.push(getRandomItem(numArray));
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var finalPasswordItem = getRandomItem(chosenArrays);
    finalPassword.push(finalPasswordItem);
  }
  for (var i = 0; i < chosenCharOptions.length; i++) {
    finalPassword[i] = chosenCharOptions[i];
  }
  console.log(finalPassword);
  return finalPassword.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

writePassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
