let alphabet= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let character= "!@#$%^&*_=+:<>?|";

let possibleChar = alphabet + number + character;

let array = possibleChar.split('');
const password1 = document.getElementById('slot-1');
const password2 = document.getElementById('slot-2');
const password3 = document.getElementById('slot-3');
const password4 = document.getElementById('slot-4');

const passwordElArray =[];
passwordElArray.push(password1)
passwordElArray.push(password2)
passwordElArray.push(password3)
passwordElArray.push(password4)

function passwordGenerator() {
  passwordElArray.forEach((password) => {
    let newPassword = generatePassword();
    password.innerText = newPassword;
  })
}

function randomChar() {
  let randomNum = Math.floor(Math.random() * array.length);
   return array[randomNum];
}

function generatePassword() {
  let password = '';
  for (i = 0; i < 10; i++) {
    password += randomChar();
  }
  console.log(password);
  return password;
}


generatePassword();