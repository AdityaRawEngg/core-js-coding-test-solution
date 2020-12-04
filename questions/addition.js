/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/

const addition = (...numbers) => {
  // all your code
  if (numbers.length != 0) {
    let sum = 0;
    numbers.forEach((number) => {
      if (isNaN(parseInt(number))) {
        throw new Error("Invalid Input");
      }
      sum = sum + number;
    });
    return sum;
  } else {
    throw new Error("Invalid Input");
  }
};

module.exports = addition;
