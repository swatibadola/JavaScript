const clock = document.getElementById('clock')

//1000 = 1ms
setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    
},1000);