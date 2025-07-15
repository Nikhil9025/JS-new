const Name = "Nikhil" ;
const repo = 50;

console.log(Name + repo);

console.log(`Hello My Name is ${Name} And My repo count is ${repo}`); // this is standard way to concat two strings .

// now understand functions in strings .

let gameName = "Rockstar Games";
console.log(`The length of the gameName is ${gameName.length}`); // used to get lenth of string .
console.log(`Letters Uppercased = ${gameName.toUpperCase()}`);  // used to make string in upperacse .
console.log(`The position of t is ${gameName.charAt(5)} `);    // used to find chacrachter at index position .
console.log(`The index of G is ${gameName.indexOf('G')}`);      // used to find Index number in a string .
console.log(`cut the string from index 0 to 5 ${gameName.substring(0 , 5)}`); //used to cut a part of a string with index number. and the last index will not include .it does not accept negative values .
console.log(`slice the string from index 1 to 5 ${gameName.slice(1 , 5)}`); //used to cut slice of a string with index number . it is same as substring but it accept negative values(-5 , 8); 

let cityName = "  Pune";
console.log(`City Name is ${cityName.trim()}`); // used to trim white spaces in string .

let dramCity = "Mumbaiii";
console.log(`Dream city is ${dramCity.replace('M' , 'B')}`);  // used to replace word in a string .
console.log(`Dream city is ${dramCity.replaceAll('i' , 'e')}`); // when a single character in multiple time in a string then we use replaceAll to reaplace all same characheter .

let Email = "nikhil@9025gmail.com";
console.log(`nikhil word is present in Email : ${Email.includes('nikhil')}`);
console.log(`Rajkumar word is present in Email : ${Email.includes('Rajkumar')} `); // it checkes the data is present in the value or not. 

















