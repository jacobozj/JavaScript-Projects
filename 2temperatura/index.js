// Temperature conversion

const textBox = document.getElementById("textBox");
const toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const result = document.getElementById("result")
let temp;


function convert(){
    if(toFah.checked){
        temp = (Number(textBox.value) * 9/5) + 32;
        result.textContent = temp.toFixed(2) + " °F";
    }
    else if (toCel.checked){
        temp = (Number(textBox.value) - 32) * 5/9;
        result.textContent = temp.toFixed(2) + " °C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
