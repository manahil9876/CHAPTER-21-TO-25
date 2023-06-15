
var firstName = prompt("Enter your first Name:");
var lastName = prompt("Enter your last Name:");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

var favoriteMobileModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoriteMobileModel.length;
document.write("The length of your input is: " + inputLength);



var word = "Pakistani";
var index = word.indexOf("n");
document.write("The index of 'n' in the word 'Pakistani' is: " + index);



var word = "Hello World";


var lastIndex = word.lastIndexOf("l");
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex + "<br>");

var word = "Pakistani";


var character = word.charAt(3);

document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);


var firstName = prompt("Enter your first name:");

var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome.");

var word = "Hyderabad";

var replacedWord = word.replace("Hyder", "Faisal");
document.write("The modified word is: " + replacedWord);


var message = "Manahil and Fabeha are best friends. They play cricket and football together.";

var replacedMessage = message.replace(/and/g, "&");

document.write("Modified message: " + replacedMessage);

var str = "490";
var num = Number(str);

document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num)

var userInput = prompt("Enter your input:");
var uppercaseInput = userInput.toUpperCase();
document.write("Input in uppercase: " + uppercaseInput);


var userInput = prompt("Enter your input:");
var titleCaseInput = toTitleCase(userInput);

document.write("Input in title case: " + titleCaseInput);

function toTitleCase(str) {

  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var titleCaseStr = words.join(" ")

  return titleCaseStr;
}

var num = 35.56;
var strNum = num.toString();
var removedDot = strNum.replace(".", "");
document.write("Modified string: " + removedDot);


var username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  
  username = prompt("Invalid username! Please enter a valid username without special symbols [@ . , !]:");
}
document.write("Username: " + username);

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:");

var lowercaseInput = userInput.toLowerCase();

var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === lowercaseInput) {
    found = true;
    break;
  }
}

if (found) {
  alert("Yes, the item is found in the list.");
} else {
  alert("No, the item is not found in the list.");
}

var password = prompt("Enter a password:");

if (
  password.length < 6 ||
  /^[0-9]/.test(password) ||
  !/[a-zA-Z]/.test(password) ||
  !/[0-9]/.test(password)
) {
  password = prompt("Invalid password! Please enter a valid password that contains alphabets and numbers, is at least 6 characters long, and does not start with a number:");
}

document.write("Password: " + password);


var university = "University of Karachi"
var array = university.split(" ");

document.write("Array elements: " + array.join(", "));

var userInput = prompt("Enter your input:");

var lastCharacter = userInput.charAt(userInput.length - 1);

document.write("Last character: " + lastCharacter);


var sentence = "The quick brown fox jumps over the lazy dog";


var lowercaseSentence = sentence.toLowerCase();

var word = "the";
var count = 0;

var words = lowercaseSentence.split(" ");
for (var i = 0; i < words.length; i++) {
  if (words[i] === word) {
    count++;
  }
}
document.write("Number of occurrences of the word 'the': " + count);
