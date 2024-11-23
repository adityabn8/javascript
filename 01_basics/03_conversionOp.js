let score = false

console.log(typeof score);
console.log(typeof(score));

let valInNumber = Number(score);

console.table([valInNumber,typeof(valInNumber)]);

/*
 Coversion to number
 * from string (number only eg: "321") - 321, resultant type -number - same for reverse conversion
 * from string (random string which is does not include pure digits eg: "12ab", "ajdhbcd") - NaN, resultant type - number
 * from null - 0, number
 * from undefined - NaN, number
 * from boolean - true - 1, false - 2 - number
*/

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.table([booleanIsLoggedIn, typeof(booleanIsLoggedIn)])

// 1 <=> true, 0 <=> false
// "" => false
// "aditya", " " => true



let someNum = 33

let strNum = String(someNum)

console.table([strNum, typeof(strNum)]);

