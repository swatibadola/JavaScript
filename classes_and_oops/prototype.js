// let myName = "Swati    "

// console.log(myName.length);
// console.log(myName.trim().length);
// console.log(myName.trueLength);


const newBox = ["Orange", "Apple", "Pancake"]

let boxPower = {
    orange: "fruit",
    pancake: "cake",

    getBoxPower: function(){
        console.log(`Pancake power is ${this.pancake}`);
    }
}

Object.prototype.swati = function(){
    console.log(`swati is present in all objects`);
}

// boxPower.swati()

// Adding prototype in array
Array.prototype.heySwati = function(){
    console.log(`swati is present in all array`);
}
// newBox.swati()
// newBox.heySwati()
// boxPower.heySwati()



//--------------------------------------------


//INHERITANCE

const User = {
    name: "chai",
    email: "chai@microsoft.com"
}

const Teacher = {
    makevid: true
}

const teachingSupport = {
    isAvail: false
}

const TASupport = {
    makeAssignment: 'Web dev assignment',
    fullTime: false,
    __proto__: teachingSupport
}

Teacher.__proto__ = User //This is PROTOTYPAL INHERITANCE - that you can access properties of other object

//modern syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let myusername = "Swati      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

myusername.trueLength()
"swati".trueLength()
"iceTea".trueLength()