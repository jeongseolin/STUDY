// forEach
const arr = [-1, -2, -3, -4, -5];
arr.forEach((num) => {
  console.log(num);
});

// map
const arr = [-1, -2, -3, -4, -5];
const absArr = arr.map((num) => {
  return Math.abs(num);
});
console.log(absArr);

// filter
const arr = [-1, -2, -3, -4, -5];
const filteredArr = arr.filter((num) => {
  return num > -5 && num < -1;
});
console.log(filteredArr);
