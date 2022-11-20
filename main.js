//READ THIS OR FOREVER BE A NOOB
//This file, the main.js, MUST be of type module on your *.html file
//if it is not, you will get an error and trigger the apocalypse.

// Importing both functions from the math.js file.
// To use them, you have to type like this: Math.[name of function you want to use]
// see example below.
import Math from './auxiliary_scripts/math.js';

// import named and listed functions
// to use named functions, you can call on them by just typing their name
// PS! Remember that functions need their parentheses to make a call.
import { endOfTexT, logHeading } from './auxiliary_scripts/declared_exports.js';

//calling a listed named function
logHeading('Adding numbers')

//calling the Math.add functions, imported as Math
const result = Math.add(2,2,2,2);
console.log(result)
endOfTexT();

logHeading('Subtracting numbers');
const result2 = Math.subtract(3,1,1);
console.log(result2)
endOfTexT();

// This works exactly as in the declared exports example
// Import the functions that you want to use, like below,
// and just start to use them.
import { sayHi } from './auxiliary_scripts/listed_exports.js';

sayHi();