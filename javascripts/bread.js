
var SandwichMaker = (function(maker) {

  //private variable holding prices
  var breadPrices = { 
    white: 2.00,
    wheat: 2.50,
    italian: 3.00
  };

  //public method to add bread
  //called when select is changed
  maker.addBread = function(e) {
    let choice = `${e.currentTarget.value} bread`;
    let breadPrice = breadPrices[e.currentTarget.value];
    SandwichMaker.addTopping(breadPrice, choice);
  };

  return maker;
  
})(SandwichMaker || {});