//배열의 모든 요소가 square number(정수의 제곱)인지 확인하는 함수를 작성하십시오.
const isSquare = (array) => {
  if (array.length) { // 배열이 있다면
      return array.every(number => Number.isInteger(Math.sqrt(number))); // 정수인지 확인
  }
  return undefined;
};

console.log(isSquare([1, 4, 9, 81, 36, 1024]));

module.exports = { isSquare };
