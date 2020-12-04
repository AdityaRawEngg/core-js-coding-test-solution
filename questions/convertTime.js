/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
  if (isNaN(parseInt(seconds))) {
    throw new Error("Invalid Input");
  }
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60) % 60;
  minutes = minutes % 60;
  seconds = seconds % 60;
  return { hours: hours, minutes: minutes, seconds: seconds };
};

module.exports = convertTime;
