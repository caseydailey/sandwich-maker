console.log("bread.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    white: 2.00,
    wheat: 2.50,
    italian: 3.00
  };

  // Augment the original object with another method
  maker.addBread = function(e) {
    console.log("e.currentTarget.value: ", e.currentTarget.value);
    let choice = e.currentTarget.value;
    let breadPrice = breadPrices[choice];
    SandwichMaker.addTopping(breadPrice);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});