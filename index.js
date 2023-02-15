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
console.log(`CHALLENGE 2`);

if(markHigherBMI){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}
else console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);


// Coding Challenge 3
console.log(`CHALLENGE 3`);

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

// TEST DATA 1
const bill = 275;
// TEST DATA 2
// const bill = 40;
// TEST DATA 3
// const bill = 430;

const tip = (bill>=50 && bill<=300) ? (.15 * bill) : (.2 * bill);

console.log(`
The bill is ${bill}
The tip is ${tip}
The total is ${bill + tip}
`);