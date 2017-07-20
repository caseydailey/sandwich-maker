
var SandwichMaker = (function(maker) {

  //private variable holding prices
  var cheesePrices = {
    swiss: .75,
    cheddar: .85,
    american: .50
  };

  //public method to add cheese
  //called with each box checked
  maker.addCheese = function(e) {
    let choice = e.target.value;
    let cheesePrice = cheesePrices[choice];
    SandwichMaker.addTopping(cheesePrice, choice);
  };

  return maker;

})(SandwichMaker || {});