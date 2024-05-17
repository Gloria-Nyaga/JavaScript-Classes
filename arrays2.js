let fruits = ["Mango", "Banana", "Orange", "Kiwi", "Pawpaw"];
//let arr = new Array(20,30);
console.log({fruits});
console.log({arr});

fruits[1] = 2;
console.log({fruits});
console.log('last item', fruits.slice(-1));
console.log('several items',fruits.slice(0,4));

let addLast = fruits.push('Apple');
console.log({fruits});

let addStart = fruits.unshift('Pineapple');
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});

let newFruits = fruits.push(["Tomato", "Pear"]);
console.log({fruits});

let items = [20, 30, 40, 50, 60];
let add = items.reduce((acc, cur)=>acc + cur);
console.log({add});

let multiply = items.map(item=> item * 2);
console.log({multiply});

let square = [];
items.forEach(item => {
    const multiple = item * item;
    console.log(multiple);
    square.push(multiple);
})
console.log({square});

         //DESTRUCTURING an Array

//  let [num1, num2, num3, ...rest] = items;
//  console.log ({num1});
//  console.log ({num2});   
//  console.log ({num3});                                     // ...rest to a stop everything will be inside rest.
//  console.log ({rest});


 








