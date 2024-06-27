
// const tinderUser = new Object()  // Singelton Object

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Prasanna"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email : "sum@gmail.com",
//     fullname : {
//         userfullname :{
//             firstname : "hitesh",
//             lastname : "choudhary"
//         }
//     }
// }

// // console.log(regularUser.fullname);

// const obj1 = {
//     1 : "a" , 2 : "b"
// }

// const obj2 = {
//     3 : "c" , 4 : "d"
// }
// const obj3 = {
//     5 : "e" , 6 : "f"
// }

// // const obj3 = {obj1, obj2}

// // const obj4 = Object.assign({},obj1,obj2,obj3)

// const obj4 ={
//     ...obj1,...obj2,...obj3
// }
// console.log(obj4);

// const users = [
//     {
//     id:1,
//     email: "h@gmail.com"
//     },
//     {
//     id:2,
//     email: "p@gmail.com"
//     },
//     {
//     id:1,
//     email: "h@gmail.com"
//     }
// ]

// // console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name1'));


// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "id3"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "sum@gmail.com",
    fullname : {
        userfullname :{
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj4 = {
    5 : "e",
    6 : "f"
}

// const obj3 ={obj1,obj2 }

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2,...obj4}

// console.log(obj3);

const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(user[1].email); 

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // imp
console.log(Object.values(tinderUser));  // imp
console.log(Object.entries(tinderUser));  // imp

console.log(tinderUser.hasOwnProperty('isloggedIna'));


