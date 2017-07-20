console.log("SandwichMaker.js");

var SandwichMaker = (function( maker) {

  var sandwich = {
    totalPrice: 0,
    ingredients: []
  };

  // Return the public interface that other code can interact with
  
    maker.addTopping = function(toppingPrice, topping) {
      sandwich.totalPrice += toppingPrice;
      sandwich.ingredients.push(topping);
      console.log("totalPrice: ", sandwich.totalPrice);
      console.log("ingredients: ", sandwich.ingredients);
      console.log("sandwich: ", sandwich );
    }

 return maker

})(SandwichMaker || {});