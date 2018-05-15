# trainin-dayz
ES6 JS
if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

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
