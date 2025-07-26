// Functions And Parameters .

// syntax of a function . 

function funName() {

    console.log("Hello worrier");
    console.log("Hello worrier");
    console.log("Hello worrier");
    console.log("Hello worrier");
}

// funName  this is the only reference of function . 
// funName() // And this is the execution of a function . or calling a function . 

// Parameters and arguments . 

function addTwoNumbers(A, B) {   // (A , B) is a parameter .

    console.log(A + B);
}

addTwoNumbers(10, 25);  // (10 , 25) is a argument . and also calling the function .

// we will store the call fuction into a new variable . and see what happens . 

let result = addTwoNumbers(10, 25);

console.log("Result value is  = ", result); // it shows undefined .  because we didn't return anything thats why it shows the undifined in console . 


function addTwoNumbers(A, B) {   // (A , B) is a parameter .

    //    let Result = A + B;
    //    return Result; // now code will stope here and not run anything after return . 

    // another way to return is :

    return A + B;

}

const Result = addTwoNumbers(5, 45);
console.log("The Result is = ", Result);

// new function logginUserMessage . 

function logginUserMessage(Username) {

    return `${Username} Just Logged In`

}

const UseName1 = logginUserMessage("Hello Worrier");
console.log(UseName1);

// I---M---P when we return somthing or function return some value  always remember store that value in new variable like this  = let UseName = logginUserMessage("Hello Worrier");console.log(UseName);


function logginUserMessage(Username) {

    if (Username === undefined) {
        console.log("Please Enter The UserName");
        return;
    }

    return `${Username} Just Logged In`

}

let UseName2 = logginUserMessage();
console.log(UseName2);









