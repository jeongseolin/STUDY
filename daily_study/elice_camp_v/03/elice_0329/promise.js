// callback.js에서 작성된 내용입니다. 
function adder(a, b, callback) {
  if (a == 0 || b == 0) {
      callback("no zero", null);
      return;
  }
  console.log(`${a}+${b}=${a + b}`);
  
  callback(null, a + b);
}

function handle_error(error) {
  console.log("ERROR: ", error);
}

function add_all(a, b, c) {
  adder(a, b, (err, result) => {
      if (err == null) {
          adder(result, c, (err, result2) => {
              if (err == null) {
                  console.log(`${a}+${b}+${c}=${result2}`);
              } else {
                  handle_error(err);
              }
          });
      } else {
          handle_error(err);
      }
  });
}

// promise.js 
// adder(a, b, callback) 함수를 promise로 재작성한 함수 adder_promise를 완성합니다.
// callback 함수 실행 오류를 promise로 처리합니다.
// callback 함수 실행 결과를 promise로 처리합니다.
// callback.js 파일을 참고하여 add_all() 함수 내 adder_promise(a, b)의 다음 줄을 완성합니다.
// catch를 활용하여 promise 에러를 handle_error 함수로 처리하도록 완성합니다.
function adder(a, b, callback) {
  if (a == 0 || b == 0) {
      callback("no zero", null);
      return;
  }
  console.log(`${a}+${b}=${a + b}`);
  
  callback(null, a + b);
}

function handle_error(error) {
  console.log("ERROR: ", error);
}

function adder_promise(a, b) {
  return new Promise((resolve, reject) => {
      adder(a, b, (err, result) => {
          if (err) {
              /* 1. promise 에서 에러 처리하기 */
              reject(err);
              return;
          }
          /* 2. promise 에서 결과값 처리하기 */
          resolve(result);
      });
  });
}

function add_all(a, b, c) {
  adder_promise(a, b)
      /* 3. then 을 활용하여 result 와 c 를 add_promise 하기 */
      .then((result) => adder_promise(result, c))
      .then(result2 => {
          console.log(`${a}+${b}+${c}=${result2}`);
      })
      /* 4. catch 를 활용하여 promise 의 에러를 handle_error 함수로 전달하기 */
      .catch((err) => handle_error(err));
}

module.exports = add_all;