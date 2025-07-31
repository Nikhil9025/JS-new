// Arrow functions .

const User = {

    UserName: "Nikhil",
    Price: 999,
    WelcomeMessage: function () {

        console.log(`${this.UserName} , Welcome to websit`);
        console.log(this);

    }

}

// Object.freeze(User); ues to freez all value . now no chages will happend in original object .
User.WelcomeMessage();
User.UserName = "Raajkumaar";
User.WelcomeMessage();

console.log(this); // it gives the empty object . it refers empty object . because no context in global .


// Now Arrow functions .

function funN() {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}
funN(); // we cannot acces this in function .

// we can write function in many type .

// 1] 

function fun() {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}
fun();

// 2]

const fun1 = function () {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}

fun1();

// 3]  Arrow Functions .

const function1 = () => {      // this is explicit function .
    let UserName2 = "Nikhil";
    console.log(this.UserName2);
}
function1();

// Ubderstading arrow function .

const addtwo = (num1, num2) => {

    return num1 + num2;
}                               // BAsic arrow function . 

let result = addtwo(20, 40);
console.log(result);


const addToo = (num1, num2) => {   

    return num1 + num2;
}

console.log(addToo(3, 5));

// we can run this arrow function in other way also . if we use {} braces the it is mandatory to use return; 

const addThre = (num1, num2, num3) => num1 + num2 + num3; // this is arrow Implicit function
console.log(addThre(2, 5, 7));

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
console.log(addFour(2, 3, 4, 8));
// in this both case we dont need to use return; also we called emplicit return. we will use mostly this emplicit function in React .

// now understand how to return object in arrow emplicit function .

const ObjInArrow = () => ({UserName:"Nikhil" , ID:5634 , City:"Pune"});
console.log(ObjInArrow()); // object passed in arrow implicit function .


// this in detail . 

const User1 = {

    UserNAme: "Nikhil",
    Message: function () {

        console.log(`Hello ${this.UserNAme} Welcome to NT World`);
        // console.log(this);
        
    }
}

// Object.freeze(User);

User1.Message();
User1.UserNAme = "Raajkumar";
User1.Message();

console.log(this);







