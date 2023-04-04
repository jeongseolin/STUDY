// countdown.js 내용입니다. 
function countDown(count, callback) {
  console.log(count);
  
  if (count === 0) {
      callback();
      return;
  }
  
  setTimeout(() => {
      countDown(count - 1, callback);
  }, 1000);
}

module.exports = countDown;

// index.js - callback 함수를 활용
// 5초 후에 callback이 실행되도록 수정합니다.
// callback은 “BOOM!”이라는 문자열이 출력되는 함수로 구성 합니다. 출력은 console.log 함수를 사용합니다.
// 함수는 ES6의 arrow function을 사용합니다.
const countDown = require('./countdown');

countDown(5, () => {
    console.log("BOOM!");
} );