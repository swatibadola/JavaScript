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