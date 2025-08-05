//  for of loop.

// ["" , "" , ""];
// [{} , {} , {}];

const arr = [1 , 2 , 3 , 4 , 5];

for (const num of arr) {  // here the object means the variable . which contains the array .

    console.log(num); 
}

// forof on strings .

let name = "Nikhil";

for (const char of name) { // in for of loop it cannot return the name like "Nikhil" . it returns each character .

    console.log(char);
    
}


// Map .

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// also map dont take same value it takes only unique value . and it follow order.

const map = new Map();

map.set("IN" , "India");
map.set("RS" , "Russia");
map.set("IS" , "Isreal");
map.set("TH" , "Thailand");

console.log(map);

// now apply forOf loop in it .

//1st.
for (const key of map) { 
    console.log(key);
    
}   
// it gives output like this and we dont want this output .
// [ 'IN', 'India' ]
// [ 'RS', 'Russia' ]
// [ 'IS', 'Isreal' ]
// [ 'TH', 'Thailand' ]

// to avoid output like ^ we use 2nd  loop .

//2nd loop
for (const [key , value] of map) { 
    console.log(key ,  ":- " , value);
    
}   
// now it show single output .
// IN :-  India
// RS :-  Russia
// IS :-  Isreal
// TH :-  Thailand

// now see how it works on object .

const obj = {

    "name":"nikhil",
    "DOB" : 26,
    "ID"  : 47
};



