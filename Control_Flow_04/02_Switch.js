
// Switch Case .

let MonthNumber = 18;   // Enter Number Between 1 - 12 to know Exact Month .

switch (MonthNumber) {
    case 1:
        console.log("Month Is January");

        break;
    case 2:
        console.log("Month Is February");

        break;
    case 3:
        console.log("Month Is March");

        break;
    case 4:
        console.log("Month Is April");

        break;
    case 5:
        console.log("Month Is May");

        break;
    case 6:
        console.log("Month Is June");

        break;
    case 7:
        console.log("Month Is Julay");

        break;
    case 8:
        console.log("Month Is August");

        break;
    case 9:
        console.log("Month Is September");

        break;

    case 10:
        console.log("Month Is Octomber");

        break;
    case 11:
        console.log("Month Is November");

        break;
    case 12:
        console.log("Month Is December");

        break;


    default:
        console.log("No Moth at This Number");

        break;
}



// Truth E values And False E value .

const UserMAil = "nikhil@gmail.com"; // it successfully run .
// const UserMAil = ""; // But this not run it is Empty .
const MailID = []; // this array also Empty but It Runs . because Truth E values And False E value conatins some rules .

if (UserMAil) {
    console.log("Got A Mail");

} else {
    console.log("Mail Not Found");

}

// Rules of  Truth E values And False E value .

// Falsy Values .

// Falsy Values = False , 0 , -0 , BigInt , 0n , "" , null , undefined , NaN .

// Truthy Values

// Truth Values = "0" , 'False' , " " , [] , {} , function(){} .

// How to check array is empty or not .

const Array = [];

if (Array.length === 0) {
    console.log("Array is Empty");
    
} // this is the way to cheak emty array .

const FirstName = {};

if (Object.keys(FirstName).length === 0) {
    console.log("Object is empty");
    
} // here we used our object method . 1st we use method Object.keys(FirstName) to know keys are present or not in the FirstName object . then and we know it returns empty [] . so now use property called .length to konw value like = [].length . then we compared with 0 . like (Object.keys(FirstName).length === 0) . and it run .


// Understand this to know false comparision .

// false == 0;
// true
// false == "";
// true
// 0 == "";
// true
// 0 == [];
// true        // All this from browsers console .

