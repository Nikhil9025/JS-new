// immediately invoked function  Expression . (IIFE) .

function one (){

    console.log("DB CONNECTED");
    
}
one();


(function Two (){

    console.log("DB CONNECTED Two");
    
})();


(function Three (){
    // we also called This Fuction as a IIFE Function .
    console.log("DB CONNECTED Two");
    
})(); // these is the function which same as function two but it shows error . because immediate invoked function does't know where to stop so always put semicollen( ; ) at end . otherwise it gives error .


( () => {

    console.log("DB CONNECTED Two");
    
})(); // we can use arrow function also in IIFE function .


// interview quation on IIFE  .
// 1] why we use IIFE . = sometimes problem is happend because of global scope's pollution. so to avoid that pollution we use IIFE .also we use IIFE to exuecute functions immediately.

// Example 

(Addition = (A , B) => {
   
    console.log(`The addition is  = ${A+B}`);
    

})(10 , 20); // always put semicollen other vise subtraction function will not run it gives the error . because invoked function dosen't know where to stop .

(Subtraction = (C , D) => {
   
    console.log(`The Subtraction is  = ${C + D}`);
    

})(50 , 30);



