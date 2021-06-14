// Assignment code here

//Declaration of Variables
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ualpha = ["A","B","C","D","E","F","G","H","I","J","K","L","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["0","1","2","3","4","5","6","7","8","9"];
var spec = ["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]","?",".",",","<",">",";",":"];

let pool = [];


//Choose character type to include in password
function Falpha() {
const Qalpha = confirm("Did you want to include lower case letters?");
if (Qalpha == true) {
  alert("Your password will contain lower case letter/s.");
  pool.push.apply(pool, alpha);
} else {
  alert("Your password will NOT contain lower case letter/s.");
}
}

function Fualpha() {
const Qualpha = confirm("Did you want to include upper case letters?");
if (Qualpha == true) {
  alert("Your password will contain lower case letter/s.");
  pool.push.apply(pool, ualpha);
} else {
  alert("Your password will NOT contain lower case letter/s.");
}
}

function Fnum() {
const Qnum = confirm("Did you want to include numbers?");
if (Qnum == true) {
  alert("Your password will contain lower case letter/s.");
  pool.push.apply(pool, num);
} else {
  alert("Your password will NOT contain lower case letter/s.");
}
}

function Fspec() {
const Qspec = confirm("Did you want to include special characters?");
if (Qspec == true) {
  alert("Your password will contain lower case letter/s.");
  pool.push.apply(pool, spec);
} else {
  alert("Your password will NOT contain lower case letter/s.");
}
}


//Random selection of one character in array
function getRandomChar() {
  
  return pool[Math.floor(Math.random() * Object.keys(pool).length)] 
  
}

//Generate random password function
function generatePassword() {
  let genpass = "";
  const passLength = Math.floor(Math.random() * ((32-8)+1) + 8);
  
  for(let i = 1; i <= passLength; i++) {
    
    genpass += getRandomChar();
  } 
   
}

//console.log(genpass);
//if (Qspec == false && Qnum == false && Qualpha == false && Qalpha == false){
  //alert("You must allow at least one type of character to generate a password./n Try again.");
  //generatePassword();
//} 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#ipassword");
  passwordText.textContent = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword() );

Falpha(); Fualpha(); Fnum(); Fspec();

