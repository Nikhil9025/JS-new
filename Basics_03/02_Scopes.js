// Scopes in function .

// var c = 50 ;
let a = 20;
if (true) {

    let a = 10;
    const b = 20;
    var c = 40;

    console.log(`inner scope value of a is = ${a}`); // it access only scope value .
    console.log(b);
    console.log(`inner value of c is = ${c}`);

}

console.log(`global scope value of a is = ${a}`); // it acces only global scope value .


/// Now see Nested scope .

function one() {
    const UserName = "Nikhil";

    function two() {

        const website = "You Tube";

        console.log(UserName);
        console.log(website);
    }


    two();
}

one();

// remember with the older man and child ice cream example .

// uderstand how scope work in if method .

if (true) {

    const UserName = "Raajkumar";

    if (UserName === "Raajkumar") {

        const website = "_RJ.com";

        console.log(UserName + website);
        console.log(website);
    }
    console.log(UserName);
}


// +++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++////////

// we see the littelebit about hoistiong .

addone(7);     // in this case we can acces function before the initiallization .
function addone(num) {
    return num + 1;
}


addtwo(5); // but in this case we canno't acces function before the initiallization .
const addtwo = function (num) {
    return num+2;
} // This function will not run laearn hoistiong to understand how it works. 




