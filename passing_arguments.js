//Now here we understand that how primitives and objects basically work in the context of functions.

//So let's write one primitives that is the variable.
const flight = "A325";
//Also let's write one object.
const Shishi = {
  name: "Shishiranjan Thakur",
  citizenshipNo: 18017007745,
};

//Now here comes the part of creating functions. So let's create one checkin function in which we pass that
//number as variable and we also pass that object called shishi under which the fullname of passenger and
//citizenshipNo is kept.

const checkIn = function (flightNumber, passenger) {
  //But let's the flight number was changed suddenly and it is happened inside the check-in function.
  //So let's do that. Actually it is not a good practice to do. //So let's say flight number  was changed to
  //LH524.

  flightNumber = "LH524";
  //The name of the passenger was also modified i.e.we add Mr. in front of the name later. So let's do that also.

  passenger.name = "Mr" + passenger.name;
  //These are some of the changes that the checkin function does and then before we check in it will just
  //check that if the citizenship number is correct or not.

  if (passenger.citizenshipNo === 18017007745) {
    alert("Checking process is done");
  } else {
    alert("Wrong number of citizenship");
  }
};

//Now lets call this function with both object and variable passing at the same time.
checkIn(flight, Shishi);

//What do you think the output of this  two console.log  statements. If we pass the primitives in the function
//And then later we changed it then that change is not reflected in the call stack as primitives value is
//stored in the call stack. See here we print the flight variable right but inside our checkin function we pass
//the variable name as flightNumber. So these two are different variables but it gets assigned to the same value
//as it has in the call stack prviously.
console.log(flight);

//But in the case of object, When we try to copy an object like this we are only copying the reference to that
//object in the memory heap but they both point to the same object in the memory.
//So here as we are manipulating the passenger object, it is exactly same as like manipulating the shishi
//object.
console.log(Shishi);

// We cannot be able to manipulate the same object twice with different functions.
//Let's say we have a new function called as newpassport and after calling this function with jonas object
// we basically doesnot get the original passport number. So let's do that.

const newPassport = function (person) {
  person.passport = math.trunc(Math.random() * 100000000000000);
};

newPassport(Shishi);
checkIn(flight, Shishi);

// So yeah this is a nice example of seeing how the interaction of different functions with the same object
//can create some issues here.
//now there are two terms in programming which is basically used all the time when dealing with functions.
//and that is passing by value and passing by reference.
//So Javascript doesn't have passing by value as we see here we cannot be able to manipulate the same object
//twicw with different functions but itb has only passing by value.
