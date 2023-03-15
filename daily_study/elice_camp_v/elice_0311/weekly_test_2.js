//


let answer1 = Object.values(student)[Object.keys(student).length-4];
document.write('학생 이름:' + answer1 + '<br>');

let answer2 = Object.values(student)[Object.keys(student).length-1];
document.write('학생이 좋아하는 것들:' + answer2);

//

function checkSign (input) {
  let num = input.toString().split(' ');
  if (num > 0) {
      answer = 'positive';
  } else if (num < 0) {
      answer = 'negative';
  } else {
      answer = 'zero';
  }
  return answer;
}

// 배열의 최대값 구하기

function getMaxNumber (input) {
  const max = Math.max.apply(null, input);
  return max;
}

// 뒤죽박죽 덧셈

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var s;

rl.on("line", function (line) {
  // 입력을 받는 부분입니다. 수정하지 마세요!

  s = line.split("");

  rl.close();
}).on("close", function () {
  var o1 = s[0]; // 연산자 1
  var o2 = s[s.length - 1]; // 연산자 2
  s.pop();
  s.shift();
  s = s.join("");

  var num = parseInt(s); // 연산자가 아닌 숫자 부분

  // 조건에 맞추어 코딩해주시면 됩니다.
  if (num % 5 == 0 && num % 3 == 0) {
  } else if (num % 5 == 0) {
    console.log(o1.repeat(num));
  } else if (num % 3 == 0) {
    console.log(o2.repeat(num));
  } else {
    console.log(o1.repeat(num) + o2.repeat(num));
  }
});

// 클릭시, 박스 숨기기

let hiddenBtn = document.getElementById('btn');

hiddenBtn.addEventListener("click", function() {
    const box = document.getElementById('game');
    box.setAttribute("style", "display:none;");
});