// 지시사항에 따라 코드를 작성합니다.
function getAvgFromArray(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / arr.length;
  return Math.ceil(avg); // 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 반환
}






// 아래 숫자 부분을 자유롭게 바꾸어 가며 실행해 보세요.
// 물론 현재 그대로 두어도 무방합니다. 제출 시의 채점과는 무관합니다.
const inputA = [1, 2, 3, 4, 5]


// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
module.exports = { inputs: [inputA], func: getAvgFromArray }
