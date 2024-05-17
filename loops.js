//FOR

const multiply =(num) => {
    let newArray =[];
    for (let i=0; i<num.length; i++){
        const multiplyByTwo = num[i] * 2;
        console.log ({i});   //It gives the index
        newArray.push (multiplyByTwo);
    }
    return newArray;

} 
console.log(multiply([2, 3, 4, 5, 6, 7, 8]));


// FOR ... OF

const totalSum = (numbers) =>{
    let sum = 0;
    for (let num of numbers){
        console.log ({num}); 
        sum += num;
        
    }
    return sum;
} 

console.log (totalSum([2, 3, 4, 5, 6, 7]));

// WHILE LOOPS

const students = (studentsNames) => {
    while (studentsNames.length > 2){
        console.log ("Teach Students");
        studentsNames.pop();
        if (studentsNames.length === 2){
            console.log ('You are left with two students.')

        }
    }
};
students(["Emma", "Eve", "Anne", "Judith"])


// DO WHILE

const kickBall = (leg) => {
    do{
        console.log("Kick the ball");
    }
    while (leg)
}
//kickBall(true)  // infinite loop
kickBall(false)


// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function manipulateNumbers(numbers) {
    const firstFourNumbers = numbers.slice(0,4).map(firstNums => firstNums * firstNums);
    console.log(firstFourNumbers)
     const lastTwoNumbers = numbers.slice(-2).map(lastNums=> lastNums+10);
     console.log(lastTwoNumbers)
     const middleNumbers = numbers.slice(4,-2)
     let newArrayOfNumbers = firstFourNumbers.concat(middleNumbers).concat(lastTwoNumbers);
     console.log(newArrayOfNumbers)

}
manipulateNumbers([1,11,21,31,41,51,61,71,81,91,101])


