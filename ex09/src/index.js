function myFunction(myObj, checkProp) {
    // Only
var myObj = {
    title: "Titanic", song: "My Heart Will Go On", genre: "drama"
};

  
return "Not Found";
    //Only
  }
  console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title"));
  console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song"));
  console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" },"genre"));
  console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" },"actor"));
  module.exports = myFunction;