//Let's now talk about one of the fundamental property of the javascript language which is the fact that it has first class
//functions.And it enables us to write higher order functions. First class functions are also called as the first class citizens. So Javascript
//treats the function as the first class citizens. TWe know that functions are also called as the objects.
//And objects are simply the values. So this means that functions are also simply values. Functions are
//just another type of object.
//Now why does javascript work this way.
//Well, it's simply because functions are just another type of objects in javascript.
//And since functions are values there are ton of interesting thing that we can do with them, like storing the
//in variables or object properties. For ex:
//Here it is an arrow function and we store that function inside the variable named as add.

const add = (a, b) => a + b;
//We can also be able to store the function inside any property of an object.
//For ex, here counter is an object having the property called as inc and we store the function inside that
//inc property like this.

const counter = {
  value: 21,
  inc: function () {
    this.value++;
  },
};

//We can also be able to pass the functions as an arguments to other functions.

const train = (trainNumber) =>
  console.log("The train having this train number is departed");
//Here we have addEventListener function inside which we pass the greet function.
btnClose.addEventListener("click", train);

//To make things even more interesting we can also be able to return functions from another functions.
//As array have methods function also has methods.

counter.inc.bind(someOtherObject);

//Higher order functions are those functions that recieves another function as an argument, that returns a new
//function or both.
//This is only possible because of the first class functions. Here in line no 29 addEventListener is a higher
//order function because it recieves another function as an input.In this case the train function.
//And we usually say that the function that is passed in is a callback function because the callback function
//will be called later by the higher order function. In this case the add event listener will call the train
// callback function later as soon as the click event happens.

//We also have a function that returns a new function.So we have a higherorder function here which is basically
//this whole code block which clearly returns a new function.
//First class function is actualy a feature that a programming language either has or not.All it means that
//all functions are values. There are no first class functions in practice.It is just a concept.
//But however higher order functions are in practice whic are possible because the language supports first class
//functions.

function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
