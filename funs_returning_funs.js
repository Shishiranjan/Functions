//Let's create one function which basically returns another function.
const greet = function (greeting) {
  //Here we are actually returning a new function but still it does not has a name.
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

//here the greeter hey is function that is returned.And in returning function we actually print both the
//greeting message and the name at the same time.
//Our first function greet here returns a new fn that is stored in variable called greeterhey. And now this
//variable is now just a function call.
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Steven");

//We can also be able to do all of it in a single line.
greet("hello")("jonas");
