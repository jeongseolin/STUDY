//1. 이 코드를 실행한 후 드래그 한 뒤 ctrl+ "/"로 주석 처리하세요.
// for (let i = 1; i <= 5; i++) {
//  setTimeout(function () {
//    console.log(i);
//  }, i * 1000);
// }

function countTimer(n) {
  for (var i = 1; i <= n; i++) {
    //2. 위와 같이 작동하도록 아래 함수의 for loop 내에 close 함수(closure 클로저)를 사용하세요.
    function close(s) {
      setTimeout(function () {
        console.log(s);
      }, s * 1000);
    }
    close(i);
  }
}

module.exports.countTimer = countTimer;
