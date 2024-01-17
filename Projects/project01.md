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