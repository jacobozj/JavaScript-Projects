//NUMBER GUESSING GAME

const minNum= 1;
const maxNum = 100;

const answer = Math.floor(Math.random()*(maxNum-minNum+1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while(running){
    
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    console.log(typeof guess, guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please ener a valid number");
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert("Number too low");
        }
        else if(guess > answer){
            window.alert("Number too high");
        }
        else{
            window.alert(`You win, the answer was: ${answer} and took you ${attemps} attemps`);
            running = false;
        }   
    }
}
