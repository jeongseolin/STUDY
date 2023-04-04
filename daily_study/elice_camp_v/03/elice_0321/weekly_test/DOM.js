//1. submit 버튼을 클릭하면 document.write()로 이름을 출력하는 코드를 작성하세요.
function getForm(e) {
  e.preventDefault();
  const firstName = document.getElementsByName("fname")[0].value;
  const lastName = document.getElementsByName("lname")[0].value;
  document.write(`${firstName}${lastName}`);
}

//2. calculate 버튼을 클릭하면 사용자의 BMI 지수를 출력하는 코드를 작성하세요.
function calculateVolume(e) {
  e.preventDefault();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  const bmi = weight / Math.pow(height / 100, 2);
  document.getElementById("bmi").value = bmi.toFixed(2);
}

document.getElementById("calc").onclick = calculateVolume;
document.getElementById("submit").onclick = getForm;
