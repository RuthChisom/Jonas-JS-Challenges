'use strict';

// Coding Challenge 1
console.log(`CHALLENGE 1`);

// TEST DATA 1
const massJohn = 92;
const massMark = 78;
const heightJohn = 1.95;
const heightMark = 1.69;

// TEST DATA 2
// const massJohn = 85;
// const massMark = 95;
// const heightJohn = 1.76;
// const heightMark = 1.88;

// Body Mass Index
const BMIJohn = massJohn / (heightJohn ** 2);
const BMIMark = massMark / (heightMark ** 2);
console.log(BMIMark, BMIJohn)

// Does Mark have a Higer BMI than John?
let markHigherBMI = BMIMark > BMIJohn;

console.log ("Mark has a Higer BMI than John", markHigherBMI);



// EXTRA
console.log(`Backtick is an 
Awesome
way to write
multiple line 🤪`);


// Coding Challenge 2
console.log(`
CHALLENGE 2`);

if(markHigherBMI){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);


// Coding Challenge 3
console.log(`
CHALLENGE 3`);

// TEST DATA
const firstScoreDolphin = 96;
const secondScoreDolphin = 108;
const thirdScoreDolphin = 89;
const firstScoreKoalas = 88;
const secondScoreKoalas = 91;
const thirdcoreKoalas = 110;

// TEST DATA BONUS 1
// const firstScoreDolphin = 97;
// const secondScoreDolphin = 112;
// const thirdScoreDolphin = 101;
// const firstScoreKoalas = 109;
// const secondScoreKoalas = 95;
// const thirdcoreKoalas = 123;

// TEST DATA BONUS 2
// const firstScoreDolphin = 97;
// const secondScoreDolphin = 112;
// const thirdScoreDolphin = 101;
// const firstScoreKoalas = 109;
// const secondScoreKoalas = 95;
// const thirdcoreKoalas = 106;

const avgDolphin = (firstScoreDolphin + secondScoreDolphin + thirdScoreDolphin) / 3;
const avgKoalas = (firstScoreKoalas + secondScoreKoalas + thirdcoreKoalas) / 3;

if((avgDolphin > avgKoalas) && (avgDolphin >= 100)) console.log(`Dolphin is the WINNER with an average of ${avgDolphin} over ${avgKoalas} from Koalas`);
else if((avgDolphin < avgKoalas) && (avgKoalas >= 100)) console.log(`Koalas is the WINNER with an average of ${avgKoalas} over ${avgDolphin} from Dolphin`);
else if((avgDolphin === avgKoalas) && (avgDolphin >= 100)) console.log(`It's a DRAW with an average of ${avgKoalas}`);
else console.log(`There is NO winner, because neither Dolphin ${avgDolphin} nor Koalas ${avgKoalas} scored an average up to 100`)



// Coding Challenge 4
console.log(`
CHALLENGE 4`);

// TEST DATA 1
const bill = 275;
// TEST DATA 2
// const bill = 40;
// TEST DATA 3
// const bill = 430;

const tip = (bill>=50 && bill<=300) ? (.15 * bill) : (.2 * bill);

console.log(`The bill is ${bill}
The tip is ${tip}
The total is ${bill + tip}
`);



// Coding Challenge 5
console.log(`
CHALLENGE 5`);

const calcAverage = (first, second, third) => {return (first + second + third)/3};
// TEST DATA 1
const firstScoreofDolphin = 44;
const secondScoreofDolphin = 23;
const thirdScoreofDolphin = 71;
const firstScoreofKoalas = 65;
const secondScoreofKoalas = 54;
const thirdScoreofKoalas = 49;
// TEST DATA 2
// const firstScoreofDolphin = 85;
// const secondScoreofDolphin = 54;
// const thirdScoreofDolphin = 41;
// const firstScoreofKoalas = 23;
// const secondScoreofKoalas = 34;
// const thirdScoreofKoalas = 27;

const avgScoreDolphin = calcAverage(firstScoreofDolphin, secondScoreofDolphin, thirdScoreofDolphin);
const avgScoreKoalas = calcAverage(firstScoreofKoalas, secondScoreofKoalas, thirdScoreofKoalas);

const checkWinner = (Dolphin, Koalas) => { 
    //i had to use return in an arrow function because i have curly braces for the multiple lines of code
    if(Dolphin >= Koalas * 2) return `Dolphin wins (${Dolphin} vs. ${Koalas})`;
    else if(Koalas >= Dolphin * 2) return `Koalas wins (${Koalas} vs. ${Dolphin})`;
    else return `Nobody wins (${Dolphin} vs. ${Koalas })`
}
console.log(checkWinner(avgScoreDolphin, avgScoreKoalas));



// Coding Challenge 6
console.log(`
CHALLENGE 6`);

let tipValue;
const calcTip = (bill) => 
    // return (bill>=50 && bill<=300) ? tipValue = 0.15 * bill : tipValue = 0.2 * bill;
    tipValue = (bill>=50 && bill<=300) ? 0.15 * bill : 0.2 * bill;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totalArray = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])];

console.log(totalArray);
