import "./app.css";

const Form = () => {
  const form = document.getElementById("input-form");
  const button = document.getElementById("form-button");
  const result = document.getElementById("result-text");

  button.addEventListener("click", (e) => {
    const formData = formDataToObject(new FormData(form));
    // formData 정보를 이용해 복리를 계산하세요.
    // 적절하게 변환하여, 결과 텍스트를 출력하세요.
// 순서2)
    const {principal, rate, year, frequency} = parseUserInputs(formData)
// 순서4)
    const amount = calculateCompoundInterest(principal, rate, year, frequency)
// 순서7)
        result.innerText = getResultText(principal, rate, year, frequency, amount)
  });

};

// 순서5)
function getResultText(principal, rate, year, frequency, amount) {
    principal = parseMoneyText(principal)
    frequency = parseFrequencyText(frequency)
    rate = parseRateText(rate)
    amount = parseMoneyText(amount)
    return `예금액 ${principal}원 기준\n${year}년 후\n${frequency} ${rate}%의 복리 계산 시\n최종 잔고는\n${amount}원 입니다.`

}

// 순서6)
function parseRateText(rate) {
    return `${(rate * 100).toFixed(2)}`
}
function parseMoneyText(principal){
    return principal.toLocaleString("ko-KR") // ',' 생김
}
function parseFrequencyText(frequency) {
    return {
        1: "연별",
        2: "반기별",
        4: "분기별",
        12: "월별"
    }[frequency]
}

// 순서3)
// 입력을 받아서 복리이자율 계산
function calculateCompoundInterest(principal, rate, year, frequency){
    const result = 
        principal * Math.pow(1 + rate / frequency, frequency * year)
    return Math.floor(result);
}

const app = () => {
  Form();
};

module.exports = app;

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce( // 폼엔트리는 key, value, 값으로 폼의 값을 다 받아올 수 있다.
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}

// 순서1)
function parseUserInputs(formData) { // 전부 string으로 되어있기때문에 각각 맞게 변형해서 가져와야한다.
  const {principal, rate, year, frequency} = formData
  return {
      principal: Number(principal),
      rate: Number((rate / 100).toFixed(2)), // 소수점 둘째자리까지
      year: Number(year),
      frequency: Number(frequency)
  }
}