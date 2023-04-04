import "babel-polyfill";

const startingMinutes = 10;

//time이라는 변수는 카운트다운 타이머의 시작 시간인 10분을 초단위로 저장합니다. (총 600초)
let time = startingMinutes * 60;
const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownEl.innerHTML = `${minutes}: ${seconds}`;

  time--;

  if (time == 590) {
    let startTime = Date.now();
    //3. 타이머가 시작되고 10초가 지났다면 `timeTest()`를 실행해서 이 함수가 실행되고 경과된 시간(`timeTaken`)을 alert("") 메시지에 띄우세요.
    timeTest().then(() => {
      let finishTime = Date.now();
      let timeTaken = finishTime - startTime;
      alert("Time taken in milliseconds: " + timeTaken);
    });
  }
}

//1. `timeoutPromise()`함수는 인자로 받은 interval만큼 늦게 Promise를 반환합니다.
//이 함수를 setTimeout()을 사용해서 완성하세요.
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("done");
    }, interval);
  });
}

//2. async를 사용해서 `timeoutPromise()`를 3초 늦게 실행하는 timeTest()함수를 만드세요. 반환할때는 await를 사용하세요.
async function timeTest() {
  await timeoutPromise(3000);
}
