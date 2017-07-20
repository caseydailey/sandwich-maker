var SandwichMaker = (function(maker) {

  //private variable holding prices
  var veggiesPrices = {

    lettuce: 1.50,
    tomato: 1.75,
    onion: .75

  };

  //public method to add veggies
  //called with each box checked
  maker.addVeggies = function(e) {
    let choice = e.target.value;
    let veggiesPrice = veggiesPrices[choice];
    SandwichMaker.addTopping(veggiesPrice, choice);
  };

  //return the augmented object
  return maker;

})(SandwichMaker || {});