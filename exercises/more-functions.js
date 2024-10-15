"use strict"

//function displayMailingLabel(name, address, city, state, zip){
   // console.log(name, address, city, state, zip);
    
//}
//displayMailingLabel("Nick", "123 street", "Bronx", "NY", "11002")

// function addNumbers(num1, num2) {
//     console.log(num1 + "+" + num2 + "=" + (num1 + num2));
    
// }
// addNumbers(1, 4)

function displayReceipt(totalDue, amountPaid) {
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change Due: $" + (amountPaid - totalDue));
    
}
displayReceipt(57.66, 100)