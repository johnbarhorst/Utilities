// Accepts a minimum and maximum range number, and then an input you want to check against it.
// If the num falls outside of range, it will 'wrap' around, starting back at the other end.
// Useful for keeping numbers within the range of an array's length.

const wrapNumber = (min, max, num) => {
  const rangeSize = max - min;
  return ((((num - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

// EXAMPLE: 
// Assuming an Array with 5 items:
// const numberInRange = wrapNumber(0, Array.length, 5); //Returns 0, bringing you back to the first array item.
// const numberInRange = wrapNumber(0, Array.length, -1); //Returns 4, bringing you back to the last array item.