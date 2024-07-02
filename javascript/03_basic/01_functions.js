function saymyname() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("N");
  console.log("A");
}

// saymyname();


// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    
//     let result = number1 + number2
//    return result

return number1 + number2
   
}

const result = addTwoNumbers(5,6)

// console.log("Result: ",result);

function logInUserMessage(username = "sam") {
    if(!username){
        // console.log("Plz enter a username");
        return
    }
    return `${username} just logged In`
}

// console.log(logInUserMessage("Prasanna")); 
// console.log(logInUserMessage("prasanna")); 

function calcuateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calcuateCartPrice(200,400,500,2000))

const user = {
    username : "Prasanna", 
    prices : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// (handleObject(user));

handleObject({
    username: "prasanna",
    price : 399 
})

const mynewArray = [200,400,600]

function returnSecondValue(getArray){
    return getArray[1] 
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,400,600,800]));

