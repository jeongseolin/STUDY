//1. 지시사항에 따라 함수 코드를 완성하세요.
function calculate(e) {
  e.preventDefault();

  const mmEl = document.getElementById("mm").value;
  const us_sizeEl = document.getElementById("us_size");
  const uk_sizeEl = document.getElementById("uk_size");
  const eu_sizeEl = document.getElementById("eu_size");

  const inches = Number(mmEl) / 25.4;
  const usSize= (3 * inches) - 22;
  const ukSize = (3 * inches) - 23;
  const euSize = 1.27 * (ukSize + 23) + 2;

  us_sizeEl.value = usSize.toFixed(2);
  uk_sizeEl.value = ukSize.toFixed(2);
  eu_sizeEl.value = euSize.toFixed(2);

}


// 실행 및 채점을 위한 코드입니다. 수정하지 말아주세요.
const button = document.getElementById("calc")
button.addEventListener("click", calculate)