// index.js
// "./lib/mart.js"에서 모듈을 불러오는 코드를 작성하세요.
var shopping = require('./lib/mart');

// 가져온 모듈의 매개변수에 true를 전달하여 결과를 확인하세요.
shopping('true');



// mart.js
// 매개변수로 boolean을 입력 받아, true인 경우 "Buy milk"를 6번 출력하는 코드를 작성하세요.
const shoppingmilk = (type) => {
  if (type === 'true') {
      for (let i = 0; i < 6; i++) {
          console.log("Buy milk");
      }
  }
}
module.exports = shoppingmilk;