// 5명이 외친 제시어에 어떤 종류의 이상한 답이 나왔는지 출력하는 프로그램을 작성하시오.

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(data) {
  let list = data.split(' ');
  let answer = [];

  for (let i = 0; i < list.length; i++) {
    if (answer.includes(list[i]) === false ) {answer.push(list[i]);}
  }
  return answer.join(' ');
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
