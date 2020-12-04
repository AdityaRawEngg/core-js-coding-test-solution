/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const validation = (rgbValues) => {
  if (rgbValues.length != 3) {
    throw new Error("Invalid Input");
  }
  rgbValues.forEach((rgbValue) => {
    if (typeof rgbValue != "number" || rgbValue > 255) {
      throw new Error("Invalid Input");
    }
  });
};

const decimalToHexConverter = (decimalValue) => {
  var hexValue = decimalValue.toString(16);
  return hexValue.length == 1 ? "0" + hexValue : hexValue;
};

const rgbToHexConversion = (...rgbValues) => {
  validation(rgbValues);
  return (
    "#" +
    decimalToHexConverter(rgbValues[0]) +
    decimalToHexConverter(rgbValues[1]) +
    decimalToHexConverter(rgbValues[2])
  );
};
module.exports = rgbToHexConversion;
