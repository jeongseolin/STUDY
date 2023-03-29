//calc.js 파일 불러오세요.
//모듈을 불러오기 위해 require()함수를 호출합니다.
// require()는 exports 객체를 반환한다.
var calc = require("./calc");

//require()함수의 반환값은 exports 객체이고 calc 변수는 exports 객체처럼 사용할 수 있습니다.
var calc2 = require("./calc2");

console.log(calc.divide(15, 5));
console.log(calc2.multiply(calc2.add(1, 2), calc2.add(2, 3))); // 15

console.log(calc2.add(3, 5));