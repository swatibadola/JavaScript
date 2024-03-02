//Generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeColorBg, 1000);
    }
    
    function changeColorBg(){
        document.body.style.background = randomColor();
        // console.log("STARTED")
        
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
    // console.log("STOPPED")
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

