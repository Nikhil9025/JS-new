// Object Part 2 . 

// now we will learn singleton object and how to create a singleton object . or constructor.

const UserTinder = {}  // Non singelton object .

const UserTinder2 = new Object(); // singelton object .

console.log(UserTinder, UserTinder2); // Both are empty objects . but UserTinder is non singelton object and UserTinder2 is singelton object .

//understand with new object .

const NewObj = {}

NewObj.Id = "NT47";
NewObj.Name = "Nikhil Tisangikar";
NewObj.isLoggedIn = true;

// console.log(NewObj); // This will print the object with properties Id, Name and isLoggedIn.


// Now we will create a user object with nested objects to access the full name of the user.
const regularUser = {

    Email: "nikhilcorp@gmail.com",
    fullName: {

        userFullName: {

            firstName: "Nikhil",
            lastName: "Tisangikar",

        }
    }

}

// console.log(regularUser.fullName.userFullName.lastName); // This will print or acces the last name of the user.


// now we see how to combine object .

const obj1 = {

    1: "A",
    2: "B",
    3: "C",

}

const obj2 = {

    4: "D",
    5: "E",
    6: "F",

}

console.log({ ...obj1, ...obj2 } // This will combine both objects and print the combined object. 

); // This will print the combined object with properties from both objects. 


// another way to combine objects is using Object.assign() method.

const obj3 = Object.assign({}, obj1, obj2); // This will create a new object and combine both objects into it.
console.log(obj3); // This will print the combined object with properties from both objects.


//when value is coming from database . so see how value comes from database and how to access it.

const userFromDB = [

    Object1 = {
        Name: "Nikhil",
        Age: 25,
        Email: "nikhilcorp@gmail.com"
    }
    , Object2 = {
        Name: "Nikhil Gurav",
        Age: 20,
        Email: "nikhil.Gurav@gmail.com"
    }
    , Object3 = {
        Name: "Nikhil Tisangikar",
        Age: 30,
        Email: "nikhil.tisangikar@gmail.com"
    }

]

console.log(userFromDB[1].Email); // This will print the email of the second object in the array.

console.log(Object.keys(Object1)); // This will print the keys of the second object in the array.

// IMP it returns the keys of the object as an array. so we can use it to iterate over the keys of the object.

console.log(Object.values(Object1)); // This will print the values of the object as an array. so we can use it to iterate over the values of the object.

console.log(Object.entries(Object1)); // This will print the entries of the object as an array of arrays. so we can use it to iterate over the entries of the object. // it will return seperate array of key and value pairs.


console.log(Object1.hasOwnProperty('Name')); // This will check if the object has the property "Name" and return true or false.

 
