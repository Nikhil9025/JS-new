
// Arrays 

const myArray = ["Nikhil" , 26 , "Saturday" , 8 , "very Big Success"];
console.log(myArray[2]);


// Array Methods .

myArray.push(6);   // push is used to add element in arry . it will add at ending position .
console.log(myArray);

myArray.pop(6);   // pop is used to remove last element in arry .
console.log(myArray);

myArray.unshift(7);  // unshift is used to add element in array . it will add at starting position.
console.log(myArray);

myArray.shift();     // shift used to remove elemnt which present at first position .
console.log(myArray);

console.log(myArray.includes(12)); // it will give booolean value False .
console.log(myArray.includes(26)); // it will give booolean value true .

console.log(myArray.indexOf(17));  //if element is not present in array then it will give -1 in O/P.

console.log(myArray.indexOf(26)); // indexOf gives index number in O/P  we need to put array element in method.

const newArray = myArray.join(); // .join used to convert array into astring , also it bind the string .
console.log(newArray);
console.log(typeof newArray);

console.log(myArray);

// slice , splice 

console.log("A " , myArray);

const newArr = myArray.slice(1 , 3); // used to slice of a array . (1,3) last position will not included .
console.log(newArr);
console.log("B " , myArray);

const newArr1 = myArray.splice(1 , 3); // it is also used to cut string but it cannot cut last string . last position will included (1,3) .
console.log("C " , myArray);

console.log(newArr1); 


// check the difference between Slice and splice .

const array = [1, 2, 3, 4, 5];
const arr1 = array.splice(1, 3); // use slice and check the result .
console.log(arr1);
console.log(array);

// it will also manipulate the oriinal Array .


//---- Imp interview quation  diff between slice and splice . Ans = splice is directly manipulate the original array . and slice will not .





