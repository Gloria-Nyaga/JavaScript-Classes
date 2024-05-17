const personAge = (age) => {
    if (age >= 18){
        return "You are a adult"
    }

        else if (age >= 13 && age < 10){
        return "You are a teenager"
        }

        else {
            "You are a child"
        }
    
}

const checkNumbers=(num) => {
    for (let num =30;num<=100; num++){
        if(num%3==0 && num%5==0){
            console.log('fizz buzz')
        }

        else if(num%3==0){
            console.log('fizz')
        }

        else if (num%5==0){
            console.log('buzz')
        }

        else{
            console.log(num)
        }
    }
};
checkNumbers();

//SWITCH STATEMENT   USED IN DECISION MAKING.

const greeting = (daysOfTheWeek)  => {
    switch(daysOfTheWeek){
        case "Monday":
        console.log ("Hello Monday!");
        break;

        case "Tuesday":
            console.log ("Hello Tuesday!");
            break;

        case "Wednesday":
        console.log ("Hello Wednesday!");
        break;

        case "Thursday":
            console.log ("Hello Thursday!");
            break;

        case "Friday":
        console.log ("Hello Friday!");
        break;

        case "Saturday":
            console.log ("Hello Saturday!");
            break;

        case "Sunday":
        console.log ("Hello Sunday!");
        break;

        default:
            console.log( "Not the days of the week")     
    }
};

greeting("Tuesday");
greeting("When")