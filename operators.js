//ARITHMETIC AND ASSIGNMENT
let a = 20;
let b = 30;

let add = a + b ;
console. log ({add});

let subtraction = a - b ;
console. log ({subtraction});

let division = a / b;
console. log ({division});

let multiplication = a * b;
console. log ({multiplication});
 
//COMPARISON OPERATOR//
let c = "20";
let looselyEqualTo = a == c;
console. log ({looselyEqualTo});
// it only checks the value not the data type

let strictlyEqualTo = a === c;
console. log ({strictlyEqualTo});
// it checks both the data type and the value

let notEqualTo = a != c;
console. log ({notEqualTo});
//this is opposite to loosely equal to

let strictlyNotEqualTo = a !== c;
console. log ({strictlyNotEqualTo});

//INCREMENT OPERATOR//
a++;
console. log ({a});

//DECREMENT OPERATOR//
b--;
console. log ({b});
 
//COMPOUND OPERATOR//
a+=5;
console. log ({a});

//COERCION// This is the automatic conversion of values from one data type to another.

//Implicit Coercion- JavaScript does this behind the scenes, without you explicitly asking for it. 
let d = 1 * c;
console. log ({d});

let e = +c;
console. log ({e});

//Explicit Coercion- nvolves users intentionally converting values
let f = Number(c);
console. log ({f});

let arr = ["boy", "man", "girl","school", "girl", "woman"];
 let beginningWords = [];
 let duplicates = [];
 arr. forEach(word =>{
     if(!beginningWords.includes(word)){
         beginningWords.push(word);
     }
     else(duplicates.push(word));
 })
 console.log({beginningWords});
 console.log({duplicates});




