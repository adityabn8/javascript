const accountId = 144553;
let accountEmail = "aditya@gmail.com";
var accoutnPassword = "12345";
accountCity = "Bangalore";  
let accountState;  // undefined - declared but not initialized

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accoutnPassword = "212121";
accountCity = "Pune";

console.log(accountId);

/*
Prefer not to use var 
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accoutnPassword, accountCity, accountState]);
