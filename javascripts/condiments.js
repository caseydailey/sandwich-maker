console.log("condiments.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {

        mustard: .50,
        mayo: .75,
        kraut: .85
  };

  // Augment the original object with another method
  maker.addCondiments = function(e) {
    let choice = e.currentTarget.value;
    let condimentsPrice = condimentsPrices[choice];
    SandwichMaker.addTopping(condimentsPrice);
    
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});