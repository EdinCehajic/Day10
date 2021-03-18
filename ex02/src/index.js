// Only
var myClothes = {hat: "Fedora", shirt: "Nike", shoes: "Converse"
  };
  
  function myFunction(myObj) {
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoesValue = myObj.shoes;
    return { hatValue, shirtValue, shoesValue };
  }
  // Only 
  myFunction(myClothes);
  console.log(myFunction(myClothes)); // Ch
  module.exports = myFunction(myClothes);