/* 
   Let's begin by running the trainingDays.js file. In the console we can see that the program is broken!
   Ideally, the getRandEvent() function selects an event at random. 
   The getTrainingDays() function returns the number of days to train based on the event selected. 
   The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.

*/

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

/* To avoid the ReferenceError, define days within the getTrainingDays function, before the if statement. */
/* Run the program again: no error, but days is undefined! 
New days variables are being defined in the scope of each if/else if statement. 
Delete the three let's within the if/else if statements.*/
/* Run the program again: fixed! Now the if/else if statements are changing the original days rather than defining a new one. */


// The scope of `days` is too tight 
const getTrainingDays = days => {

  if (event2 === 'Marathon') {
    days = 50;
  } else if (event2 === 'Triathlon') {
    days = 100;
  } else if (event2 === 'Pentathlon') {
    days = 200;
  }

  return days;
};

/* The log functions–logEvent() and logTime()–use the same name variable. 
There seems to be a problem with the scoping; 
we can tell by the amount of duplicate code here! In addition to variables scoped too broadly, 
duplicate code can indicate that a variable may be scoped too tightly.
Let's avoid this repetition by adding name as a parameter for each function. */
/*Move the name variable to global scope.*/
/* Pass name as an additional argument to logEvent() and logTime(). */
/* Check that the program still works! Run it and check the output. */
/* Try the functions for another competitor. Copy and paste this code at the end of the file.*/
/* Run the program. The events are assigned randomly, but Nala and Warren are running the same events! */
/* We see that the random variable is defined in the global scope. Each time getRandEvent() is called, it uses the same value.
At the top of the file, move the random variable from the global scope to block scope within the getRandEvent function.*/

// The scope of `name` is too tight 
const logEvent = event => {
  /*const name = 'Nala';*/
  console.log(`${name2}'s event is: ${event2}`);
};

const logTime = days => {
  /*const name = 'Nala';*/
  console.log(`${name2}'s time to train is: ${event2} days`);
};

const event2 = getRandEvent();
const days2 = getTrainingDays();
const name2 = 'Warren';

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name2, event2);
logTime(name2, days2);
/* The parameters for logEvent should be (name, event). 
The parameters for logTime should be (name, time). */

/* Warren's event is: Triathlon
Warren's time to train is: Triathlon days*/

