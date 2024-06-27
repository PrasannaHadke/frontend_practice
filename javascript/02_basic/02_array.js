const marvelheroes = ["Spiderman","IronMan","Thor","Wonda","Black Panther","HawkEye","Ms Marvel"]

const dcheroes = ["Superman","Aquaman","Batman","WonderWoman","Cyborg"]

// marvelheroes.push(dcheroes);

// console.log(marvelheroes);
// console.log(marvelheroes[7][1]);

// const allheroes = marvelheroes.concat(dcheroes);
// console.log(allheroes);

const allheroes = [...marvelheroes,...dcheroes]

// console.log(allheroes);

const another_array =[1,2,3,4,[5,6,7],8,[6,7,[4,7]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));  // interesting

a = 100
b = 200
c = 300

console.log(Array.of(a,b,c))