
// // Functions And Parameters .

// // syntax of a function . 

// function funName() {

//     console.log("Hello worrier");
//     console.log("Hello worrier");
//     console.log("Hello worrier");
//     console.log("Hello worrier");
// }

// // funName  this is the only reference of function . 
// // funName() // And this is the execution of a function . or calling a function . 

// // Parameters and arguments . 

// function addTwoNumbers(A, B) {   // (A , B) is a parameter .

//     console.log(A + B);
// }

// addTwoNumbers(10, 25);  // (10 , 25) is a argument . and also calling the function .

// // we will store the call fuction into a new variable . and see what happens . 

// let result = addTwoNumbers(10, 25);

// console.log("Result value is  = ", result); // it shows undefined .  because we didn't return anything thats why it shows the undifined in console . 


// function addTwoNumbers(A, B) {   // (A , B) is a parameter .

//     //    let Result = A + B;
//     //    return Result; // now code will stope here and not run anything after return . 

//     // another way to return is :

//     return A + B;

// }

// const Result = addTwoNumbers(5, 45);
// console.log("The Result is = ", Result);

// // new function logginUserMessage . 

// function logginUserMessage(Username) {

//     return `${Username} Just Logged In`

// }

// const UseName1 = logginUserMessage("Hello Worrier");
// console.log(UseName1);

// // I---M---P when we return somthing or function return some value  always remember store that value in new variable like this  = let UseName = logginUserMessage("Hello Worrier");console.log(UseName);


// function logginUserMessage(Username) {

//     if (Username === undefined) {
//         console.log("Please Enter The UserName");
//         return;
//     }

//     return `${Username} Just Logged In`

// }

// let UseName2 = logginUserMessage();
// console.log(UseName2);



// Fuction part = 02 .

function calculateCartPrice(...num1) {

    return num1;

}
console.log(calculateCartPrice(2, 500, 1200, 58, 86)); // suppose in a e-cart site where a customer wants to buy somthing . but in this case we don't how much product customer wants . customer will add products in cart 1,2,3 or 5 we dont know in this case we use [ rest operstor ] . rest operator and spread operator both syntax are same ( ...num1 ) .

// Passing Object And Array into The Function .  

const User = {

    name: "Nikhil",
    price: 199,
}

function handleObject(anyObject) {

    console.log(`Tha Name Of the user is ${anyObject.name} And The Price is ${anyObject.price}`);

}

handleObject(User);

// handleObject({
//     User: "RaajKumaar", // Another Way to Pass Object in function .
//     Price:399
//     })


// now passing Array .

const myArray = [10, 40, 50, 70];

function passArray(paraArray) {

    console.log(` The My Array Is = ${paraArray[3]}`);

}

passArray(myArray);

// passing array of object in function . 

const objArray = [
    {
        Product: "Shampoo",
        price: 10,
    },
    {
        Product: "Citnthol Soap",
        price: 40,
    },
    {
        Product: "Face Wash",
        price: 50,
    }
]

function ArrayOfObject(FetchObjArray) {

    console.log(`The Product Is ${FetchObjArray[0].Product} And The Price Is ${FetchObjArray[0].price}`);
    
}

ArrayOfObject(objArray); // succesfull passed the array of object in the funtion .

// now understand what is scope .






