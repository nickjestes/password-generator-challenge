// Assignment code here
var charsList = [];
var password=document.getElementById("password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var lowerChoice = prompt("Would you like to include lowercase letters? (y/n)");
  if (lowerChoice === "y") {
    var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    lowercaseChars.push.apply(charsList, lowercaseChars);
  }

  var upperChoice = prompt("Would you like to include uppercase letters? (y/n)");
  upperChoice.toLowerCase();
  if (upperChoice === "y") {
    var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    uppercaseChars.push.apply(charsList, uppercaseChars);
  }

  var numberChoice = prompt("Would you like to include numbers? (y/n)")
  numberChoice.toLowerCase();
  if (numberChoice === "y") {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    numbers.push.apply(charsList, numbers);
  }

  var specialChoice = prompt("Would you like to include special characters? (y/n)");
  specialChoice.toLowerCase();
  if (specialChoice === "y") {
    var specialChars = ["?", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "+", "=", "[", "]", "{", "}", ";", ":", "<", ">"];
    specialChars.push.apply(charsList, specialChars);
  }

  if (charsList < 10) {
    alert("You don't have any characters selected, your password will use lowercase letters. Deal with it.");
    var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    lowercaseChars.push.apply(charsList, lowercaseChars);
  }

  var passwordLength = prompt("How many characters would you like in your password? (default=8)");
  if (passwordLength < 1) {
    passwordLength = 8;
  } else if (passwordLength > 128) {
    passwordLength = 128;
  } else {
    passwordLength = 8;
  }

  for (var i = 0; i <= passwordLength-1; i++) {
    let randomNumber = charsList[Math.floor(Math.random() * charsList.length)];
    password.value = password.value + randomNumber;
  }
  
  password = document.getElementById("password").value;
  console.log(charsList.length);
  console.log(password.length);
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

