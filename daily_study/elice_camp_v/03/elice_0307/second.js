// 어린이만 골라내는 함수 만들기
function getOnlyChilds(inputA) {
  let arr = [];
  for (let i = 0; i < inputA.length; i++) {
    if (inputA[i].age < 20 ) {
      arr.push(inputA[i].name);
    }
  }
  return arr;
}

// 직각삼각형 여부를 판단하는 함수 만들기
function isRightTriangle (a, b, c) {
  if (a ** 2 === b ** 2 + c ** 2) return true;
  else return false;
}

// 자릿수 배열을 숫자로 되돌리는 함수 만들기
function makeNumberFromDigits(inputA) {
  let answer = Number(inputA.join('')) // join() : 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  return answer;
}