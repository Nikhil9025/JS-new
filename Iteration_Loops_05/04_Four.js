// For in Loop on Object .

const language = {

    js:"Javascript",
    CPP: "C++",
    RB:"Ruby",
}

for (const key in language) {
    console.log(`the ${key} shrtcut for  = ${language[key]}`);
    
}

// for in loop on map .

const map = new Map();

map.set("IN" , "India");
map.set("RS" , "Russia");
map.set("IS" , "Isreal");
map.set("TH" , "Thailand");

console.log(map);

for (const [key] in map) {
    console.log(key , ":="); 
    
}  
// here currently we cannot acces map beceause map is not iterable here . we will learn how to iterate map in for in function soon .