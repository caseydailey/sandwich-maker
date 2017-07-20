
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    ham: 3.00,
    turkey: 2.50,
    bacon: 2.00
  };
    

  // Augment the original object with another method
  maker.addMeat = function(e) {
    let choice = e.target.value;
    let meatPrice = meatPrices[choice];
    SandwichMaker.addTopping(meatPrice, choice);
  };

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker || {});