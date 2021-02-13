//So in javascript sometimes we need a function that is only executed once and then never again. So basically
//it is a function that disappears right after it is called once.We basically need iife in async/await.
//So how could we simply do that. For that just create a simple function and execute it once, that's it.
//NOTE: we would never write the name of the function in an iife.
//It is basically wrapped in a parenthesis like this.
//IIFE for the regular function.

(function () {
  console.log("This function can be only executed once");
  const isPrivate = 37;
})();
console.log(isPrivate); // Here the last small parenthessis basically call the function.

//IIFE for an arrow function.
(() => console.log("This function can also be executed only one times"))(); //And same for the arrow function also.

//So why do we need actually IIFE.
// Well, we already know that function creates scopes. And what's important here is that one scope does not have
//access to the variables from an inner scope.
//For example right here in this global scope we do not have access to any variables that are defined in the
//scope of any of these functions here, right?
//So for example let's add one variable in the regular function. And then as we tries to access it out here.
//It will not work because the scope chain only works the other way around.
//So the inner scope would have access to anything that is defined outside, here in the global scope. But the
//other way around the global scope does not have access to anything, that is  inside of a scope.
//Therefore, we say that all th data defined in a scope is private.
