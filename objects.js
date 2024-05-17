const cup={
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'Tea',
        temperature:'hot'
    },

drink: function(){
        console.log('Used to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);

    }
};

console.log({color: cup.color});
console.log ('size', cup.color)
console.log('temperature', cup.functionality.temperature);
console.log('texture',cup['texture']);

///to add an item
cup.model='glass';
console.log({cup});

// To delete an it
delete cup.model
console.log({cup});

cup.color= 'green';
console.log({cup});

cup.drink();


//To get all objects, An arrays ifbhects
const keys= Object.keys(cup)
console.log({keys});

const values= Object.values(cup)
console.log({values});

const loop = Object.keys(cup).map(item =>{
    return ({key:item, value:cup[item]});
})

console.log({loop});


Object.keys(cup).forEach(item =>{
    console.log ({key:item, value:cup[item]});
})
