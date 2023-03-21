function find_average(array) {
  let total = 0;

  let mean = 0;

  array.forEach((num) => {
    total += num;
  });

  mean = total / array.length;

  return mean;
}

console.log(find_average([43.4, 83.6, 56, 59.47, 70.2, 65, 89, 59]));

module.exports = { find_average };
