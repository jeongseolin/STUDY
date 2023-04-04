const btnSuccess = document.getElementById("btn_success");
const btnFail = document.getElementById("btn_fail");
const text = document.getElementById("text");

const prom = (param) => {
  return new Promise((resolve, reject) => {
      if (param) { resolve('성공했습니다!') }
      else { reject('실패했습니다 ㅜㅜ') }
  }

  );
};

btnSuccess.addEventListener("click", () => {
  prom(true).then(
    (param) => {
      text.innerText = param;
    },
    (param) => {
      text.innerText = param;
    }
  );
});

btnFail.addEventListener("click", () => {
  prom(false).then(
    (param) => {
      text.innerText = param;
    },
    (param) => {
      text.innerText = param;
    }
  );
});
