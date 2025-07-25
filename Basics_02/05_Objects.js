

// Object destructure and json  API intro .

const course = {

    title: "JavaScript Basics",
    fees: 2000,
    duration: "3 months",
    topics: ["Variables", "Functions", "Objects", "Arrays"],
    instructor: "Hitesh Choudhary",
    isAvailable: true,
}

// one way to access object properties is .
console.log(course.title); // or

const {duration} = course;
console.log(duration); // or

const {duration:time} = course;
console.log(time);  // assigning a name to duration property .


// json  API intro .

//API look like this:

{
 // and it contains data in key-value pairs.
} 

// also we checked randomuserAPI.me using jason formatter




