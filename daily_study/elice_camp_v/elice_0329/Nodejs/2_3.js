//calc2.js는 새로운 객체에 프로퍼티를 설정 후 module.exports라는 하나의 값에 할당합니다.

//calc 라는 객체를 생성해서 calc객체에 사칙연산에 해당하는 프로퍼티를 모두 추가하세요.
var calc = {};

calc.add = function (a, b) {
  return a + b;
};
calc.multiply = function (a, b) {
  return a * b;
};
calc.divide = function (a, b) {
  return a / b;
};
calc.subtract = function (a, b) {
  return a - b;
};

//module.exports 에 calc 객체를 할당하세요.
module.exports = calc;