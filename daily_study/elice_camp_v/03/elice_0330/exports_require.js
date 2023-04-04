// app.js
//1. exports를 import해서 변수 getSquare에 할당하세요.
const getSquare = require('./exports');
console.log(getSquare.area(5));
console.log(getSquare.perimeter(5));

//2. module_exports를 import해서 변수 getSquare2에 할당하세요.
const getSquare2 = require('./module_exports를');
console.log(getSquare2.area(3));
console.log(getSquare2.perimeter(3));


// exports.js
//정사각형의 넓이와 둘레를 구하는 함수를 모듈로 생성하세요. 이때 exports에 각 함수를 할당합니다.
exports.area = (width) => width * width; // 정사각형 넓이
exports.perimeter = (width) => width * 4; // 정사각형 둘레

// module_exports.js
//1. module.exports는 개별 함수가 아닌 객체를 통째로 exports할 때 사용합니다. exports.js와 같은 정사각형의 넓이와 둘레를 구하는 함수를 모듈을 생성하세요.
module.exports = { // 객체 하나로 반환을 하기 때문에 ,로 구분 짓는다.
  area: width => width * width,
  perimeter: width => width * 4,
};
