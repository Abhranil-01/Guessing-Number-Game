let random=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#userInput')
const guesses=document.querySelector('.guesses')
const remaining=document.querySelector('.remaining')
const lowOrhigh=document.querySelector('.lowOrhigh')
const result=document.querySelector('.result')

const btn = document.createElement('button')

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener('click',(event)=>{
        event.preventDefault()
        const guess=parseInt(userInput.value)
        validation(guess)
    })
}

function validation(guess){
//!Validation Checking
    if(isNaN(guess)){
       
        alert('Please Enter A Valid Number')
        userInput.value=" "
        
    }else if(guess<1){
        alert('Please Enter A Number More Than 1')
        userInput.value=" "
    }else if(guess>100){
    alert('Please Enter A Number Less Than 100')
     userInput.value=" "
    }else{
        prevGuess.push(guess)
        console.log(prevGuess);
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`Game Over!  Random Number Was ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
//!check low ,high or equal number 
    if(guess===random){
        displayMessage(`You Guested It Right`)
        endGame()
    }else if(guess<random){
        displayMessage(`Number Is TOOO Low`)
    }else if(guess>random){
        displayMessage(`Number Is TOOO High`)
    }
}

function displayGuess(guess){
//!display the guess it will clear the input box for the next value it will update the reamaing filed and also update the previous guess field
userInput.value = " ";

if (11 - numGuess !== 0) {
    guesses.innerHTML += `${guess}`;
    if (numGuess !== 10) {
        guesses.innerHTML += `, `;
    }
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}else if(numGuess === 10) {
    userInput.setAttribute('disabled','')
}
}

function displayMessage(message){
//!it will show the low or high message
lowOrhigh.innerHTML=`${message}` 

}

function endGame() {
    userInput.value=" "
    userInput.setAttribute('disabled','')
    btn.classList.add('button')
    btn.setAttribute('type','submit')
    btn.innerHTML=`Start New Game`
    result.appendChild(btn)
    playGame=false
    newGame()
} 

function newGame(){
    const button=document.querySelector('.button')
    button.addEventListener('click',(event)=>{
         random=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guesses.innerHTML=" "
        remaining.innerHTML=`${11-numGuess}`   
        userInput.removeAttribute('disabled')
        result.removeChild(btn)  
        playGame=true

    })

}
