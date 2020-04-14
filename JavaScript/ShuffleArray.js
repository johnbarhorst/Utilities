// Efficient array randomizer

const shuffle = arr => {
  let currentIndex = arr.length;
  let tempValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
  return arr;
}