var age = 23;

function Shishiranjan() {
  console.log("Shishiranjan Thakur");
}
Shishiranjan();
console.log(age);

//What do you think if we simply call the function shishiranjan here. It will simply print the string present
//inside that function. pretty simple, right.
//But let's try to analyse a little bit that actually what happens if we call the function before even
//initialising it what if we try to access the variable before even defining it.
//illustration of this explanation is given below.

Shishiranjan();
console.log(age);

function Shishiranjan() {
  console.log("Shishiranjan Thakur");
}
var age = 23;

//In most of the programming language it is not possible to call the function even before initialization.
//But with javascript we can be able to call the function before even initialized.
//And that is because of nothing but it is due to the magic of hoisting.
//Sohoisting is basically a process in whch we can be able to call any function or declare any variable
//before even initializing it.
//But the cornercase is that  if we want to access the variable before even declaring it then it prints
//undefined to the console.
//Similarly if we try to access the whole function before even declaring a function then also we can do
//that but in that case it will print the whole function.
//So here we basically try to access the whole function before even declaring it. so this first line basically
//prints the whole function.

Shishiranjan();
console.log(age);
console.log(Shishiranjan);

function Shishiranjan() {
  console.log("Shishiranjan Thakur");
}
var age = 23;
//So how does that even possible to do so in javascript.
// So the answer is that we already know that at the time of parsing the code  or in simple words even before
//the code starts executing the memory is created for every individual variables and functions.
//So here in above code even before the code starts executing the function Shishiranjan is stored in  a
//local memory and whenever we call that the given string is printed. But whenever we try to access or to
//print the variable in the console then before printing at firstnit creates a memory in a call stack where
//it is set to undefined initially because it doesnot see that variable yet inside the global scope.
//but if we try to access the whole function then in that case in the memory the whole function goes there and
//finally the whoel function is printed.

//But on the other hand if we try to access the arrow function before even declaring it then it throws
//an error saying that this function is not defined. But why does that happen. Well, it is because that
//Whenever we tries to write the arrow functions then that arrow functions can automatically be treated as the
//variables and we already know that if we try to access the variable before declaring it then it is always
//set oto undefined.
//Illustration of hoisting in arrow functions.

Shishiranjan();
console.log(age);
console.log(Shishiranjan);

var Shishiranjan = () => {
  console.log("Shishiranjan Thakur");
};
var age = 23;
