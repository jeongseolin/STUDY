// 약수의 약수

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution(data) {
  const arr = [];

  for (let i = 1; i <= data; i++) {
    if (data % i === 0) {
      const subArr = [];

      for (let j = 1; j <= i; j++) {
        if (i % j === 0) subArr.push(j); // i % j === 0 && subArr.push(j);
      }

      arr.push(subArr.join(' '));
    }
  }
  return arr.join('\n'); // 줄바꿈을 기준으로 출력한다. 
}


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = solution;
