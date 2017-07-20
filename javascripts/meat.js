
var SandwichMaker = (function(maker) {

  //private variable holding prices
  var meatPrices = {
    ham: 3.00,
    turkey: 2.50,
    bacon: 2.00
  };
    

  //public method to add meats
  //called with each box checked
  maker.addMeat = function(e) {
    let choice = e.target.value;
    let meatPrice = meatPrices[choice];
    SandwichMaker.addTopping(meatPrice, choice);
  };

  //return the augmented object
  return maker;

})(SandwichMaker || {});