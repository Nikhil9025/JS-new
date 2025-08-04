// For Loop .

// for loop syntax .


// 1st Example .

for (let index = 1; index <= 5; index++) {

    // console.log(index);

}


// 2nd Exaple  

for (let i = 0; i <= 10; i++) {

    const element = i;

    if (element == 5) {
        // console.log("5 is the best number");
    }

    // console.log(element);

}

// 3rd Example .

for (let i = 0; i <= 5; i++) {

    // console.log(`Outer Loop ${i}`);


    for (let j = 0; j <= 5; j++) {

        // console.log(`Inner Loop ${j} and inner loop value ${i}`);
        // console.log(i + "*" + j + " = " + i*j );

    }
}


// 4th Example .
// Loop On Array [] .

const myArray = ["Shaktiman", "Krish", "Kaal"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);

}

// Break and continue .

// break;

for (let index = 1; index <= 20; index++){
    const element = index;
    if (element == 5) {
        console.log("5 Detected");
        break;                      // Loop will stop after (break;) statement .
    }

    console.log(`index value is ${element}`);
    

}

// continue .

for (let index = 1; index <= 20; index++){
    const element = index;
    if (element == 5) {
        console.log("5 Detected");
        continue;                      // continue; statement will skip condition .
    }

    console.log(`index value is ${element}`);
}
