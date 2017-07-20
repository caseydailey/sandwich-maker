
var SandwichMaker = (function(maker) {

    //private object to hold the ingredients and price
    var sandwich = {

        totalPrice: 0,
        ingredients: []
    };
  
    //public method on SandwichMaker to update the sandwich object's price and ingredients.
    //called by the toppings modules with each selection event
    maker.addTopping = function(toppingPrice, topping) {
      sandwich.totalPrice += toppingPrice;
      sandwich.ingredients.push(topping);
    }

    //public method called by the get total button
    maker.printSandwichInfo = function(){
        sandwich.ingredients.forEach((ingredient)=>ingredients.innerHTML += `<li>${ingredient}</li>`);
        price.innerHTML = `<p>$${sandwich.totalPrice.toFixed(2)}</p>`;
    }

 //return the augmented make object
 return maker;

})(SandwichMaker || {});