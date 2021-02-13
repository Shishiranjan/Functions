//Now we gonna talk about the most important part of functions which is default parameters.
//Sometimes it's useful to have functions where some parameters are set by default so that we dont have to
//pass the arguments manually.
//And so now let's create a very basic booking function.
//Here booking is an array that contains some of the information about the flight.
const bookings = [];
//Here this is the ES6 way of setting the default parameters.
const createBooking = function (flightNumber, numPassenger = 1, price = 2000) {
  //Now here comes the part of default parameters. In last line we see that the number of passengers are set
  //to undefined initially.
  //But now i want to set the number of passengers to 1 by default.
  //So basically we would reassign the parameters like this. Now the output doesn't comes as undefined.
  //Because We use the concept of short circuiting  to our advantage here. Here what the line number 16
  //Signifies that if the number of passengers is undefined then it automatically sets to 1.

  numPassengers = numPassengers || 1;
  //Same goes for the price as well.
  //But this is the ES5 way of doing it.
  price = price || 2000;
  //Here booking is an object that contains three properties and here we basically use the concept of
  //enhanced object literal syntax.
  const booking = {
    flightNumber,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
//Here basically due to this line the number of passengers and price are actually set to undefined.
// Now one thing that is really cool about the default parameters is that they contain any expression and
//One more cool thing is that they can also be able to use the value of other parameters.
// Line number 8 can be rewritten like this with this new cool feature.
// const createBooking = function (flightNumber, numPassenger = 1, price = 2000 * 2) OR
//const createBooking = function (flightNumber, numPassenger = 1, price = 2000 * numPassengers)

createBooking("LH123");
//Now of course set the other parameters manually.

createBooking("A320", 4, 997);
createBooking("A320", 4);
createBooking("A320", 5);
//Now another thing that is important to note here is that we cannot skip arguments here,when we call the function.
//So for ex, let's say we wanted to leave the number  of passengers as the default value, but then specify
//the price, So we cannot do like this. We cannot skip the number of passengers here.
//But if you want to skip the parameter and then goes to the next one then there is also an solution for that.
//Simply set the skipped parameter to undefined because setting any parameters to undefined is  same as not
//even setting it.
//Like this:
createBooking("A320", undefined, 1000);

//createBooking('A320', 1000);
