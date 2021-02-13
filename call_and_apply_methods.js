//Here we go back to the this keyword and then learn how to set the this keyword manually.

const Emirates = {
  flightName: "Emirates",
  flightCode: "EM",
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a flight on ${this.airline} having flight code as ${this.flightCode} ${flightNum}`
    );

    this.booking.push({ flight: `${this.flightCode} ${flightNum}`, name });
  },
};

Emirates.book(247, "Shishiranjan Thakur");
Emirates.book(587, "Randhir Shah");

//Now let's create another object to do the same booking for another flight.
//Now taking the exact same method of previous object and simply copying here is a bad practice.
//So instead we just take the method and store it in external function and then we can reuse that function.
//for all of the different airlines.
//So what i mean is to create a new function called book and we will simply set  it to Emirates.book, so
//Again it is possible because of the first class functions and so we can simply take this function value
//here.
//Here for the vistara airlines also we ave to print the whole string exactly same like as we did before for
//Emirates airlines.
//But for that we have to use the data of Vistara.

const vistara = {
  flightName: "Vistara",
  flightCode: "VS",
  booking: [],
};
//That is where the call method comes into the picture.
//What call method actually does is that it basically sets the this keyword explicitly or manually  to any
//of the object you want and once youset the this keyword to the required obj you want, then you can also
//be able to use the data of that object which the this keyword sets to actually.
const book = Emirates.book;

//Demonstration of call method.
//Here this call method actually points to vistara object that is flightCode and the passenger name.
book.call(vistara, 254, "Aarti thakur");
console.log(vistara);

//by using our great call method we can be able to use as many objects as we want.

const Spicejet = {
  flightName: "Spicejet",
  flightCode: "SJ",
  booking: [],
};

book.call(SpiceJet, 216, "Dipendra Kumar Thakur");
console.log(Spicejet);

//The main difference between call and apply method is that boths works the same but instead apply methods just
//simpy takes the array.

const flightData = [479, "Bikash Thakur"];
book.apply(vistara, flightData);
console.log(vistara);

//But in modern javascript like ES6 apply method doesn't exists. their problem is also covered by the call
//method itself like this.

book.call(swiss, ...flightData);
