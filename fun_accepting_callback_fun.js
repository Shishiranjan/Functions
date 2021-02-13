//Now that we know what the higher order functions are, let's actually create our own just to demonstrate how they work.
//So new lets write two generic functions that does some string transformation. So i am going to name the
//function as one Word which simply replaces all the spaces in the string.
//So this function would simply work anywhere in our code with any string and it takes in one string and returns
//a new one without any spaces in it.

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

//Let's create one another function which basically transforms the first letter of the string to uppercase.
//So for that lets split that string and then returns the first letter of the string to captal like this.

const upperWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Now we actually pass these two functions into another new function and that another new function can be treated
//as the higher order function.
//So that higher order function is transform which takes the string as the first argument and the function as
//the second argument.

const transform = function (str, fn) {
  //here in the 1st print statement we basically print the first string which is given below.
  console.log(`Original string: ${str}`);
  //Here the second print statement basically takes the function upperWord and do the operation on the string
  //which is passed below as the 1st argument. The operation is defined inside the upperWord function previously.

  console.log(`Transformed string: ${fn(str)}`);

  //And now finally in third print statement it basically writes the function name.
  //here fn basically specifies the function upperWord.
  console.log(`Trnsformed by: ${fn.name}`);
};

//Let's now call it using two arguments.
//What i want to do with transform function is to transform the string using the upperword function.

transform("Javascript is the vesatile language", upperWord);

//Here again this function works on the basis of first function which is oneWord.
transform("Javascript is the vesatile language", oneWord);
