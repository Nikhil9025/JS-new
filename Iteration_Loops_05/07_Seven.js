// Map .

const myNums = [5, 25, 45, 65, 95];

let Result = myNums.map((num) => num + 5); // map is automatically returns the value .
console.log(Result);


// chaining Method . basically perform multiple methods at once . 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let showNum = arr

    .map((num) => num * 10)           // it perform his operation .
    .map((num) => num + 1)           // now in this map of parameter take the result of fisrt map .
    .filter((num) => num >= 40);     // it takes the result as argumaent to parameter of second map .  

console.log(showNum);


