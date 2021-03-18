// Only
var myFood = {vegetable: "carrot", fruit: "orange", drink: "water"
  };
  
  function myFunction(myObj) {
    var vegetableValue = myObj["vegetable"];
    var fruitValue = myObj["fruit"];
    var drinkValue = myObj["drink"];
    return { 
        vegetableValue, 
        fruitValue, 
        drinkValue };
  }
  myFunction(myFood);
  // Only
  console.log(myFunction(myFood)); // Ch
  module.exports = myFunction(myFood);