// //CREATING a promise
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         //To create a connection between resolve and promise
//         resolve()
//     }, 1000)
// })

// //CONSUMING a promise
// //.then has a direct connection with resolve
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Swati", email: "mydeardump@gmail.com"})
//     }, 2000)
// })
// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Chinky", password: "246"})
//         }
//         else{
//             reject("ERROR : Something went wrong")
//         }
//     }, 2000)
// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("The promise is either resolved or rejected");
// })




// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Chinky", password: "246"})
//         }
//         else{
//             reject("ERROR : Something went wrong")
//         }
//     }, 2000)
// })

// //Consuming the promise using NEW APPROACH - ASYNC AWAIT - try catch method
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/swatibadola')
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }
// getAllUsers() 



fetch('https://api.github.com/users/swatibadola')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(){
    console.log("Error Found")
})