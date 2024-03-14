// USE OF .call FUNCTION WITH EXAMPLE


function setUserName(username){
    // complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    // .call -> used to hold the reference of the execution context
    setUserName.call(this, username)
    // using (this, username) indicates that the function setUserName will not use its own this.username instead it will use 'this' of createUser.

    this.email = email
    this.password = password
}

const fang = new createUser("fang", "fang@google.com", "huGRjfi")
console.log(fang);
// console.log(createUser);