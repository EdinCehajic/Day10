  
// Create
var lion = {name: "Simba", legs: 4, tails: 1};
  // End of lion
  function myFunction(propName, propValue) {
    // Only
    lion[propName] = propValue;
    return lion;
    // Only
  }
  console.log(myFunction("roar", "roar-roar"));
  myFunction("roar", "roar-roar"); // Ch
  module.exports = myFunction;