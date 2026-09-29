//Declare Variables
let blades, gas, stamina;

//Acquire Input From OnlineGDB
let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

//Assign Values To Variables
blades = input[0];
gas = input[1];
stamina = input[2];

//Find Smallest Value From Variables
const X = Math.min(blades, gas, stamina);

//Output Result
console.log(`You can eliminate ${X} Titans.`);