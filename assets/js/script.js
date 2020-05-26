// Assign global variables
var generateBtn = document.querySelector("#generate");
// Special characters
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
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

// Add event listener to Generate Password button
generateBtn.addEventListener("click", writePassword);

//This function collects the data the user puts in through a prompt and confirms
function getUserInput() {
  var passwordLengthChoice = parseInt(
    prompt(
      "How long would you like your password to be? Choose between 8 and 128 characters."
    )
  );
  if (passwordLengthChoice < 8) {
    alert(
      "Please pick a longer password. Click the Generate Password button again."
    );
    return;
  }
  if (passwordLengthChoice > 128) {
    alert(
      "Please pick a shorter password. Click the Generate Password button again."
    );
    return;
  }
  if (isNaN(passwordLengthChoice)) {
    alert(
      "Please pick a numerical value between 8 and 128. Click the Generate Password button again."
    );
    return;
  }
  if (passwordLengthChoice > 7 && passwordLengthChoice < 129) {
    alert(
      "Your password will be " + passwordLengthChoice + " characters long."
    );
    console.log(passwordLengthChoice);
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
    alert(
      "You must pick at least one option. Click the Generate Password button again."
    );
    return;
  }

  var userChoices = {
    passwordLengthChoice: passwordLengthChoice,
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
  var passwordComponents = getUserInput();
  var finalPassword = [];
  var chosenArrays = [];
  var chosenCharOptions = [];

  if (passwordComponents.specialCharChoice) {
    chosenArrays = chosenArrays.concat(specialChar);
    chosenCharOptions.push(getRandomItem(specialChar));
  }
  if (passwordComponents.lowerCaseChoice) {
    chosenArrays = chosenArrays.concat(lowerCase);
    chosenCharOptions.push(getRandomItem(lowerCase));
  }
  if (passwordComponents.upperCaseChoice) {
    chosenArrays = chosenArrays.concat();
    chosenCharOptions.push(getRandomItem(upperCase));
  }
  if (passwordComponents.numArrayChoice) {
    chosenArrays = chosenArrays.concat(numArray);
    chosenCharOptions.push(getRandomItem(numArray));
  }

  for (var i = 0; i < passwordComponents.passwordLengthChoice; i++) {
    var finalPasswordItem = getRandomItem(chosenArrays);
    finalPassword.push(finalPasswordItem);
  }

  for (var i = 0; i < chosenCharOptions.length; i++) {
    finalPassword[i] = chosenCharOptions[i];
  }

  return finalPassword.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Copy the text using the Copy Password Button

var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", function () {
  if (writePassword) {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Your password has been copied to your clipboard.");
  }
});
