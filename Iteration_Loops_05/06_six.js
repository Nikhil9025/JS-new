
// for each loop .

// why we use forEach Loop = In JavaScript, we use .forEach() to iterate over arrays and perform a function on each element. 

const coding = ["js", "Java", "python", "Ruby"];

const values = coding.forEach((items) => {

    console.log(items);
    

})

console.log(values);

//<<<<< IMP For each loop cannot return anything . >>>>>>>>

//  <<<<----------- Filter -------------->>>>> 

const myNums = [1,2,3,4,5,6,7,8,9,10];

// 1st way .


let AllNums = myNums.filter((num) => (num > 4)) // here we Use implicit function which we learnt in function .dont confuse .here.
console.log(AllNums);

// <<<<<<<----- IMP ---- Filter also takes function like forEach .

// 2nd Way .

let ResultNums = myNums.filter((num) => {

    return num > 4 ;

})

console.log(ResultNums);

// 3rd way using For each .

const newNums = [];

myNums.forEach((num) => {

    if (num > 4) {
        
        newNums.push(num);
    }

})

console.log(newNums);

