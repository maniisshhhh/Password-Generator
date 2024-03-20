const passwordBox = document.getElementById("box");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symbol = "!@#$%^&*";

const allChars = upperCase + lowerCase + symbol;

function createPass(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += num[Math.floor(Math.random() * num.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(length > password.length){
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value= password;
}