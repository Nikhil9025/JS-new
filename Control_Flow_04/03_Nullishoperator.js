
// Nullish Coalescing operator (??) : null undefiend .

let val1;
val1 = 10 ?? 5; 
// val1 = null ?? 10;
// val1 = undefined ?? 5;

val1 = null ?? 15 ?? 45 ;  // it will always return the first Value like this exaple = 15; 

// val1 =  null ?? undefined;

console.log(val1);

//  Terniary operator .

// condition  ?  true : false 

const hotTeaPrice = 100;

hotTeaPrice <= 90  ?  console.log("less than 90") : console.log("Greater than 80");


