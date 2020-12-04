/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
  if (typeof str != "string") {
    throw new Error("Invalid Input");
  }
  str = str.toLowerCase();
  let countA = 0,
    countE = 0,
    countI = 0,
    countO = 0,
    countU = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        countA++;
        break;
      case "e":
        countE++;
        break;
      case "i":
        countI++;
        break;
      case "o":
        countO++;
        break;
      case "u":
        countU++;
        break;
    }
  }
  return { a: countA, e: countE, i: countI, o: countO, u: countU };
};

module.exports = frequencyCounter;
