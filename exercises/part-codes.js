"use strict";

function getSupplier(code) {
    const index = code.indexOf(":");
    const previousCharacters = code.substring(0, index)
    console.log(previousCharacters);
    
}

function getProductNumber(code) {
  const index = code.indexOf(":");
  const secondIndex = code.indexOf("-");
  const productNumber = code.substring(index + 1, secondIndex);
  console.log(productNumber);
}

function getSize(code) {
  const index = code.indexOf("-");
  const size = code.substring(index + 1);
  console.log(size);
}

getSupplier("ACME:123-L");
getProductNumber("DI:12345-M");
getSize("ACE:1-12");
