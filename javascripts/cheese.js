console.log("cheese.js");

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
    swiss: .75,
    cheddar: .85,
    american: .50
  };

  // Augment the original object with another method
  maker.addCheese = function(e) {
    let choice = e.target.value;
    let cheesePrice = cheesePrices[choice];
    SandwichMaker.addTopping(cheesePrice, choice);
  };

  // Return the new, augmented object with the new method on it
  return maker;
  
})(SandwichMaker || {});