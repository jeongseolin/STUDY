const btn = document.getElementById("btn");
const mes = document.getElementById("message");

async function triathlon() { // 각 종목이 끝난 시간을 받을 수 있게 하는 함수
  let swimEnd = await exercise(0, "swim"); 
  let bicycleEnd = await exercise(swimEnd, "bicycle");
  let runEnd = await exercise(bicycleEnd, "run");

  return runEnd;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exercise(startTime, name) {
  const exerciseInput = document.getElementById(name);
  // 1. 완주에 걸리는 시간을 구하세요.
    const time = parseInt(exerciseInput.value);

  // 2. setTimeout 대신 delay 함수를 사용해 비동기처리를 하세요.
    await delay(time);
    mes.innerHTML += `${name} finished at ${startTime + time} \n`;

  // 3. 완주한 후의 시간을 반환하세요.
  return startTime + time;
}

btn.addEventListener("click", () => {
  triathlon().then((param) => { // 1. triathlon() 함수 실행 후 total time 출력
    mes.innerText += `total time : ${param}`;
  });
});
