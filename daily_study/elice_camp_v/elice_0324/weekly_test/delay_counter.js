// 느린 카운터를 만듭니다.
const counter = document.getElementById("counter");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

let click = 0;

const slowCounter = () => {
  const curClick = ++click;
  const curCounter = parseInt(counter.innerText); // 문자열 타입을 정수 타입으로 변환
  message.innerHTML += `${curClick}. 현재 값은... ${curCounter}<br>`;

  window.setTimeout(() => {
    const reCounter = parseInt(counter.innerText); // 이전 counter 값
    const newCounter = reCounter + 1; // 이전 값에 1을 더함
    counter.innerText = newCounter; // counter 업데이트
    message.innerHTML += `${curClick}. 더한 값은... ${newCounter}<br>`;
  }, 3000);
};

btn.addEventListener("click", slowCounter);
