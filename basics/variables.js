const accountId = 159357
let accountEmail = "swati123@gmail.com"
var accountPassword = "456321"
accountCity = "Punjab"
let accountState

// accountId = 2   //not allowed

accountEmail = "sefgh23@gmail.com"
accountPassword = "354625"
accountCity = "Gujarat"

// Prefer not to use var because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])