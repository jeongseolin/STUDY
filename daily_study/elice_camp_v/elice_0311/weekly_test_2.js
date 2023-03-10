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

// 클릭시, 박스 숨기기

let hiddenBtn = document.getElementById('btn');

hiddenBtn.addEventListener("click", function() {
    const box = document.getElementById('game');
    box.setAttribute("style", "display:none;");
});