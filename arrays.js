let fruits=("Mangos", "Bananas","Oranges");
let arr= new Array(20,30);

console.log({fruits});
console.log({arr});

fruits[1]= 2
console.log({fruits});
//replaced banana with oranges.9
//arrays are mutable.

//To access the last item in an array.

console.log('last item',fruits.slice(-1));


console.log('several item',fruits.slice(-1,4));

 //let addLast = fruits.push('Apple');
 //console.log({fruits});

 let addStart = fruits.unshift('Pineapple');
 console.log({fruits});



let removeFirst = fruits.shift();
console.log ({fruits});


let items =[20,30,40,50,60]
//when asked to add use the reduce method
let add = items.reduce((acc, cur) => acc + cur);
console.log({add});




//Question
let newFruits = fruits.push(['Tomato','Pear']);
console.log({fruits});



