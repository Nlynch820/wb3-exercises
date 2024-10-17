"use strict";

// my way
// function getSupplier(code) {
//     const index = code.indexOf(":");
//     const previousCharacters = code.substring(0, index)
//     console.log(previousCharacters);

// }

// function getProductNumber(code) {
//   const index = code.indexOf(":");
//   const secondIndex = code.indexOf("-");
//   const productNumber = code.substring(index + 1, secondIndex);
//   console.log(productNumber);
// }

// function getSize(code) {
//   const index = code.indexOf("-");
//   const size = code.substring(index + 1);
//   console.log(size);
// }

// getSupplier("ACME:123-L");
// getProductNumber("DI:12345-M");
// getSize("ACE:1-12");

// craigs way
const code1 = "ACME:123-L";
const code2 = "DI:12345-M";
const code3 = "ACE:1-12";

function getSupplier(code) {
  let positionOfColon = code.indexOf(":");
  let supplier = code.substring(0, positionOfColon);
  return supplier;
}
// let supplier = getSupplier(code1);
console.log(getSupplier(code1), getSupplier(code2), getSupplier(code3));

function getProductNumber(code) {
  let positionOfColon = code.indexOf(":");
  let positionOfHyphen = code.lastIndexOf("-");
  let productNumber = code.substring(positionOfColon + 1, positionOfHyphen);
  return productNumber;
}
// let productNumber = getProductNumber(code2);
console.log(getProductNumber(code1), getProductNumber(code2), getProductNumber(code3));

function getSize(code) {
  let positionOfHyphen = code.lastIndexOf("-");
  let size = code.substring(positionOfHyphen + 1);
  return size;
}
// let size = getSize(code3);
console.log(getSize(code1), getSize(code2), getSize(code3));
