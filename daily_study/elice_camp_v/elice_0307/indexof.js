// 김씨 성을 가진 친구가 나열된 문자열을 출력하는 프로그램을 작성하시오.

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(data) {
  let arr = data.split(' ');
  let answerArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('김') === 0) { // -1일때는 모든 이름안에 '김'이 들어가도 반응하기때문에, 정확한 값을 출력해야 하므로
      answerArr.push(arr[i]);
    }
  }

  return answerArr.join(' ');
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
