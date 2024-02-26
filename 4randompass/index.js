//RANDOM PASSWORD GENERATOR
const passwordBox = document.getElementById("randomPass");

function generatePassword(){
    const length = 8;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const lowerCaseChars = "abcdefghijklmnñopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numbChars = "0123456789";
    const symbolChars = "!#$%&/()*:_-+=";
    
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    //console.log(allowedChars);

    if(length<=7){
        return "(error, must be at least 8 characters)";
    }
    if (allowedChars.length===0 ){
        return "at least 1 set of chars need to be selected"
    }

    for(let i = 0; i<length; i++){
        const randomIndex = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomIndex];
    }

    passwordBox.value = password
    //document.getElementById("randomPass").value = password;

}



function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    window.alert('Your password has been copied succesfuly');
}