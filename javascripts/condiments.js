
var SandwichMaker = (function(maker) {

  //private variable holding prices
  var condimentsPrices = {

        mustard: .50,
        mayo: .75,
        kraut: .85
  };

  //public method to add meats
  //called with each box checked
  maker.addCondiments = function(e) {
    let choice = e.target.value;
    let condimentsPrice = condimentsPrices[choice];
    SandwichMaker.addTopping(condimentsPrice, choice);
    
  };

  return maker;

})(SandwichMaker || {});