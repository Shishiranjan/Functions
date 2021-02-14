//Is it possible to use the same variable twice or thrice or as many times as we want in different functions.
//So the answer is yes.
//Now let's analyze this logic with this piece of code in detail.

var x = 1;
a();
b();

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 120;
  console.log(x);
}

//So here as we already know before starting the execution of the code the global execution context is
//created first and the call stack is also created corresponding to it. And in the call stack initially
//global execution context is kept. And in that global execution context at first while parsing the code
//that is before executing the code, memory is created for every individualvariables and functions.
//So here also the memory for the variable x is created and as we already know it is set to undefined
//initially but for functions it is set to the whole code present inside the function.

//Now the javascript engine starts executing the code. So at first we are at line no 1: So when we are at line
//no 1 we see that the variable x is set to 1 so here the undefined which is set earlier is replaced by 1
//and then the execution goes to the line number 2;
//When the engine sees the function invocation of a then again the brand new execution context context
//is created and then again initially the variable x defined inside that function a is set to undefined initially.
//But when the engine starts executing that function then it sees that this variable x is set to 10.
//So again undefined is replaced by 10 and then logs 10 to the console. Now the work of function a is finished.
//Soit gets popped of the stack and then the execution goes to line number 3.
//And the same goes for the function b as well.
//We can go to the functions as many deep as we want.
