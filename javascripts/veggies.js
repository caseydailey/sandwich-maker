
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = {

    lettuce: 1.50,
    tomato: 1.75,
    onion: .75

  };

  // Augment the original object with another method
  maker.addVeggies = function(e) {
    let choice = e.target.value;
    let veggiesPrice = veggiesPrices[choice];
    SandwichMaker.addTopping(veggiesPrice, choice);
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});