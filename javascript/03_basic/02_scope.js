

function one(){
    const userName = "Hitesh"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }

    // console.log(website);

    // two()
}

// one()

if(true){
    const userName = "Hitesh"
    if(userName === "Hitesh"){
        const website =" youtube"
       // console.log(userName + website)
    }
    // console.log(website);
}

// console.log(userName);


// ++++++++++++++++++++ interseting ++++++++++++++++++


console.log(addone(5));
function addone(num){
    return num + 1
}


// console.log(addTwo(6))                      // hoisting
const addTwo = function(num){                // also called as expression
    return num + 2
}


// const username = {
//     name : "prasanna"
// }

// username.name = "hadke"
// console.log(username);