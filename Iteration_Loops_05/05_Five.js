// For Each Loop .


// for each loop = In JavaScript, the forEach loop is used to iterate over elements of an array (or other iterable structures like NodeLists). It’s a higher-order function provided by arrays .


const coding = ["js", "Java", "python", "Ruby"];

// 1st way

coding.forEach(function (value) { // this function is call back funtion . no need to put parameters here . it will take all value as parameter automatically . also no need of name to function we can use without name . 


    console.log(value);

})// for each using normal funtion


// for each using normal funtion .

coding.forEach((value1) => {  // here we use arrow funtion .

    console.log(value1);

}) // for each using arrow funtion .

// 3rd Way .

function printme (items) {
    
    console.log(items);
    
}

coding.forEach(printme);


// now we can access also index , whole array using for each method .

coding.forEach((values , index , coding) => {

    console.log(values , index , coding);
    
})

// using the we can access array element , index number of element , and whole array .


// now se array of object how it works .

const arr = [
    {
        Name:"Nikhil",
        ID:26
    },
    {
        Name:"Raajkumar",
        ID:17
    }
    ,
    {
        Name:"Naresh",
        ID:47
    }
]

arr.forEach(

   (Objvalues) => {

    console.log(Objvalues.Name);
        
    }

)

//   console.log(Objvalues); it shows whole array with whole value .
//   console.log(Objvalues.Name); it shows only name of all array  .
//   console.log(Objvalues.ID); it shows only ID of all array  .
