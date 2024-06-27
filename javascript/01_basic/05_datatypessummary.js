// primitive datatypes
// 7 categories

//Primitive Type
// 7 types : string,number,bigInt,boolean,null,undefined,symbol

const score = 100;
const scoreValue =100.3

const isLoogedIn = false;
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);
const bigNumber = 1238509283497245n
// Non Primitive or Reference Types

// Arrays, Objects and Funtions

const heroes =["Batman","Superman","Wonderwoman","Cyborg","The Flash","Aquaman"]

let obj ={
    name: "prasanna",
    class: "MCCM-I"
}

// let myFunction =function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof heroes);
// console.log(typeof myFunction);
// console.log(typeof obj);
// console.log(typeof id);
// console.log(typeof anotherId);
// heroes.push("prasanna");
// heroes.pop()
// console.log(heroes);




// **********************Memory*******************

// two types of memory stack(primitive) and heap(Non-primitive type)

// let myyoutubeName ="Prasanna Hadke"

// let anothername=myyoutubeName

// anothername="pratiksha hadke"

// console.log(myyoutubeName);
// console.log(anothername);



// function multiply(a,b) {
//     console.log(a*b);
// }

// multiply(5,6)
// multiply(15,6)
// multiply(5,16)
// multiply(5,7)


let game = "Counter Strike"

console.log(typeof game);
let anothergame = Number(game)

console.log(typeof anothergame);