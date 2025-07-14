// Premitive

//  7 types : string , number ,  Boolean , null , undefined , symbal , bigInt

const score = 100;
const scoreValue = 100.20;

const isLoggedIn = false;
const outsideTemp =  null;
let userMail;
let bigNumber = 1212121221221212121n;
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);



// Reference type (non-premitive) : Arrays , object , function .

const Hero = ["Shaktiman" , "Krish" , "Naagraj" , "Doga"];
console.table(Hero);


let Myobj = {
    name:"nikhil" , 
    age: 25 , 
    phNumber: 8624079025
};

console.table(Myobj);
