const score = 200;
console.log(score);

const balance = new Number (100);
console.log(balance);

console.log(balance.toString().length); // toString used to convert number to string .
console.log(typeof balance);

const Ammount = 100.2345;
console.log(Ammount.toFixed(2)); // to fixed used to set numbers after decimal or point .
// the output is 100.23 

const otherNumber = 121.3567;
console.log(otherNumber.toPrecision(3)); // learn this in details .

const Hundreds = 1000000;
console.log(Hundreds.toLocaleString('en-IT')); // it gives output in us money structure if we need in indian then we have to put 'en_IN' in method . basically used for readability .


//++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++///////

console.log(Math);

console.log(Math.abs(-8)); // it convert only negative value into positive . it cannot does reaturn procees like + to - .

console.log(Math.round(23.56)); // it makes round fogure value . O/P = 24 . byfefault takes high value .
console.log(Math.ceil(25.76));  // it makes round figur value but takes high value .  O/P = 26 high value .
console.log(Math.floor(25.76)); // it also make round figure value but takes less value . O/P = 25 low value .

console.log("\n");

console.log(Math.min(1,5,8,4)); // shows minimum value .
console.log(Math.max(1,5,8,4)); //shows maximum value .

console.log(Math.random());     // it gives random values between (0 - 1) . O/P like = 0.7506441077470085 .
console.log(Math.random()*10); // after multiply by 10 . O/P like = 1.587849753360957 .
console.log((Math.random()*10)+1); // we added +1 baecus it gives values between 0-1 then it will give 0 also for that reason we always add +1 .
console.log(Math.floor(Math.random()*10)+1); // for minimum value .

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);











 






