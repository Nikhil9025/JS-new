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



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// Memory : Stack , Heap .

// Stack(Primitive) , Heap(Non-primitive)

//Stack (Premitive)

let Email = "nikhil@26gmai.com";
let myEmail = Email ;
myEmail = "nt@gmai.com";     // premitive data type in stack memory . clone/copy .
console.log(Email);
console.log(myEmail);

//Heap (Non-premitive) 

let obj1 ={

    name:"Nikhil",
    Age:25 
                        // Non-premitive data type in Heap Meory . Not copy / Not clone .
};

let  obj2 = obj1 ;
obj2.name="Naresh";
 console.log(obj2);
 console.log(obj1);
 
 


