// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     } 

//     encyptPassword(){
//         return `${this.password}acbd`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const fang = new User("Swati", "swati@google.com", "2576")
// console.log(fang.encyptPassword());
// console.log(fang.changeUsername()); 


//BEHIND THE SCENES

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encyptPassword = function(){
    return `${this.password}acbd`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea", "tea@google.com", "2576")
console.log(tea.encyptPassword());
console.log(tea.changeUsername()); 