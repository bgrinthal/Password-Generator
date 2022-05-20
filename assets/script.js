//  Global variables
var generateBtn = document.querySelector('#generate');

var specChar = '!#$%&()*+,-./:;<=>?@[]^_{|}~'.split('');
var numChar = '0123456789'.split('');
var upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowChar = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Finds randome characteres from each array
function randSpec() {
  return specChar[Math.floor(Math.random() * specChar.length)];
}
function randNum() {
  return numChar[Math.floor(Math.random() * numChar.length)];
}
function randUp() {
  return upChar[Math.floor(Math.random() * upChar.length)];
}
function randLow() {
  return lowChar[Math.floor(Math.random() * lowChar.length)];
}

console.log(randSpec());
console.log(randNum());
console.log(randUp());
console.log(randLow());



function generatePassword() {
    var generatedPassword = '';
    var passChar = ''; //Maybe []?
    // Prompt to choose password length
    var passLength = Math.round(
        prompt("Choose a password length between 8 and 128 characters.")
    )
    // enforce boundary criteria
    if ((passLength < 8)||(passLength > 128)||(!passLength)) {
        alert("Must choose a length between 8 and 128 characters!");
        return null;
    }
    // character prompts
    else {
      var userSpec = confirm("Include special characters?");
      var userNum = confirm("Include numbers?");
      var userLow = confirm("Include lower case letters?");
      var userUp = confirm("Include uppercase letters?")
    };

    // enfore boundy, chose nothing
    if (!userSpec && !userNum && !userLow && !userUp) {
      alert("You must choose at least 1 criteria!");
      return null;
    }
    console.log(userSpec, userNum, userLow, userUp)


    // displayes user choiced
    window.alert("Password length: " + passLength + 
    ".  \nInclude special characters?: " + userSpec + 
    ".  \nInclude numbers?: " + userNum + 
    ".  \nInclude uppercase characters?: " + userLow + 
    ".  \nInclude lowercase characters?: " + userUp + ".");

    // iteration of user choices
    for (i = 0; i < passLength; i++) {
    if (userSpec) {
      passChar = passChar.concat(randSpec());
    } if (userNum) {
      passChar = passChar.concat(randNum());
    } if (userLow) {
      passChar = passChar.concat(randLow());
    } if (userUp) {
      passChar = passChar.concat(randUp());
    }}
    console.log(passChar);
    
    // selects propper length for password
    generatedPassword = passChar.slice(0, passLength);
    console.log(generatedPassword);

    return generatedPassword
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
