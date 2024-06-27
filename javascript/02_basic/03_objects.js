// singleton

// object literals
// Object.create

// const mysym = Symbol("prasanna")

// const JsUser = {
//     name : "prasanna",
//     "full name" : "Prasanna Hadke",
//     [mysym] : "mykey1",
//     age : 18,
//     location : "Nagpur",
//     email : "prasanna.hadke@gmail.com",
//     isLoggedIn : false,
//     lastloggendIn : ["Monday", "Friday"]
// }

// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mysym])

// JsUser.email ="hitesh.@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser);
// JsUser.email ="hitesh.123@gmail.com"

// JsUser.greeting = function(){
//     console.log("hello jsUser");
// }
// JsUser.greetingtwo = function(){
//     console.log(`hello jsUser , ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());

// const mycollegesym = Symbol("BR. Ambedkar")

// const studnetId ={
//     enrollmentNo : 987654321,
//     [mycollegesym] : "Ambedkar",
//     CollegeID : "1234@1234",
//     StudentName : "Prasanna Hadke",
//     City : "Kamptee",
//     enrolledSem : "3rd sem",
//     "StudentType" : "Regular"
// }
// console.log(studnetId);
// console.log(studnetId.enrolledSem);
// console.log(studnetId["StudentType"]);

// singleton

const sym1 = Symbol("key1")
// object literals
const jsUser ={
    name : "hitesh",
    "full name" : "Hitesh Choudhary",
    age : 19,
    location : "jaipur",
    email : "hitesh.google.com",
    isLoogedIn : false,
    [sym1] : "Prasanna Hadke"
}

// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[sym1]);

jsUser.email="prasanna.hadke05@gmail.com"

// Object.freeze(jsUser)

jsUser.location = "Nagpur"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello js user");
}
jsUser.greetingstwo = function(){
    console.log(`hello js user my name is ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingstwo());

