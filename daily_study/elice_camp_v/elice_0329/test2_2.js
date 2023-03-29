// 입력한 문자열의 앞에서부터 글자를 읽기
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

const countStr = (num) => {
  const s = input1.value;

  return new Promise((resolve, reject) => {
    // 입력받은 글자의 길이와 읽을 글자 수를 비교하여, 성공 또는 실패의 결과를 배열에 담아서 전달합니다.
    if (s.length >= num) {
      resolve([s.substr(0, num), num]);
    } else {
      reject([s, num]);
    }
  });
};

btn.addEventListener("click", () => {
  countStr(input2.value)
    // 전달받은 인자를 출력 형식에 맞춰서 출력합니다.
    .then((param) => {
      message.innerText = `앞에서 ${param[1]}글자는 ${param[0]}입니다.`;
    })
    .catch((param) => {
      message.innerText = `${param[0]}의 길이가 ${param[1]}보다 짧습니다.`;
    });
});