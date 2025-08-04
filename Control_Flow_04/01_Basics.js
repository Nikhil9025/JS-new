// // Control Flow Or Logic Flow .

// // comparision operator .
// //  < , > , <= , >= , == , === , != , !== , 



// 1st control flow is ( if ) .  

// // Understand with Example .
// Ex - 1]

let Tempreture = 79;

if (Tempreture <= 50) {

    console.log("Tempreture is under 50");

} else {
    console.log("Tempreture is more than 50");

}

console.log("Executed "); // it will always run because is outside the if scope .

// Ex - 02]

const score = 200;

if (score >= 100) {

    let power = "Fly";
    console.log(`The Powe of a user is = ${power}`);
}

//   console.log(`The Powe of a user is = ${power}`); if we acces this log outside the scope . it will show the error because we know we cant acces the scope value outside the scope .

// Short hand notation.

const balence = 300;

if (balence >= 500) console.log("Account Approved"); // single line short hand property .

if (balence <= 500) console.log("Account Declined"),
    console.log("Minimun 500 Rs Balence Required for Approve"); // multiple line short hand property . please do not use this short hand properteis .

// Nesting or Multiple Condition .

let AccountBalence = 29000;


if (AccountBalence >= 50000) {

    console.log("Congratulations You Got = Platium Membership");

} else if (AccountBalence >= 40000) {
    
    console.log("Congratulations You Got = Golden Membership");
    
} else if (AccountBalence >= 30000) {
    
    console.log("Congratulations You Got = Silver Membership");
    
}else{

    console.log("You Are Not Eligible for Membership");
    
}

// Writing Conditions in if expression using && , || (AND OR) ;

// 1st Example . (&& , AND) .

const UserLoggedIn = true;
const DebitCard = false

if (UserLoggedIn && DebitCard) {
    
    console.log("You Are Allow To Buy Courses");
    
}else{
    console.log("Not Allowed To Buy Courses");
    
}

// 2nd Example . (|| , OR) .


const loggInFromGoogle = false;
const loggInFromGmail = true;


if (loggInFromGoogle || loggInFromGmail) {
    
    console.log("Logged Successfully");
    
}

