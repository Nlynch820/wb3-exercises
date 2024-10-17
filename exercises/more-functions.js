"use strict";

// function displayMailingLabel(name, address, city, state, zip) {
//   console.log(name, address, city, state, zip);
// }
// displayMailingLabel("Nick", "123 street", "Bronx", "NY", "11002");
// displayMailingLabel("John Doe", "1600 Pennsylvania Ave", "Washington", "DC", "20500");

// function addNumbers(num1, num2) {
//   console.log(num1 + "+" + num2 + "=" + (num1 + num2));
// }
// addNumbers(1, 4);
// addNumbers(918, 3322);

function displayReceipt(totalDue, amountPaid) {
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);
  let changeDue= amountPaid - totalDue;
if (changeDue < 0){
    let amountDue = Math.abs(changeDue)
    console.log(`You are short, please pay $${amountDue} more.`);
    
} else{
    console.log("Change Due: $" + changeDue.toFixed(2));
    
}
}
displayReceipt(57.66, 100);
displayReceipt(50, 50);
displayReceipt(85, 75);
