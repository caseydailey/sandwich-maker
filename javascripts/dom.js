console.log("dom.js");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// elements
var bread = document.getElementById("bread");
var meat = document.getElementById("meat");
var cheese = document.getElementById("cheese");
var veggies = document.getElementById("veggies");
var condiments = document.getElementById("condiments");
var price = document.getElementById("price");
var ingredients = document.getElementById("ingredients");
var totalButton = document.getElementById("total");


//listeners
bread.addEventListener("change", SandwichMaker.addBread);
meat.addEventListener("change", SandwichMaker.addMeat);
cheese.addEventListener("change", SandwichMaker.addCheese);
veggies.addEventListener("change", SandwichMaker.addVeggies);
condiments.addEventListener("change", SandwichMaker.addCondiments);
totalButton.addEventListener("click", SandwichMaker.printSandwichInfo);









