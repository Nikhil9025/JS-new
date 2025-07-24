// Object . 

// Object Litrels . 


// also learn symbol .

const mySymbol = Symbol("SYM");

const User = {
    Name: "Nikhil",
    [mySymbol]: "SYM_@",
    Age: 25,
    Email: "nikhilcorp@gmail.com",
    City: "Pune",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
};

console.log(User);
console.log(User[mySymbol]);

console.log(typeof mySymbol); // symbol converstion .


//----------------------------///////////////-----------------------////////////////////////---------------------


// // changing the value inside the object .

User.Email = "nikhil.tisangikar@gmail.com";

console.log(User.Email);  // Email changed .

// Freezing the object .

Object.freeze(User); // This will freeze the object and prevent any changes to it. now we cannot change the properties of the object .



User.greeting = function () {
    console.log("Hello Worrier");
}


console.log(User.greeting()); // it shows undedefined .  // we will learn after some time .
console.log(User.greeting); // This will print the greeting function. if it shows [Function (anonymous)] in O/P it Means function is not executed yet. it just give reference to the function.


// Reference to the function is stored in the object.

User.greetingtwo = function () {
    console.log(`The Name Of A King Is  = ${this.Name} `);
}

console.log(User.greetingtwo()); // This will print the Name of the King. this is used to refer the object itself.






