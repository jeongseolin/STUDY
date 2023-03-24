//1. `wait()`함수 내에 Promise를 생성합니다. 이때 `setTimeout()`이용해서 비동기 처리하세요.

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

//2. add()함수는 a,b 인자로 받은 두 가지 숫자의 합을 반환합니다.
async function add(a, b) {
  return a + b;
}

//3. `calc()`함수는 `add()` 함수를 비동기처리해서 실행합니다. `await`을 사용해서 2초 후에 두 숫자의 합을 화면에 띄우세요.
async function calc() {
  document.body.append(`before wait \n`);
  await wait(2000);
  document.body.append('after wait \n');
  const result = await add(1, 2);
  document.body.append(`The sum is ${result}`);
}

calc();
