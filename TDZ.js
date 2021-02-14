// So what is the basic difference between let, const and var.
//The variables declared with var are actually hoisted. That is if the variables are declared with var then
//we can be able to declare it or assign it before initialization like this.

console.log(a);
var a = 10;

//On the other hand we cannot be able to declare the variables earlier if it is declared with let.
//So the variable declared with let are initialised first and then declared like this.

let b = 10;
console.log(b);

//But one question arise here that is the variables declared with let is hoisted. the answer is yes.
//But it is hoisted in a different way.As we already know that the variables declared with var is actually
//stored in the local memory. But the variables declared with the let are actually stored in separate memory
//called as the script.And here in this separate memory also initially the variable declared with let is
//set to undefined. And you cannot be able to access that separate memory before initialising it.
//but on the other hand you can be able to access the local memory if you declare the variable with var.

//TDZ
//So what is Temporal Dead Zone basically.
//So TDZ is basically the time zone in which the let variable was hoisted until it gets initialized to some value.
//So whenever you are trying to access in a variable in temporal dead zone then you got an reference eror.
//They can only be accessible if some values are initialized to them.
//Whenthe JS tries to access the variable that is not defined anywhere in the code then we get an reference
//error saying that it is not defined.

console.log(x);
let b = 10;
console.log(b);

//the variables declared with var is actually present inside the window object but the variables declared with
//let is present inside the separate memory rather than the window object. That separate memory space is
//only reserved for let and const.
//If we declare some variable twice with the same name using const like this then it also throws an error.
//But this time the error is syntax error which basically means that it completely stops the whole code from executing.

let a = 10;

let a = 100;

//But in the case of var redeclaration of the  variable is possible.

var p = 10;

var p = 100;

//Finally in the case of const you have to both define and declare the variable in a single line like this.

const a = 1000;
// We cannot be able to do it like this.
const a;
a = 1000;

//You also cannot be able to change the value of the variable later using const like this. In this case
//the error which is thrown is the type error.

const a = 1000;
const a = 10000;

//so the TDZ sometimes mess our life as a developer also. It can lead us  to many unexected errors like
//undefined, reference error,syntax error etc.So the best way to avoid the problem of TDZ is to always put
//your declratations and initializations on  the top of the scope so that as soon as your code starts
//running it hits the initialization part at the first and then you do something with the variables.Otherwise
//You have gone into a lot of unexpected errors in JS code.
