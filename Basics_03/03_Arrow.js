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

console.log(this); // it gives the empty object .


// Now Arrow functions .

function fun1() {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}
fun1(); // we cannot acces this in function .

// we can write function in many type .

// 1] 

function fun1() {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}
fun1();

// 2]

const fun1 = function () {

    let UserName1 = "Nikhil";
    console.log(this.UserName1);
}
fun1();

// 3]  Arrow Functions .

const function1 = () => {
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

const addThre = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThre(2, 5, 7));

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
console.log(addFour(2, 3, 4, 8));
// in this both case we dont need to use return; also we called emplicit return.











