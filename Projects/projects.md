#Projects related to DOM

##Project link
[Click here](https://github.com/swatibadola/JavaScript/blob/main/Projects/index.html)

#Solution Code
#Project 1


```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
    })
});
```  

#Solution Code
#Project 2

```javascript

const form = document.querySelector('form')
//this usecase will give empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')


    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height';
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight';
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //To show results
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.6){
            result.innerHTML = `${bmi} = Under weight`;
        }else if(bmi === 18.6 && bmi === 24.9){
            result.innerHTML = `${bmi} = Normal range`;
        }else{
            result.innerHTML = `${bmi} = Overweight`;
        }
    }
}) ;
```



#Solution Code                                  
#Project 3

```javascript
const clock = document.getElementById('clock')

//1000 = 1ms
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);

```


#Solution Code                                  
#Project 3

```javascript
const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}


function validateGuess(guess){
    //Will give validation
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            cleanUpGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            cleanUpGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    //Will check the validation 
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is tooo LOW')
    }
    else if(guess > randomNumber){
        displayMessage('Number is tooo HIGH')
    }
}
function cleanUpGuess(guess){
    //will clean the values so that next value can be input, will update previous and remaining guesses
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    //
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

```