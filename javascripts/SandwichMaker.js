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
    }

    maker.printSandwichInfo = function(){
        sandwich.ingredients.forEach((ingredient)=>ingredients.innerHTML += `<li>${ingredient}</li>`);
        price.innerHTML = `<p>$${sandwich.totalPrice.toFixed(2)}</p>`;
    }

 return maker;

})(SandwichMaker || {});