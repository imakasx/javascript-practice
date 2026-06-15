const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const numberOfguess = document.querySelector('.guess');
const remaining = document.querySelector('.lastresult');
const lowOrHi = document.querySelector('.lowOrHi');
const result = document.querySelector('.result');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validGuess(guess);
    })
}

function validGuess (guess){
    if(isNaN(guess)){
        alert('please enter valid  number')
    }else if(guess < 1){
        alert('please enter a number more than 1')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else {
        prevGuess.push(guess);
        if(numberOfguess === 11){
            displayGuess(guess)
            displayMessageGuess(`Game Over! Exact no. ${randomNumber} `);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess (guess){
    if(guess === randomNumber){
        displayMessageGuess(`Win keep it up `)
        endGame();
    }else if (guess < randomNumber){
        displayMessageGuess(`This number tooo small`)
    }else if (guess > randomNumber){
        displayMessageGuess(`This number tooo high`)
    }
}
function displayGuess (guess){
    userInput.value = ''
    numberOfguess.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}
function displayMessageGuess (message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function endGame (){
    userInput.value = '';
    userInput.setAttribute('disabled', '' );
    p.classList.add('button');
    p.innerHTML = `<h3 id= "newGame">Start new Game !!</h3>`
    result.appendChild(p);
    playGame = false;   
    newGame();
}
function newGame (){
    const newgamebutton = document.querySelector('#newGame')
    newgamebutton.addEventListener('click' , function(e){
        randomNummber = parseInt(Math.random() * 100 + 1);
        prevGuess = []; 
        numGuess = 1;   
        numberOfguess.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;
    })
}

