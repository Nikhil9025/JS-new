
const Marval_Heros = ["Thor", "Iron_Man", "Spider_Man"];
const DC_Heros = ["SuperMan", "Batman", "Flash"];

Marval_Heros.push(DC_Heros); // now Dc Hero Array are add as a fourth element in Marval_Heros. also .push returns a Existing Array  .

console.log(Marval_Heros); 

let Heros = Marval_Heros.concat(DC_Heros); // concat returns a combined new Array .
console.log(Heros); 

// we can also combine array with spred operator . 

let AllHeros = [...Marval_Heros , ...DC_Heros];
console.log(AllHeros);

// Here concat and spred oprator are workig same but we use spread operator .

const NewArray = [1 , 2 , 3 , [3 , 2 , 1] , 5 , 6 , 7 , [8 , 9 , [1 , 5 , 8]]];

const singalArray = NewArray.flat(Infinity); // Basically .flat() used to  spread out the complex array into a simple array . and IMP thig we can also put the depth in the method . like 1 , 2 , infinity .

console.log(singalArray); 

// Now suppose input is string , or somthing else . in that situation we user .from() to convert input intiop array .

console.log(Array.isArray("Nikhil"));
console.log(Array.from("Nikhil")); // .from() function used to convert input into array .

console.log(Array.from({name : "Nikhil"})); // iterestingly  it is very important for interviews . .from method cannot convert this = {name : "Nikhil"} the it shows a empty array .

// also we can use .of  .

let score1 = 100;
let score2 = 26;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3)); // .of returns a set of array .






