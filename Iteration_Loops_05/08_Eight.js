
// Reduce .


// why we use reduce = In JavaScript, .reduce() is used to accumulate or reduce all the values in an array into a single value (such as a sum, product, object, or even another array).


const myNums = [1, 2, 3];

let myTotal = myNums.reduce(function (accumulator, currentValue) {

     console.log(`Accumulator value is = ${accumulator} and Current Value is = ${currentValue} `);

    return accumulator + currentValue

}, 0) // this value is a starting accumulator value .

 console.log(myTotal);


// Now Reduce method using arrow funtion .

const book = [2, 12, 15, 45];

let All_Bookbook_Price = book.reduce((acc, currvalue) => acc + currvalue, 0);

console.log(All_Bookbook_Price);

// Example .


const shoppingCart = [
    {
        itemName: "Java Course",
        Price: 1200
    },
    {
        itemName: "Python Course",
        Price: 2000
    },
    {
        itemName: "AI Course",
        Price: 5000
    },
    {
        itemName: "ML Course",
        Price: 10000
    }

]

let TotalAmmount = shoppingCart.reduce((acc, shoppingCart) => acc + shoppingCart.Price, 0);

console.log(`Your Total Ammount Is = ${TotalAmmount}`);

// dont take stress it is very easy .


