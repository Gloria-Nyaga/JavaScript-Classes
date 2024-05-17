
function add (num1, num2){
    const sum = num1 + num2;
   console.log ({console:sum});
    //return{'sum' : sum};

}
console.log (add(2,3));
add(4,5);


let student = 'Agnes';
let child='girl'

function item(){
    const names = ["Anne", "Eunice"];
    console.log ({names});

    console.log ({inside:student});

    child='boy'

}
item();
console.log ({outside:student});

console.log ({child});

//FUNCTION EXPRESSION

//method one
//function subtract (num1, num2){
   // console.log (num1-num2);

//} 
//subtract(20,10);


const subtract= function(num1, num2){
    console.log (num1-num2);
}
subtract(20,10);

//ARROW FUNCTIONS
const multiply =(num1,num2) => console.log (num1 * num2);
multiply(6,9);

//IIFEs
(function(){
    console.log('Hello there');
})();

//HOISTING--one calss it before declaring it.
console.log({person});
var person = 'human'; // ===== will bring undefined untle the value is declared.
console.log('person 2....', person );

             //Output 
             //Hello there
             //{ person: undefined }
             //person 2.... human

 function greet(){
    console.log('Hi person');

 }  
 hello();
 const hello =() => console.log('This is a greeting')        

