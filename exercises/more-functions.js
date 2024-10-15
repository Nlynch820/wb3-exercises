"use strict"

function displayMailingLabel(name, address, city, state, zip){
   console.log(name, address, city, state, zip);
    
}
displayMailingLabel("Nick", "123 street", "Bronx", "NY", "11002")
displayMailingLabel("John Doe", "1600 Pennsylvania Ave" ,"Washington", "DC", "20500")

function addNumbers(num1, num2) {
    console.log(num1 + "+" + num2 + "=" + (num1 + num2));
    
}
addNumbers(1, 4)
addNumbers(918, 3322)

function displayReceipt(totalDue, amountPaid) {
    console.log("Total Due: $" + totalDue);
    console.log("Amount Paid: $" + amountPaid);
    console.log("Change Due: $" + (amountPaid - totalDue));
    
}
displayReceipt(57.66, 100)
displayReceipt(50,50)
displayReceipt(85, 75)