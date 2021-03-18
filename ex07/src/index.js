function myFunction(propRoar) {// Ch
    // Only 
    var lion = {name: "Simba", legs: 4, tails: 1, roar: "roar-roar"};
    delete lion[propRoar];
    return lion;
    // Only 
  }
  myFunction("roar"); // Change
  console.log(myFunction("roar"));
  module.exports = myFunction;