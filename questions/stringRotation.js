const rightRotate = (str, n) => {
  let array = str.split("");
  for (let i = 0; i < n; i++) {
    let temp = array[array.length - 1];
    for (let j = array.length - 1; j > 0; j--) {
      array[j] = array[j - 1];
    }
    array[0] = temp;
  }
  return array.join("");
};
const leftRotate = (str, n) => {
  let array = str.split("");
  for (let i = 0; i < n; i++) {
    let temp = array[0];
    for (let j = 0; j < array.length; j++) {
      array[j] = array[j + 1];
    }
    array[array.length - 1] = temp;
  }
  return array.join("");
};

const validation = (str, n, direction) => {
  try {
    if (str.length == 0 || n.length == 0 || direction.length == 0) {
      throw new Error("Invalid Input");
    }
  } catch (error) {
    throw new Error("Invalid Input");
  }
};

const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  validation(str, n, direction);
  direction = direction.toLowerCase();
  if (direction == "right") {
    return rightRotate(str, n);
  } else if (direction == "left") {
    return leftRotate(str, n);
  } else {
    throw new Error("Invalid Direction");
  }
};
module.exports = rotateString;
