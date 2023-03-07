// 뒤틀린 구구단

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하고 출력값을 return 하세요.
function solution() {
  const arr = [];
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {

      arr.push([i, j, i * j]);
    }
  }

  // arr -> [[2,1,2], [3,1,3]]
  // 1. sort(): 결괏값을 기준으로 오름차순 정렬
  // 2. map(): 배열을 순회하면서 문자열로 변경
  // 3. join(): \n으로 합치기

  return arr
    .sort((a, b) => a[2] - b[2])
    .map((arr) => `${arr[0]} * ${arr[1]} = ${arr[2]}`)
    .join('\n');
}